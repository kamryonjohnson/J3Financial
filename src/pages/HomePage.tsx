import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/features/HeroSection';
import TrustSection from '@/components/features/TrustSection';
import ServicesSection from '@/components/features/ServicesSection';
import RefundAdvanceSection from '@/components/features/RefundAdvanceSection';
import LocationSection from '@/components/features/LocationSection';
import ContactSection from '@/components/features/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <RefundAdvanceSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
