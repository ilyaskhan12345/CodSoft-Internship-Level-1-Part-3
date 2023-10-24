import React from "react";

const about = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4  border-pink-600 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right  text-4xl font-bold ">
            <p>Hi. I'm Ilyas, nice to meet you. Please take a look around.</p>
          </div>
          <p>
            I'm a frontend developer and I've worked on a variety of projects for clients in the
            retail, travel, and healthcare industries. I'm passionate about
            creating great user experiences and have a strong understanding of
            usability and accessibility standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
