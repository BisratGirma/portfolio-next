import React from "react";
import { Lobster } from "@next/font/google";
import Link from "next/link";

const inter = Lobster({
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
    <header className="fixed z-50 w-screen flex justify-between items-center pt-5 px-28 bg-white bg-opacity-80 backdrop-blur-md text-black">
      <div id="logo" className={inter.className}>
        <Link href="#" className="text-4xl">
          Bisrat
        </Link>
      </div>

      <ul className="flex gap-16">
        {navs.map((item, k) => (
          <li key={k} className="cursor-pointer">
            <p className="hover:font-[480]">{item}</p>
          </li>
        ))}
      </ul>
      <div className="flex gap-6">
        {links?.map((element, k) => (
          <Link
            key={k}
            className="hover:text-black cursor-pointer"
            href={element.link}
          >
            {element.element}
          </Link>
        ))}
      </div>
    </header>
  );
};
