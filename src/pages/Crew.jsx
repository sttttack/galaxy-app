import React, { useState, useEffect } from "react";
import backgroundImage from "/public/images/background-crew-mobile.jpg";
import tabletImg from "/public/images/background-crew-tablet.jpg";
import desktopImg from "/public/images/background-crew-desktop.jpg";
import DouglasImg from "/public/images/image-douglas-hurley.png";
import MarkImg from "/public/images/image-mark-shuttleworth.png";
import VictorImg from "/public/images/image-victor-glover.png";
import AnnImg from "/public/images/image-anousheh-ansari.png";

export default function Crew({ info }) {
  const [array, setArray] = useState([info]);
  const [crew, setCrew] = useState("Douglas Hurley");
  const [douglas, setDouglas] = useState("Douglas Hurley");
  const [mark, setMark] = useState("Mark Shuttleworth");
  const [victor, setVictor] = useState("Victor Glover");
  const [anounshen, setAnounshen] = useState("Anousheh Ansari");
  const [imgSrc, setImgSrc] = useState();

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

  useEffect(() => {
    if (crew === "Douglas Hurley") {
      setImgSrc(DouglasImg);
    } else if (crew === "Mark Shuttleworth") {
      setImgSrc(MarkImg);
    } else if (crew === "Victor Glover") {
      setImgSrc(VictorImg);
    } else if (crew === "Anousheh Ansari") {
      setImgSrc(AnnImg);
    }
  }, [crew]);

  const crewGroup = array[0].crew;

  const arrayMap = (crew) => {
    return crewGroup
      .filter((item) => item.name === crew)
      .map((item) => (
        <div
          key={item.name}
          className={`flex justify-center flex-col items-center mt-7 md:flex-col-reverse lg:flex-row-reverse lg:mt-[48px]`}
        >
          <div
            className={`flex flex-col justify-center items-center border-b border-solidBlack min-w-[327px] lg:border-none`}
          >
            <img
              src={imgSrc}
              alt={item.name}
              className={`h-56 md:h-[572px] mt-4  lg:h-auto lg:max-w-full lg:mt-0`}
            />
          </div>
          <div
            className={`flex flex-row gap-4 text-skyblue justify-center mt-8 lg:relative lg:top-[200px] lg:left-[-465px] lg:mt-0`}
          >
            <div
              onClick={() => {
                setCrew(douglas);
              }}
              className={
                crew === douglas
                  ? `w-3 h-3 bg-regwhite rounded-md cursor-pointer`
                  : `w-3 h-3 bg-solidBlack rounded-md cursor-pointer`
              }
            ></div>
            <div
              onClick={() => {
                setCrew(mark);
              }}
              className={
                crew === mark
                  ? `w-3 h-3 bg-regwhite rounded-md cursor-pointer`
                  : `w-3 h-3 bg-solidBlack rounded-md cursor-pointer`
              }
            ></div>
            <div
              onClick={() => {
                setCrew(victor);
              }}
              className={
                crew === victor
                  ? `w-3 h-3 bg-regwhite rounded-md cursor-pointer`
                  : `w-3 h-3 bg-solidBlack rounded-md cursor-pointer`
              }
            ></div>
            <div
              onClick={() => {
                setCrew(anounshen);
              }}
              className={
                crew === anounshen
                  ? `w-3 h-3 bg-regwhite rounded-md cursor-pointer`
                  : `w-3 h-3 bg-solidBlack rounded-md cursor-pointer`
              }
            ></div>
          </div>
          <div
            className={`flex items-center md:flex flex-col justify-center gap-4 lg:items-start`}
          >
            <div
              className={`lg:flex font-condensed text-regwhite text-base tracking-widest uppercase lg:text-[28px] hidden gap-3 lg:relative lg:top-[-100px]`}
            >
              <span className={`opacity-25`}>02 </span>
              <span>Meet your crew</span>
            </div>
            <p
              className={`text-md mt-8 mb-2 font-bellefair uppercase text-regwhite opacity-50 md:text-2xl lg:text-[32px]`}
            >
              {item.role}
            </p>
            <p
              className={`text-regwhite text-2xl font-bellefair uppercase md:text-[40px] lg:text-[56px] lg:w-max`}
            >
              {item.name}
            </p>
            <p
              className={`text-skyblue font-barlow text-center ml-4 mt-6 mr-6 leading-7 md:w-[458px] lg:text-left lg:ml-0 lg:w-[444px] lg:h-[128px] lg:text-[18px]`}
            >
              {item.bio}
            </p>
          </div>
        </div>
      ));
  };

  return (
    <>
      <div
        className={`flex justify-center md:justify-start md:mt-10 lg:mt-[76px] lg:hidden`}
      >
        <div
          className={`font-condensed text-regwhite text-base tracking-widest uppercase  md:ml-10 md:text-lg lg:text-[28px]`}
        >
          <span className={`opacity-25`}>02 </span>
          <span>Meet your crew</span>
        </div>
      </div>
      <>{arrayMap(crew)}</>
    </>
  );
}
