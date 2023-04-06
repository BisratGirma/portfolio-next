import React, { useEffect, useRef, useState } from "react";
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

  const [navBackground, setNavBackground] = useState<any>('bg-transparent');
  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setNavBackground('w-full h-12 fixed flex justify-between items-center px-28 bg-black bg-opacity-70  backdrop-blur-md text-white')
      }
      else {
        setNavBackground('w-full flex justify-between items-center pt-7 pb-2 px-28 bg-black bg-opacity-70  backdrop-blur-md text-white');
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className="transition-all duration-500">
    <div className={`${navRef.current} transition-all duration-500 ease-in-out`}>
      <div id="logo" className={lobster.className}>
        <Link href="#" className="text-4xl ">
          Bisrat
        </Link>
      </div>

      <ul className="flex gap-16">
        {navs.map((item, k) => (
          <li key={k} className="cursor-pointer">
            <p className="hover:font-[495] hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400">
              {item}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex gap-6">
        {links?.map((element, k) => (
          <Link
            key={k}
            className="border-b-2 border-transparent hover:border-orange-400 hover:text-orange-400  cursor-pointer"
            href={element.link}
          >
            {element.element}
          </Link>
        ))}
      </div>
      </div>
    </header>
  );
};
