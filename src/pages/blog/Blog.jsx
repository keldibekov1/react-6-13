import React from "react";
import people from "./people.png";

const Blog = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#282938] mb-4">
            A UX Case Study on Creating a Studious Environment for Students
          </h1>
          <div className="flex justify-center flex-wrap gap-1.5 text-sm text-[#1C1E53] mb-8">
            <p>
              <p className="text-[#282938]">Andrew Jonson</p>
            </p>
            <p className="text-[#282938]">Posted on 27th January 2021</p>
          </div>
        </div>

        <div className="mb-10">
          <img
            className="w-full rounded-lg shadow-md object-cover"
            src={people}
            alt=""
          />
        </div>

        <div className="text-[#1C1E53] text-center mb-20">
          <p className="text-[16px] max-w-3xl mx-auto">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
