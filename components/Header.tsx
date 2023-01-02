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
    <header className="fixed z-50 w-screen flex justify-between p-3 px-28 bg-slate-900 bg-opacity-80 backdrop-blur-md text-slate-200">
      <div id="logo" className={inter.className}>
        <Link href="#" className="text-xl">
          Bisrat
        </Link>
      </div>

      <ul className="flex gap-16">
        {navs.map((item, k) => (
          <li
            key={k}
            className="hover:text-white hover:font-[480] cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex gap-6">
        {links?.map((element, k) => (
          <a
            key={k}
            className="hover:text-white cursor-pointer"
            href={element.link}
          >
            {element.element}
          </a>
        ))}
      </div>
    </header>
  );
};
