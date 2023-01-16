import React from "react";
import { Righteous } from "@next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export const Hero = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center border-[1px solid red]">
      <div className=" h-[550px] w-[900px] p-6 m-6 rounded-md bg-opacity-90 flex flex-col justify-center items-start">
        <h3 className="text-3xl pl-3">I&apos;m</h3>
        <h1 className={righteous.className}>
          <span className="text-9xl text-orange-500">
            Bisrat Girma
          </span>
        </h1>
        <h4 className="text-4xl pl-3">
          Mobile and Web Developer with an Entreprenuerial
          mindset.
        </h4>
      </div>
    </div>
  );
};
