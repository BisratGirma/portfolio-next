import React from "react";

export const Hero = () => {
  return (
    <div className="w-full h-[300px] overflow-hidden -z-10">
      <div className="inner">
        <div className="gradient-wrap">
          <div className="gradient"></div>
        </div>
        <div className="gradient-wrap">
          <div className="gradient"></div>
        </div>
      </div>
      <div>
        <div className=" h-[800px] w-[720px] p-6 flex flex-col bg-white">
          <h5>Hi, I&apos;m</h5>
          <h1 className="text-6xl ">Bisrat Girma</h1>
          <h4 className="text-2x">
            Mobile and Web Developer with an Entreprenuerial
            mindset.
          </h4>
        </div>

        <div>
          <div className="absolute top-[25%] left-[79%] z-40 w-24 h-24 border-[0.5px] bg-amber-400 border-amber-500 rounded-full" />
        </div>
      </div>
    </div>
  );
};
