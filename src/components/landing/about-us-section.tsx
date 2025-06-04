import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto shadow-xl border-none bg-card">
          <CardHeader className="text-center pt-8">
            <CardTitle className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Who We Are
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center px-6 pb-8 md:px-8">
            <p className="font-body text-base md:text-lg text-foreground/90 leading-relaxed">
              Seffer Exports is a trusted exporter of garments ranging from everyday wear to luxury fashion. With a strong supply chain and years of experience, we ensure quality and timely delivery around the globe.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
