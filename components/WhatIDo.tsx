import React from "react";
import Feature from "./Feature";

const des =
  "lorem ipsum solo dola fele lora dona se komar alde asore olrea dvog goarl";

const WhatIDo = () => {
  return (
    <div className="w-full p-12">
      <p className="text-8xl">What I Do?</p>

      <div className="flex-1 w-full h-96 m-3 ">
        <Feature
          title="FrontEnd Development"
          description={des}
        />
      </div>
      <div className="flex">
        <div className="w-2/3 h-60 m-3 ">
          <Feature
            title="Mobile Development"
            description="I'm a good Mobile developer"
          />
        </div>
        <div className="w-1/3 h-60 m-3 ">
          <Feature
            title="Backend Development"
            description="I'm a good Backend developer"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
