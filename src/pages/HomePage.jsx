import React, { useEffect, useState } from "react";
import mobileImg from "/public/images/background-home-mobile.jpg";
import tabletImg from "/public/images/background-home-tablet.jpg";
import desktopImg from "/public/images/background-home-desktop.jpg";

export default function HomePage() {
  // Targeting different screen sizes

  const mobileQuery = window.matchMedia("(min-width: 320px)");
  const tabletQuery = window.matchMedia("(min-width: 768px)");
  const desktopQuery = window.matchMedia("(min-width: 1024px)");

  //  Using useEffect to change background images.

  useEffect(() => {
    // If/else to match the screen sizes.

    const screenSizeHandler = () => {
      if (desktopQuery.matches) {
        document.body.style.backgroundImage = `url(${desktopImg})`;
      } else if (tabletQuery.matches) {
        document.body.style.backgroundImage = `url(${tabletImg})`;
      } else if (mobileQuery.matches) {
        document.body.style.backgroundImage = `url(${mobileImg})`;
      }
    };

    screenSizeHandler();

    const resizeHandler = () => {
      screenSizeHandler();
    };
    window.addEventListener("resize", resizeHandler);
  }, []);

  return (
    <>
      <div
        className={`flex items-center flex-col gap-4 ml-6 mr-6 mt-10 md:mt-28 lg:absolute top-[200px] left-[165px] lg:items-start`}
      >
        <p
          className={`font-condensed text-skyblue text-base tracking-widest uppercase md:text-xl`}
        >
          So, You want to travel to
        </p>
        <h1
          className={`font-bellefair text-regwhite text-7xl tracking-wider md:text-9xl md:mt-8 lg:mt-2 mb-2`}
        >
          SPACE
        </h1>
        <p
          className={`font-barlow text-base text-center text-skyblue tracking-wider md:w-450 md:leading-7 lg:text-left`}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={`flex justify-center align-center`}>
        <div
          className={`w-36 h-36 rounded-full bg-regwhite flex items-center justify-center mt-20 font-bellefair text-xl uppercase text-black md:mt-40 md:w-60 md:h-60 md:text-4xl lg:relative top-[100px] left-[386px]`}
        >
          Explore
        </div>
      </div>
    </>
  );
}
