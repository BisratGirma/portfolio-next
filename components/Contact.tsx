import React from "react";
import {
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-8xl">Reach out to me</h2>
      <div className="flex justify-around items-center py-20 gap-12">
        <div className="flex ">
          <Link href="https://t.me/bisratgirma">
            <IconBrandTelegram className="w-36 h-36" />
          </Link>
          <Link href="https://linkedin.com/in/bisrat-girma">
            <IconBrandLinkedin className="w-36 h-36" />
          </Link>
        </div>
        <span className="text-2xl">or</span>
        <div className="text-3xl">
          <a href="mailto:bisatgirmat@gmail.com">
            bisratgirmat@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
