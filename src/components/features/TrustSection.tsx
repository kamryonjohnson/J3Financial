import { Shield, TrendingUp, Users, Zap } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: '9 Years of Experience',
    description: 'Proven track record of reliable tax preparation and expert financial guidance',
  },
  {
    icon: TrendingUp,
    title: 'Advance Loans Up to $5,000',
    description: 'Get your money fast with our refund advance program',
  },
  {
    icon: Users,
    title: 'Knowledgeable & Friendly Staff',
    description: 'Our expert team makes tax filing stress-free and simple',
  },
  {
    icon: Zap,
    title: 'Fast & Secure Filing',
    description: 'Quick turnaround with maximum security and accuracy',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">J3 Financial?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine years of expertise with personalized service to maximize your refund
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-secondary transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
