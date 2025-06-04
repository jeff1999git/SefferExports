import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-10 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-xl font-bold">Seffer Exports</h3>
            <p className="font-body text-sm text-primary-foreground/80">Global Garment Exporters of Quality & Trust</p>
          </div>
          <div className="flex space-x-5">
            <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 Seffer Exports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
