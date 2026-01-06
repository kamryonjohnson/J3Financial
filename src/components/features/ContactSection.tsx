import { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', phone: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule your tax appointment today
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:8177816563"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="text-lg font-semibold text-foreground">
                        (817) 781-6563
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Address
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        5901 E Lancaster Suite 101
                        <br />
                        Fort Worth, TX
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-heading font-bold mb-3">
                  Walk-Ins Welcome!
                </h3>
                <p className="text-white/90">
                  No appointment necessary. Our friendly staff is ready to help
                  you maximize your refund.
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Schedule Your Appointment
                </h3>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(817) 123-4567"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your tax needs..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gradient-accent text-primary hover:opacity-90 transition-opacity shadow-gold"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Schedule Appointment
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
