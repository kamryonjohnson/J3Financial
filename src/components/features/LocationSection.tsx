import { MapPin, Navigation } from 'lucide-react';
import { Button } from '../ui/button';

export default function LocationSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Conveniently <span className="text-gradient">Located</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Easy to find, just off Highway 820 and Lancaster
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Visit Our Office
                  </h3>
                  <p className="text-muted-foreground">
                    Located in the heart of Fort Worth
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Address</div>
                  <div className="text-lg text-foreground">
                    5901 E Lancaster Suite 101<br />
                    Fort Worth, TX
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Directions</div>
                  <div className="text-foreground">
                    Just off Highway 820 and Lancaster - easy access from anywhere in Fort Worth
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg"
                asChild
                className="w-full mt-6 gradient-accent text-white hover:opacity-90 transition-opacity"
              >
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=5901+E+Lancaster+Suite+101,+Fort+Worth,+TX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </Button>
            </div>
            
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.7446!2d-97.2289!3d32.7276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d4!2s5901+E+Lancaster+Ave+Suite+101%2C+Fort+Worth%2C+TX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="J3 Financial Tax Service Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
