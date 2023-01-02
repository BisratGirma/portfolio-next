import React from "react";
import icons, {
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons";

interface Props {
  links: Array<{
    link: string;
    icon: string;
  }>;
}

const Contact = ({ links }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-8xl">Reach out to me</h2>
      <div className="flex justify-around items-center py-20 gap-12">
        <div className="flex ">
          <a href="https://t.me/bisratgirma">
            <IconBrandTelegram className="w-36 h-36" />
          </a>
          <a href="https://linkedin.com/in/bisrat-girma">
            <IconBrandLinkedin className="w-36 h-36" />
          </a>
        </div>
        <span className="text-2xl">or</span>
        <div className="text-3xl">
          bisratgirma@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Contact;
