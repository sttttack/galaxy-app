import React, { useState } from "react";
import backgroundImage from "../images/background-home-mobile.jpg";

export default function HomePage() {
  document.body.style.backgroundImage = `url(${backgroundImage})`;

  return (
    <>
      <div className={`flex items-center flex-col gap-4 ml-6 mr-6 mt-10`}>
        <p className={`font-condensed text-skyblue text-base tracking-widest`}>
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className={`font-bellefair text-regwhite text-7xl tracking-wider`}>
          SPACE
        </h1>
        <p
          className={`font-barlow text-base text-center text-skyblue tracking-wider`}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={`flex justify-center align-center`}>
        <div
          className={`w-36 h-36 rounded-full bg-regwhite flex items-center justify-center mt-20 font-bellefair text-xl uppercase text-black`}
        >
          Explore
        </div>
      </div>
    </>
  );
}
