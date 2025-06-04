import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  { name: 'T-Shirts', image: 'https://placehold.co/400x300.png', hint: 't-shirt apparel' },
  { name: 'Formal Shirts', image: 'https://placehold.co/400x300.png', hint: 'formal shirt business' },
  { name: 'Dresses', image: 'https://placehold.co/400x300.png', hint: 'dress fashion' },
  { name: 'Jeans & Trousers', image: 'https://placehold.co/400x300.png', hint: 'jeans trousers' },
  { name: 'Sportswear', image: 'https://placehold.co/400x300.png', hint: 'sportswear active' },
  { name: 'Kidswear', image: 'https://placehold.co/400x300.png', hint: 'kidswear children' },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">
          Our Product Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
              <CardHeader className="p-0">
                <div className="relative w-full overflow-hidden" style={{ paddingTop: '75%' }}> {/* 4:3 Aspect Ratio container */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full"
                    data-ai-hint={product.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 flex-grow flex items-center justify-center">
                <CardTitle className="font-body text-xl font-semibold text-foreground text-center">
                  {product.name}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
