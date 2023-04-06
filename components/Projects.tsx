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
    <div className="flex flex-col items-center my-12 bg-white ">
      <h2 className="text-8xl">Projects</h2>
      <div className="flex flex-wrap justify-center w-full p-16 gap-12">
        {projects.map((element, k) => (
          <div
            key={k}
            className="w-[465px] h-[300px] flex justify-center items-center cursor-pointer hover:scale-105 duration-300 "
          >
            <div className="w-[456px] h-[294px] border-[0.5px] rounded-3xl shadow-md ">
              <Image
                src={element.image}
                alt={element.title}
                className="h-[36%] w-full rounded-t-3xl"
              />
              <div className="p-6">
                <h3 className="text-3xl">
                  {element.title}
                </h3>

                <p className="text-[16px] w-96">
                  {element.description.length > 150
                    ? element.description.substring(
                        150,
                        0
                      ) + "..."
                    : element.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
