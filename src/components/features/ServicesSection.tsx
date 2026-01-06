import { FileText, DollarSign, Lock, UserCheck } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Individual Tax Preparation',
    description: 'Comprehensive tax filing for individuals with maximum deductions and credits',
    features: ['W-2 Filing', 'Deduction Optimization', 'Credit Analysis'],
  },
  {
    icon: DollarSign,
    title: 'Refund Advances',
    description: 'Get up to $5,000 before your refund arrives - fast and hassle-free',
    features: ['Quick Approval', 'Same Day Funding', 'No Hidden Fees'],
  },
  {
    icon: Lock,
    title: 'Accurate & Secure Filing',
    description: 'Bank-level security with guaranteed accuracy on every tax return',
    features: ['IRS E-File', 'Data Encryption', 'Accuracy Guarantee'],
  },
  {
    icon: UserCheck,
    title: 'Personalized Tax Support',
    description: 'One-on-one guidance from knowledgeable tax professionals',
    features: ['Expert Consultation', 'Year-Round Support', 'Tax Planning'],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a stress-free tax season
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-glow transition-all duration-300 group"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 ml-16">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
