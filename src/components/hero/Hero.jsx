import React from 'react';
import img from './Illustration.svg';

const Hero = () => {
  return (
    <div className="w-full py-20 bg-[#1C1E53]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h1 className="text-[54px] font-bold text-[#FFFFFF] leading-tight mb-6">
            Building stellar websites for early startups
          </h1>
          <p className="text-[#FFFFFF] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-[#FCD980] text-[#1B1C2B] px-6 py-3 rounded hover:opacity-90 transition">
              View our work
            </button>
            <button className="text-[#1C1E53] font-medium border-b border-[#1C1E53] hover:text-[#5E3FC9] transition">
              View Pricing
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={img}
            alt="Hero Illustration"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
