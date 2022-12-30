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
    <header className="flex justify-between p-3 px-28 bg-slate-900 bg-opacity-90 text-white">
      <div id="logo" className={inter.className}>
        <Link href="#" className="text-xl">
          Bisrat
        </Link>
      </div>

      <ul className="flex gap-9">
        {navs.map((item, k) => (
          <li
            key={k}
            className="hover:text-slate-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex gap-6">
        {links?.map((element, k) => (
          <a
            key={k}
            className="hover:text-slate-300 cursor-pointer"
            href={element.link}
          >
            {element.element}
          </a>
        ))}
      </div>
    </header>
  );
};
