import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function HeroContent() {
  return (
    <div className="w-2/3 flex">
      <div className="flex flex-col max-w-[550px] items-start justify-center mx-auto">
        <h1 className="text-accent  font-bold text-[51px]  uppercase">
          I'm steve milner.
          <span className="block font-rocksalt text-white">web developer</span>
        </h1>
        <p className="text-lg text-left mt-6 mb-8">
          I'm a web designer & front‑end developer focused on crafting clean & user‑friendly
          experiences, I am passionate about building excellent software that improves the lives of
          those around me.
        </p>
        <div className="flex relative hover:bg-accent border-accent border-2 rounded-4xl items-center justify-between pl-8 gap-5">
          <span className="">More about me</span>
          <span className="bg-accent text-white rounded-full">
            <FontAwesomeIcon icon={faArrowRight} className="px-5 py-4 text-2xl" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
