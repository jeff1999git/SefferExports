import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Although not strictly necessary for mailto, using it for consistency or future # links

export default function ContactUsSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-primary">
          Get in Touch
        </h2>
        <p className="font-body text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          We&apos;d love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button variant="default" size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3 rounded-lg shadow-xl transition-transform transform hover:scale-105">
            <a href="mailto:contact@sefferexports.com">
              <Mail className="mr-2 h-5 w-5" /> Email Us: contact@sefferexports.com
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3 rounded-lg shadow-xl transition-transform transform hover:scale-105 border-primary text-primary hover:bg-primary/10">
            <a href="tel:+1234567890">
              <Phone className="mr-2 h-5 w-5" /> Call Us: +1 (234) 567-890
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
