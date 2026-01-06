import { ArrowRight, Shield, DollarSign, Users } from 'lucide-react';
import { Button } from '../ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6 animate-fadeIn">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">9 Years of Trusted Service</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fadeIn leading-tight">
            Maximum Refunds.<br />
            Fast Advances.<br />
            <span className="text-gradient">Trusted Tax Experts.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Advance loans up to $6,000 • 9 years of experience • Authorized IRS e-file Provider
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeIn">
            <Button 
              size="lg"
              asChild
              className="gradient-accent text-white hover:opacity-90 transition-opacity shadow-gold text-lg px-8"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8"
            >
              <a href="tel:8177816563">Call Now</a>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fadeIn">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <DollarSign className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-heading font-bold text-white mb-1">$6,000</div>
              <div className="text-sm text-white/70">Advance Loans</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-heading font-bold text-white mb-1">9 Years</div>
              <div className="text-sm text-white/70">Of Experience</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-heading font-bold text-white mb-1">Expert</div>
              <div className="text-sm text-white/70">Knowledgeable Staff</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}
