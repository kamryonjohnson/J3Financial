import { DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';

const benefits = [
  'Get up to $5,000 in advance',
  'Fast approval process',
  'No credit check required',
  'Same-day funding available',
  'Transparent terms and conditions',
  'Deducted from your refund',
];

export default function RefundAdvanceSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm font-semibold">Refund Advance</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Get Up to <span className="text-gradient">$5,000</span><br />
                Before Your Refund Arrives
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Don't wait weeks for your tax refund. Our advance loan program puts money in your pocket the same day, so you can handle your finances without delay.
              </p>
              
              <Button 
                size="lg"
                asChild
                className="gradient-accent text-primary hover:opacity-90 transition-opacity shadow-gold"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Check Eligibility
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                How It Works
              </h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3"
                    style={{
                      animation: `slideIn 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-muted rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Important:</strong> Advance amounts are subject to eligibility requirements and will be deducted from your final tax refund. Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
