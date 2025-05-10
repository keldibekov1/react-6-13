import React from "react";
import about from "./about.png";

const About = () => {
  return (
    <div className="container mx-auto mt-32 mb-32">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="max-w-[595px] h-[303px]">
          <p className="text-[#282938] font-medium text-lg mb-2">About Us</p>
          <h1 className="text-[54px] font-bold text-[#282938] mb-8">
            Our designs solve problems
          </h1>
          <p
            className="w-[484px] h-[84px] opacity-70 text-justify text-[16px] leading-[28px] font-normal text-gray-600"
           
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="max-w-[640px] h-[337px]">
          <img
            src={about}
            alt="About"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
