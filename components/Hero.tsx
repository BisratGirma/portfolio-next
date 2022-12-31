import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-center gap-24 py-36">
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl">Hi, I&apos;m Bisrat</h1>
        <h4 className="text-2xl">
          Mobile and Web Developer.
        </h4>
      </div>
      <div>
        <div className="w-36 h-36 border-2 border-slate-700 rounded-full"></div>
      </div>
    </div>
  );
};
