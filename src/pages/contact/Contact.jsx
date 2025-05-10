import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-[562px] h-[136px] mx-auto mb-12 mt-32">
        <h1 className="text-4xl font-bold text-[#282938] mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <form className="mb-32 max-w-[1061px] mx-auto grid md:grid-cols-2 gap-x-6 gap-y-6 bg-[#F4F6FC] p-10 rounded-lg">
        <div>
          <label className="block text-[#1C1E53] font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-[438px] h-16 border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#1C1E53]"
            placeholder="Enter your name"
          />
        </div>

        <div className="">
          <label className="block text-[#1C1E53] font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-[438px] h-16 border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#1C1E53]"
            placeholder="Enter your email"
          />
        </div>

        <div className="">
          <label className="block text-[#1C1E53] font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            className="w-[438px] h-16 border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#1C1E53]"
            placeholder="Provide context"
          />
        </div>

        <div>
          <label className="block text-[#1C1E53] font-medium mb-2">Topic</label>
          <input
            type="text"
            className="w-[438px] h-16 border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#1C1E53]"
            placeholder="Select topic"
          />
        </div>
        <div>
          <label className="block text-[#1C1E53] font-medium mb-2 ">
            Message
          </label>
          <textarea
            className="border border-gray-300 w-[908px] h-[176px]"
            name=""
            id=""
          ></textarea>{" "}
          <div>
            <button className="w-[254px] h-16 bg-[#282938] text-white rounded-[41px] px-[51px] py-[15px] mt-6 hover:bg-[#1c1e53] transition duration-300">
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
