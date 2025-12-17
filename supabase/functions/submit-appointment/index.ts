import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { corsHeaders } from '../_shared/cors.ts';

interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Parse request body
    const appointmentData: AppointmentData = await req.json();

    // Validate required fields
    if (!appointmentData.name || !appointmentData.phone || !appointmentData.email) {
      return new Response(
        JSON.stringify({ error: 'Name, phone, and email are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create Supabase admin client
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Store appointment in database
    const { data: appointment, error: dbError } = await supabaseAdmin
      .from('appointments')
      .insert({
        name: appointmentData.name,
        phone: appointmentData.phone,
        email: appointmentData.email,
        message: appointmentData.message || '',
        status: 'new',
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save appointment' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send email notification using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (resendApiKey) {
      try {
        const emailBody = {
          from: 'J3 Financial <onboarding@resend.dev>',
          to: ['fortworthlonghorns@yahoo.com'],
          subject: `New Appointment Request from ${appointmentData.name}`,
          html: `
            <h2>New Appointment Request</h2>
            <p><strong>Name:</strong> ${appointmentData.name}</p>
            <p><strong>Phone:</strong> ${appointmentData.phone}</p>
            <p><strong>Email:</strong> ${appointmentData.email}</p>
            <p><strong>Message:</strong> ${appointmentData.message || 'No message provided'}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</p>
            <hr>
            <p><em>This appointment request was submitted through your website contact form.</em></p>
          `,
        };

        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify(emailBody),
        });

        if (!emailResponse.ok) {
          const errorText = await emailResponse.text();
          console.error('Resend email error:', errorText);
        } else {
          console.log('Email notification sent successfully');
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't fail the request if email fails
      }
    } else {
      console.warn('RESEND_API_KEY not configured - skipping email notification');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Appointment request received successfully',
        appointment 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing appointment:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
