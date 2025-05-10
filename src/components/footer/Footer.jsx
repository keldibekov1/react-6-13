import React from "react";
import Vector from "./Vector.png";

const Footer = () => {
  return (
    <div className="bg-[#1C1E53] text-white  py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold mb-4">Finsweet</h1>
          <p className="mb-6">
            We are always open to discuss your project and improve your online
            presence.
          </p>
          <div className="bg-[#FCD980] text-black p-4 rounded-md flex flex-col md:flex-row gap-6">
            <div>
              <p className="font-semibold">Email me at</p>
              <p>contact@website.com</p>
            </div>
            <div>
              <p className="font-semibold">Call us</p>
              <p>0927 6277 28525</p>
            </div>
          </div>
        </div>

        <div className="max-w-md">
          <h1 className="text-2xl font-bold mb-4">Lets Talk!</h1>
          <p>
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
           <div className="h-4 flex justify-center gap-7 w-fit  mt-8">
          <a href="https://facebook.com" target="_blank">
            <img className="w-4 h-4" src={Vector} alt="Facebook" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img className="w-4 h-4" src={Vector} alt="Facebook" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img className="w-4 h-4" src={Vector} alt="Facebook" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img className="w-4 h-4" src={Vector} alt="Facebook" />
          </a>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
