import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-[85vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white">
      <Image
        src="https://res.cloudinary.com/dtmaf67dy/image/upload/v1749038887/chuttersnap-fN603qcEA7g-unsplash_xdsurj.jpg"
        alt="Global garment shipping background"
        layout="fill"
        objectFit="cover"
        quality={85}
        className="z-0 brightness-[0.6]"
        data-ai-hint="clothing global shipping"
        priority
      />
      <div className="relative z-10 p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          Seffer Exports
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl mb-8 md:mb-10" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>
          “Global Garment Exporters of Quality & Trust”
        </p>
        <Button variant="default" size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3 rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <Link href="#contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
}
