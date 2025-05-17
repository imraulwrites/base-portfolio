import Image from 'next/image';
import HeroImage from './components/HeroImage';
import HeroContent from './components/HeroContent';

export default function Home() {
  return (
    <div className="flex h-screen">
      <HeroImage />
      <HeroContent />
    </div>
  );
}
