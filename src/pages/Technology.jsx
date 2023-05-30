import React, { useEffect, useState } from "react";
import backgroundImage from "/public/images/background-technology-mobile.jpg";
import tabletImg from "/public/images/background-technology-tablet.jpg";
import desktopImg from "/public/images/background-technology-desktop.jpg";
import vehicleImg from "/public/images/image-launch-vehicle-landscape.jpg";
import spaceSportImg from "/public/images/image-spaceport-landscape.jpg";
import capsuleImg from "/public/images/image-space-capsule-landscape.jpg";
import vehicleImgp from "/public/images/image-launch-vehicle-portrait.jpg";
import spaceSportImgp from "/public/images/image-spaceport-portrait.jpg";
import capsuleImgp from "/public/images/image-space-capsule-portrait.jpg";

export default function Technology({ info }) {
  const [array, setArray] = useState([info]);
  const [technology, settechnology] = useState("Launch vehicle");
  const [vehicle, setVehicle] = useState("Launch vehicle");
  const [space, setSpace] = useState("Spaceport");
  const [capsule, setCapsule] = useState("Space capsule");
  const [imgSrc, setImgSrc] = useState();
  const [imgSrcDesk, setImgSrcDesk] = useState();

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
        document.body.style.backgroundImage = `url(${backgroundImage})`;
      }
    };

    screenSizeHandler();

    const resizeHandler = () => {
      screenSizeHandler();
    };
    window.addEventListener("resize", resizeHandler);
  }, []);

  const technologyGroup = array[0].technology;

  useEffect(() => {
    if (technology === "Launch vehicle") {
      setImgSrc(vehicleImg);
      setImgSrcDesk(vehicleImgp);
    } else if (technology === "Spaceport") {
      setImgSrc(spaceSportImg);
      setImgSrcDesk(spaceSportImgp);
    } else if (technology === "Space capsule") {
      setImgSrc(capsuleImg);
      setImgSrcDesk(capsuleImgp);
    }
  }, [technology]);

  const arrayMap = (technology) => {
    return technologyGroup
      .filter((item) => item.name === technology)
      .map((item) => (
        <div
          key={item.name}
          className={`flex justify-center flex-col items-center mt-7 lg:flex-row-reverse lg:gap-[200px] lg:mt-[100px]`}
        >
          <div>
            <picture>
              <source media="(max-width: 1024px)" srcSet={imgSrc} />
              <source media="(min-width: 1024px)" srcSet={imgSrcDesk} />
              <img src={imgSrcDesk} alt="hero" className={`h-56 md:h-auto`} />
            </picture>
          </div>
          <div
            className={`flex flex-row gap-4 text-skyblue justify-center mt-8 lg:flex-col lg:relative lg:right-[520px]`}
          >
            <div
              onClick={() => {
                settechnology(vehicle);
              }}
              className={
                technology === vehicle
                  ? `w-10 h-10  rounded-full  text-center text-black  pt-2 cursor-pointer border-solid border bg-regwhite lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:pt-[15px] `
                  : `w-10 h-10  rounded-full border-solid  text-center text-solidBlack pt-2 cursor-pointer border lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:pt-[15px]`
              }
            >
              1
            </div>
            <div
              onClick={() => {
                settechnology(space);
              }}
              className={
                technology === space
                  ? `w-10 h-10  rounded-full  text-center text-black  pt-2 cursor-pointer border-solid border bg-regwhite lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:pt-[15px]`
                  : `w-10 h-10  rounded-full border-solid  text-center text-solidBlack pt-2 cursor-pointer border lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:pt-[15px]`
              }
            >
              2
            </div>
            <div
              onClick={() => {
                settechnology(capsule);
              }}
              className={
                technology === capsule
                  ? `w-10 h-10  rounded-full  text-center text-black  pt-2 cursor-pointer border-solid border bg-regwhite lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:pt-[15px]`
                  : `w-10 h-10  rounded-full border-solid  text-center text-solidBlack pt-2 cursor-pointer border lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:pt-[15px]`
              }
            >
              3
            </div>
          </div>
          <div
            className={`flex flex-col justify-center items-center lg:flex lg:flex-col lg:items-start lg:relative lg:left-[282px]`}
          >
            <div
              className={`lg:flex font-condensed text-regwhite text-base tracking-widest uppercase lg:text-[28px] hidden gap-3 lg:relative lg:top-[-100px]`}
            >
              <span className={`opacity-25`}>03 </span>
              <span>Space lunch 101</span>
            </div>
            <p
              className={`text-md mt-8 mb-2 font-bellefair uppercase text-regwhite opacity-50 lg:text-left lg:text-[16px]`}
            >
              The Terminology
            </p>
            <p
              className={`text-regwhite text-2xl font-bellefair uppercase md:text-[40px] md:mt-2 lg:text-[56px] lg:w-[470px]`}
            >
              {item.name}
            </p>
            <p
              className={`text-skyblue font-barlow text-center ml-4 mt-6 mr-6 leading-7 md:w-[458px] lg:text-left lg:ml-0 lg:text-[18px] lg:w-[444px]`}
            >
              {item.description}
            </p>
          </div>
        </div>
      ));
  };

  return (
    <>
      <div className={`flex justify-center flex-col md:justify-start md:mt-10`}>
        <div
          className={`font-condensed text-regwhite text-base tracking-widest uppercase  md:ml-10 md:text-lg lg:text-[28px] hidden`}
        >
          <span className={`opacity-25`}>02 </span>
          <span>Meet your technology</span>
        </div>
        <>{arrayMap(technology)}</>
      </div>
    </>
  );
}
