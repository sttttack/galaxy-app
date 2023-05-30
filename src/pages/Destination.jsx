import React, { useState, useEffect } from "react";
import backgroundImage from "/public/images/background-destination-mobile.jpg";
import tabletImg from "/public/images/background-destination-tablet.jpg";
import desktopImg from "/public/images/background-destination-desktop.jpg";
import MoonImg from "/public/images/image-moon.png";
import MarsImg from "/public/images/image-mars.png";
import EuropaImg from "/public/images/image-europa.png";
import TitanImg from "/public/images/image-titan.png";

export default function Destination({ info }) {
  const [array, setArray] = useState([info]);
  const [moon, setMoon] = useState("Moon");
  const [mars, setMars] = useState("Mars");
  const [europa, setEuropa] = useState("Europa");
  const [titan, setTitan] = useState("Titan");
  const [destination, setDestination] = useState("Moon");
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

  const destinations = array[0].destinations;

  useEffect(() => {
    if (destination === "Moon") {
      setImgSrc(MoonImg);
    } else if (destination === "Mars") {
      setImgSrc(MarsImg);
    } else if (destination === "Europa") {
      setImgSrc(EuropaImg);
    } else if (destination === "Titan") {
      setImgSrc(TitanImg);
    }
  }, [destination]);

  const arrayMap = (destination) => {
    return destinations
      .filter((item) => item.name === destination)
      .map((item) => (
        <div
          key={item.name}
          className={`flex justify-center flex-col items-center mt-7 lg:flex-row lg:gap-[157px]`}
        >
          <div>
            <div
              className={`lg:flex font-condensed text-regwhite text-base tracking-widest uppercase lg:text-[28px] hidden lg:relative lg:top-[-90px] gap-4`}
            >
              <span className={`opacity-25`}>01 </span>
              <span>Pick your destination</span>
            </div>
            <img
              src={imgSrc}
              alt={item.name}
              className={`w-44 h-44 lg:max-w-full lg:h-auto md:w-[300px] md:h-[300px]`}
            />
          </div>
          <div className={`flex items-center flex-col lg:items-start`}>
            <div
              className={`flex flex-row gap-6 text-skyblue justify-center mt-6 uppercase md:gap-[35px] md:mt-[53px]`}
            >
              <p
                onClick={() => {
                  setDestination(moon);
                }}
                className={`cursor-pointer  hover:underline`}
              >
                Moon
              </p>
              <p
                onClick={() => {
                  setDestination(mars);
                }}
                className={`cursor-pointer  hover:underline`}
              >
                Mars
              </p>
              <p
                onClick={() => {
                  setDestination(europa);
                }}
                className={`cursor-pointer  hover:underline active:underline`}
              >
                Europa
              </p>
              <p
                onClick={() => {
                  setDestination(titan);
                }}
                className={`cursor-pointer  hover:underline`}
              >
                Titan
              </p>
            </div>

            <p
              className={`text-regwhite text-6xl mt-5 font-bellefair uppercase md:mt-[32px]`}
            >
              {item.name}
            </p>
            <p
              className={`text-skyblue font-barlow text-center ml-6 mr-6 leading-7 md:w-[573px] md:mt-2 lg:text-left lg:max-w-full lg:text-[18px] lg:ml-0 lg:h-[128px]`}
            >
              {item.description}
            </p>

            <hr
              className={`min-w-[327px] h-px mx-auto my-4 bg-solidBlack border-0 rounded mt-8 md:my-10 md:w-[573px]`}
            ></hr>

            <div className={`lg:flex lg:flex-row gap-[72px]`}>
              <div
                className={`flex gap-8 flex-col justify-center items-center mt-4 md:flex-row lg:mt-0`}
              >
                <div>
                  <p
                    className={`font-barlow text-skyblue text-sm uppercase tracking-wider text-center lg:mb-0 lg:text-left`}
                  >
                    Avg. Distance
                  </p>
                  <p
                    className={`text-regwhite font-bellafair text-3xl text-center uppercase mt-3`}
                  >
                    {item.distance}
                  </p>
                </div>
              </div>

              <div>
                <p
                  className={`font-barlow text-skyblue text-sm uppercase tracking-wider text-center mt-2 lg:mt-0`}
                >
                  Est. Travel Time
                </p>
                <p
                  className={`text-regwhite font-bellafair text-3xl text-center uppercase mt-3 mb-5 md:mb-0 lg:text-left`}
                >
                  {item.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <>
      <div className={`flex justify-center md:justify-start md:mt-10`}>
        <div
          className={`font-condensed text-regwhite text-base tracking-widest uppercase  md:ml-10 md:text-lg lg:text-[28px] lg:ml-[22.2%] hidden`}
        >
          <span className={`opacity-25`}>01 </span>
          <span>Pick your destination</span>
        </div>
      </div>
      <>{arrayMap(destination)}</>
    </>
  );
}
