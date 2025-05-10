import React from "react";
import img1 from "./Card.png";
import img2 from "./Rectangle1313.png";
import img3 from "./Card1.png";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
   <>
    <Hero/>
    <section className="w-full py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-14 mt-14">
          <h2 className="text-4xl font-bold text-[#282938]">
            View our projects
          </h2>
          <div className="flex items-center gap-2 text-[#282938] cursor-pointer hover:text-[#5E3FC9] transition">
            <p className="font-medium">View More</p>
            <span>→</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative group flex-1 min-h-[600px] rounded-xl overflow-hidden">
            <img
              src={img1}
              alt="Workhub project"
              className="w-full h-full object-cover"
            />
            <div
              style={{
                background:
                  "linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)",
              }}
              className="absolute inset-0 p-8 flex flex-col justify-end transition-all w-[396px] h-[600px]"
            >
              <h3 className="text-white text-2xl font-semibold mb-4 leading-snug">
                Workhub office Webflow <br /> Webflow Design
              </h3>
              <p className="text-white mb-6">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
              </p>
              <div className="flex items-center gap-2 text-[#FCD980] cursor-pointer hover:underline">
                <span>View project</span>
                <span>→</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full lg:w-[410px]">
            <div className="relative group w-[405px] h-[284px] rounded-xl overflow-hidden">
              <img
                src={img2}
                alt="Unisaas Website"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 p-6 flex flex-col justify-end transition-all"
                style={{
                  background:
                    "linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)",
                }}
              >
                <h3 className="text-white text-xl font-semibold mb-4 text-[24px]  ">
                  Unisaas Website Design
                </h3>
                <div className="flex items-center gap-2 text-[#FCD980] cursor-pointer hover:underline">
                  <span>View portfolio</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            <div className="h-[284px] rounded-xl overflow-hidden">
              <img
                src={img3}
                alt="Project visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  );
};

export default Home;
