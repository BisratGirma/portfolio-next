import React from "react";
import { Lobster } from "@next/font/google";
import Link from "next/link";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  navs: string[];
  links?: Array<{
    link: string;
    element: JSX.Element;
  }>;
}

export const Header = ({ navs, links }: Props) => {
  return (
    <header className=" w-full flex justify-between items-center pt-5 px-28 bg-white  backdrop-blur-md text-black">
      <div id="logo" className={lobster.className}>
        <Link href="#" className="text-4xl ">
          Bisrat
        </Link>
      </div>

      <ul className="flex gap-16">
        {navs.map((item, k) => (
          <li key={k} className="cursor-pointer">
            <p className="hover:font-[495] hover:text-orange-600 border-b-2 border-transparent hover:border-orange-400">
              {item}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex gap-6">
        {links?.map((element, k) => (
          <Link
            key={k}
            className="border-b-2 border-transparent hover:border-orange-400 hover:text-orange-600  cursor-pointer"
            href={element.link}
          >
            {element.element}
          </Link>
        ))}
      </div>
    </header>
  );
};
