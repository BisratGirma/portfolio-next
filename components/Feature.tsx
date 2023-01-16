import React from "react";

interface Props {
  title: string;
  description: string;
}

const Feature = ({ title, description }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center pt-6 border-2 border-red-600">
      <p className="text-4xl">{title}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default Feature;
