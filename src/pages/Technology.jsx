import React, { useState } from "react";

export default function Technology({ info }) {
  const [array, setArray] = useState([info]);
  const [technology, settechnology] = useState("Launch vehicle");
  const [vehicle, setVehicle] = useState("Launch vehicle");
  const [space, setSpace] = useState("Spaceport");
  const [capsule, setCapsule] = useState("Space capsule");

  document.body.style.backgroundImage = `url(
    "./src/images/background-technology-mobile.jpg"
  )`;

  const technologyGroup = array[0].technology;

  const arrayMap = (technology) => {
    return technologyGroup
      .filter((item) => item.name === technology)
      .map((item) => (
        <div
          key={item.name}
          className={`flex justify-center flex-col items-center mt-7`}
        >
          <div className={`flex flex-col justify-center items-center`}>
            <img
              src={item.images.landscape}
              alt={item.name}
              className={`h-56`}
            />
          </div>
          <div
            className={`flex flex-row gap-4 text-skyblue justify-center mt-8`}
          >
            <div
              onClick={() => {
                settechnology(vehicle);
              }}
              className={
                technology === vehicle
                  ? `w-3 h-3 bg-regwhite rounded-md`
                  : `w-3 h-3 bg-solidBlack rounded-md`
              }
            ></div>
            <div
              onClick={() => {
                settechnology(space);
              }}
              className={
                technology === space
                  ? `w-3 h-3 bg-regwhite rounded-md`
                  : `w-3 h-3 bg-solidBlack rounded-md`
              }
            ></div>
            <div
              onClick={() => {
                settechnology(capsule);
              }}
              className={
                technology === capsule
                  ? `w-3 h-3 bg-regwhite rounded-md`
                  : `w-3 h-3 bg-solidBlack rounded-md`
              }
            ></div>
          </div>
          <p
            className={`text-md mt-8 mb-2 font-bellefair uppercase text-regwhite opacity-50`}
          >
            The Terminology
          </p>
          <p className={`text-regwhite text-2xl font-bellefair uppercase`}>
            {item.name}
          </p>
          <p
            className={`text-skyblue font-barlow text-center ml-4 mt-6 mr-6 leading-7`}
          >
            {item.description}
          </p>
        </div>
      ));
  };

  return (
    <>
      <div className={`flex justify-center flex-col items-center`}>
        <div
          className={`font-condensed text-regwhite text-base tracking-widest uppercase`}
        >
          <span className={`opacity-25`}>02 </span>
          <span>Meet your technology</span>
        </div>
        <>{arrayMap(technology)}</>
      </div>
    </>
  );
}
