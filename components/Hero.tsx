import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-around gap-24 pt-44 mb-20">
      <div className="flex flex-col gap-3">
        <h5>Hi, I&apos;m</h5>
        <h1 className="text-6xl">Bisrat Girma</h1>
        <h4 className="text-2xl">
          Mobile and Web Developer with an Entreprenuerial
          mindset.
        </h4>
      </div>
      <div>
        <div className="w-72 h-72 border-[0.5px] border-slate-700 rounded-full"></div>
      </div>
    </div>
  );
};
