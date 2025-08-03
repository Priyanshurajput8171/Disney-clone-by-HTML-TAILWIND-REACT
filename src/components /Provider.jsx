import React from "react";
import marvel from "./../assets/marvel.png";
import pixal from "./../assets/pixar.png";
import national from "./../assets/nationalG.png";
import starwar from "./../assets/starwar.png";
import disney from "./../assets/disney.png";

import marvelV from "./../assets/marvel.mp4";
import pixalV from "./../assets/pixar.mp4";
import nationalV from "./../assets/national-geographic.mp4";
import starwarV from "./../assets/star-wars.mp4";
import disneyV from "./../assets/disney.mp4";

function Provider() {
  const dataIV = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: pixal,
      video: pixalV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: national,
      video: nationalV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-7 p-2 px-5 md:px-16">
      {dataIV.map((item , index) => (
        <div className="border-[4px] border-gray-600 rounded-[20px] transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 relative shadow-xl shadow-gray-800">
          <img key={index} src={item.image} className="w-full z-[1]" />
           <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 z-0 rounded-[16px] opacity-0 hover:opacity-50 w-[100%]"
          />
        </div>
      ))}
    </div>
  );
}

export default Provider;
