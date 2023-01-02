import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-12 bg-gray-900 flex items-center justify-center">
      <p className="text-white">{`© ${new Date().getFullYear()} - Bisrat Girma `}</p>
    </div>
  );
};

export default Footer;
