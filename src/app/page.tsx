import HeroSection from '@/components/landing/hero-section';
import AboutUsSection from '@/components/landing/about-us-section';
import ProductsSection from '@/components/landing/products-section';
import WhyChooseUsSection from '@/components/landing/why-choose-us-section';
import ContactUsSection from '@/components/landing/contact-us-section';
import Footer from '@/components/landing/footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <ProductsSection />
        <WhyChooseUsSection />
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
}
