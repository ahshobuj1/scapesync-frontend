import Features from '@/components/sections/Features';
import HeroSection from '@/components/sections/HeroSection';
import BuildEveryone from '@/components/sections/BuildEveryone';

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <HeroSection />
      <Features />
      <BuildEveryone />
    </div>
  );
}
