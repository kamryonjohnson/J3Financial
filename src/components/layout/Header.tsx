import { Phone } from 'lucide-react';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn-ai.onspace.ai/onspace/files/8QFfpTsoiM4AuZUYf8yXZq/unnamed__1_-removebg-preview_(1).png" 
              alt="J3 Financial Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <Button 
            asChild
            size="sm"
            className="gradient-accent text-white hover:opacity-90 transition-opacity shadow-gold"
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
