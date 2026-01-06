import { Phone } from 'lucide-react';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-secondary flex items-center justify-center text-white font-heading font-bold text-xl">
              J3
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg leading-none text-foreground">
                J3 Financial
              </h1>
              <p className="text-xs text-muted-foreground">Tax Service</p>
            </div>
          </div>
          
          <Button 
            asChild
            size="sm"
            className="gradient-secondary text-white hover:opacity-90 transition-opacity shadow-glow"
          >
            <a href="tel:8177816563" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(817) 781-6563</span>
              <span className="sm:hidden">Call</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
