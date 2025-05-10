import React from "react";
import facebook from "./facebook.png";

const Work = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#F4F6FC] w-[1600px] h-[416px] border flex items-center justify-center">
        <div className="w-[733px] h-[224px] p-4 mx-[434px] my-[96px]">
          <p className="text-[#282938] mb-1 flex  justify-center">
            What we created
          </p>
          <div className="">
            <h1 className="text-[#282938] text-[48px] font-bold mb-6 flex  justify-center">
              Our Work Portfolio
            </h1>
            <p className="text-[#282938] mx-auto text-center">
              We help teams create great digital products by providing them with
              tools and technology to make the design-to-code process
              universally accessible.
            </p>
          </div>
          <div className="h-4 flex justify-center gap-7 w-fit mx-auto mt-8">
            <a
              href="https://facebook.com"
              target="_blank"
              
            >
              <img className="w-4 h-4" src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              
            >
              <img className="w-4 h-4" src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              
            >
              <img className="w-4 h-4" src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              
            >
              <img className="w-4 h-4" src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
