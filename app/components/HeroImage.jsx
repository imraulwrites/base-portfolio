import Image from 'next/image';
import React from 'react';
import HeroImg from '@/public/assets/hero-img.jpg';

function HeroImage() {
  return (
    <div className="flex items-center w-1/3 relative">
      <div
        className="bg-accent w-full h-[200vh] fixed -top-1/2 -left-[83%] -rotate-15  
      "
      ></div>
      <Image src={HeroImg} className="rounded-4xl absolute left-10" alt="Hero Image" />
    </div>
  );
}

export default HeroImage;
