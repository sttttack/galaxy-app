import React, { useState } from "react";

export default function Destination({ info }) {
  const [array, setArray] = useState([info]);
  const [moon, setMoon] = useState("Moon");
  const [mars, setMars] = useState("Mars");
  const [europa, setEuropa] = useState("Europa");
  const [titan, setTitan] = useState("Titan");
  const [destination, setDestination] = useState("Moon");

  document.body.style.backgroundImage = `url(
    "./src/images/background-destination-mobile.jpg"
  )`;

  const destinations = array[0].destinations;

  const arrayMap = (destination) => {
    return destinations
      .filter((item) => item.name === destination)
      .map((item) => (
        <div
          key={item.name}
          className={`flex justify-center flex-col items-center mt-7`}
        >
          <img src={item.images.png} alt={item.name} className={`w-44 h-44`} />
          <div
            className={`flex flex-row gap-6 text-skyblue justify-center mt-6`}
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
          <p className={`text-regwhite text-6xl mt-5 font-bellefair uppercase`}>
            {item.name}
          </p>
          <p
            className={`text-skyblue font-barlow text-center ml-6 mr-6 leading-7`}
          >
            {item.description}
          </p>

          <hr
            className={`min-w-[327px] h-px	 mx-auto my-4 bg-solidBlack border-0 rounded mt-8 md:my-10`}
          ></hr>

          <div
            className={`flex gap-8 flex-col justify-center items-center mt-4`}
          >
            <div>
              <p
                className={`font-barlow text-skyblue text-sm uppercase tracking-wider text-center`}
              >
                Avg. Distance
              </p>
              <p
                className={`text-regwhite font-bellafair text-3xl text-center mt-3`}
              >
                {item.distance}
              </p>
            </div>

            <div>
              <p
                className={`font-barlow text-skyblue text-sm uppercase tracking-wider`}
              >
                Est. Travel Time
              </p>
              <p
                className={`text-regwhite font-bellafair text-3xl text-center uppercase mt-3 mb-5`}
              >
                {item.travel}
              </p>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <>
      <div className={`flex justify-center`}>
        <div
          className={`font-condensed text-regwhite text-base tracking-widest uppercase`}
        >
          <span className={`opacity-25`}>01 </span>
          <span>Pick your destination</span>
        </div>
      </div>
      <>{arrayMap(destination)}</>
    </>
  );
}
