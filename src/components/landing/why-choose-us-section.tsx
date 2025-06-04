import { Globe, ShieldCheck, Clock, ClipboardEdit, BadgePercent, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  { icon: Globe, title: 'Global Reach', description: 'We ship our quality garments to partners worldwide.' },
  { icon: ShieldCheck, title: 'Quality Assurance', description: 'Rigorous checks ensure every garment meets high standards.' },
  { icon: Clock, title: 'On-Time Delivery', description: 'Our reliable logistics network ensures timely arrivals.' },
  { icon: ClipboardEdit, title: 'Custom Orders', description: 'Tailored solutions to meet your specific brand needs.' },
  { icon: BadgePercent, title: 'Competitive Pricing', description: 'Value-driven pricing without compromising on quality.' },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
              <CardHeader className="items-center pt-6">
                <benefit.icon className="w-12 h-12 text-accent mb-4" strokeWidth={1.5} />
                <CardTitle className="font-body text-xl font-semibold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow px-6 pb-6">
                <p className="font-body text-sm text-foreground/80 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
