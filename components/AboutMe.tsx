import Image from "next/image";
import React from "react";
import * as proPic from "../assets/profilePic.jpg";
const bio =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const AboutMe = () => {
  return (
    <div className="flex flex-col px-36 gap-9">
      <h2 className="text-8xl">AboutMe</h2>
      <div className="flex gap-24">
        <p className="text-[30px] w-2/3 text-justify">
          {bio}
        </p>
        <Image
          src={proPic}
          alt="Bio Picture"
          className="w-72 h-96 rounded-3xl"
        />
      </div>
    </div>
  );
};
