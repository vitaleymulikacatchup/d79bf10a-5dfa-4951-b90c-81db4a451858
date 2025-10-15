"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = /* provided JSON array */;

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="TeeTailor"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Discover Unique T-Shirts"
            description="High-quality, unique designs for every taste."
            imageSrc={assetMap.find(a => a.id === 'heroImage')?.url ?? '/public/images/placeholder.webp'}
            buttons={[{ text: 'Shop Now', href: 'products' }]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: '1', name: 'Classic Red', price: '$25', imageSrc: assetMap.find(a => a.id === 'product1')?.url ?? '/public/images/placeholder.webp' },
              { id: '2', name: 'Ocean Blue', price: '$30', imageSrc: assetMap.find(a => a.id === 'product2')?.url ?? '/public/images/placeholder.webp' },
              { id: '3', name: 'Vibrant Green', price: '$28', imageSrc: assetMap.find(a => a.id === 'product3')?.url ?? '/public/images/placeholder.webp' },
            ]}
            title="Our Collection"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay in the Loop"
            description="Subscribe to our newsletter for updates."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: 'Shop', items: [{ label: 'Home', href: '/' }, { label: 'Products', href: 'products' }] },
              { title: 'About', items: [{ label: 'Our Story', href: 'about' }] }
            ]}
            copyrightText="© 2025 TeeTailor All rights reserved"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
