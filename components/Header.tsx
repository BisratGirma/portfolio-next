import React from "react";
import { Lobster } from "@next/font/google";
import Link from "next/link";

const inter = Lobster({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  navs: string[];
  links?: Array<JSX.Element>;
}

export const Header = ({ navs, links }: Props) => {
  return (
    <header className="flex justify-between p-4 px-24 bg-slate-900 text-white">
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
      <ul className="flex gap-6">
        {links?.map((element, k) => (
          <li
            key={k}
            className="hover:text-slate-300 cursor-pointer"
          >
            {element}
          </li>
        ))}
      </ul>
    </header>
  );
};
