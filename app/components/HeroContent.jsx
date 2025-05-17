import Image from 'next/image';
import React from 'react';
import HeroImg from '@/public/assets/hero-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHourglassHalf } from '@fortawesome/free-regular-svg-icons';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

faHourglassHalf;

function HeroContent() {
  return (
    <div className="w-2/3 flex">
      <div className="flex flex-col max-w-[550px] items-start justify-center mx-auto">
        <h1 className="text-accent font-poppins font-bold text-[51px] uppercase">
          I'm steve milner.
          <span className="block text-white">web designer</span>
        </h1>
        <p className="text-lg text-left mt-6 mb-8 ">
          I'm a Tunisian based web designer & front‑end developer focused on crafting clean &
          user‑friendly experiences, I am passionate about building excellent software that improves
          the lives of those around me.
        </p>
        <div className="flex justify-between items-center gap-8 text-base uppercase pl-8 border border-accent rounded-4xl bg-transparent hover:bg-accent transition  duration-300 ease-in-out">
          <span className="font-bold">More about me</span>
          <span className="text-xl bg-accent rounded-full px-5 py-4">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
