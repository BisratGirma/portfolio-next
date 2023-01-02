import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  projects: Array<{
    title: string;
    description: string;
    image: string | StaticImageData;
  }>;
}

const Projects = ({ projects }: Props) => {
  return (
    <div className="flex flex-col items-center my-20 ">
      <h2 className="text-8xl">Projects</h2>
      <div className="flex flex-wrap justify-center w-full p-16 gap-12">
        {projects.map((element, k) => (
          <div
            key={k}
            className="w-[456px] h-[294px] border-[0.5px] rounded-3xl shadow-md "
          >
            <Image
              src={element.image}
              alt={element.title}
              className="h-28 w-full rounded-t-3xl "
            />
            <div className="p-6">
              <h3 className="text-3xl">{element.title}</h3>
              <body>
                {element.description.length > 150
                  ? element.description.substring(150, 0) +
                    "..."
                  : element.description}
              </body>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
