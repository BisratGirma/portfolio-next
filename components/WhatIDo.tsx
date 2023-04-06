import React from "react";
import Feature from "./Feature";

const des =
  "lorem ipsum solo dola fele lora dona se komar alde asore olrea dvog goarl";

const WhatIDo = () => {
  return (
    <div className="w-full p-12">
      <p className="text-8xl">What I Do?</p>
      <div className="lg:flex">
        <div className="w-full h-96 m-3 ">
          <Feature
            title="FrontEnd Development"
            description={des}
          />
        </div>
        <div className="w-full h-96 m-3 ">
          <Feature
            title="FrontEnd Development"
            description={des}
          />
        </div>
      </div>
      
      
    </div>
  );
};

export default WhatIDo;
