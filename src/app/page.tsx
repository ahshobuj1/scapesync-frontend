import Features from '@/components/sections/Features';
import HeroSection from '@/components/sections/HeroSection';
import BuildEveryone from '@/components/sections/BuildEveryone';
import Testimonial from '@/components/sections/Testimonial';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import ProtectedRoute from '@/utils/ProtectedRoute';

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="max-w-[1440px] mx-auto">
        <HeroSection />
        <Features />
        <BuildEveryone />
        <Testimonial />
        <FAQ />
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
