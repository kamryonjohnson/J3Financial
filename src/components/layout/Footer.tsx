import { MapPin, Phone, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-secondary flex items-center justify-center text-white font-heading font-bold text-xl">
                J3
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg leading-none">
                  J3 Financial
                </h3>
                <p className="text-xs text-white/70">Tax Service</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Serving Fort Worth with integrity and experience since 2015.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:8177816563"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                (817) 781-6563
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  5901 E Lancaster Suite 101
                  <br />
                  Fort Worth, TX
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Our Promise</h4>
            <div className="flex items-start gap-2 text-white/70 text-sm">
              <Shield className="w-5 h-5 flex-shrink-0 text-accent" />
              <p>
                We are committed to providing accurate, secure, and personalized
                tax services to maximize your refund.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-white/50 text-sm">
            <p>
              © {currentYear} J3 Financial Tax Service. All rights reserved.
            </p>
            <p className="mt-2">
              Conveniently located just off Highway 820 and Lancaster
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
