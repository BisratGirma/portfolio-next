import Image from "next/image";

import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-around gap-24 py-48">
      <div className="flex flex-col gap-3">
        <h5>
          <p className="wave">👋🏾</p> Hi, I&apos;m
        </h5>
        <h1 className="text-6xl">Bisrat Girma</h1>
        <h4 className="text-2xl">
          Mobile and Web Developer with an Entreprenuer
          mindset.
        </h4>
      </div>
      <div>
        <div className="w-72 h-72 border-[0.5px] border-slate-700 rounded-full"></div>
      </div>
    </div>
  );
};