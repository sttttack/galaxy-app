import React, { useEffect, useState } from "react";
import backgroundImage from "/public/images/background-technology-mobile.jpg";
import vehicleImg from "/public/images/image-launch-vehicle-landscape.jpg";
import spaceSportImg from "/public/images/image-spaceport-landscape.jpg";
import capsuleImg from "/public/images/image-space-capsule-landscape.jpg";

export default function Technology({ info }) {
  const [array, setArray] = useState([info]);
  const [technology, settechnology] = useState("Launch vehicle");
  const [vehicle, setVehicle] = useState("Launch vehicle");
  const [space, setSpace] = useState("Spaceport");
  const [capsule, setCapsule] = useState("Space capsule");
  const [imgSrc, setImgSrc] = useState();

  document.body.style.backgroundImage = `url(${backgroundImage})`;

  const technologyGroup = array[0].technology;

  useEffect(() => {
    if (technology === "Launch vehicle") {
      setImgSrc(vehicleImg);
    } else if (technology === "Spaceport") {
      setImgSrc(spaceSportImg);
    } else if (technology === "Space capsule") {
      setImgSrc(capsuleImg);
    }
  }, [technology]);

  const arrayMap = (technology) => {
    return technologyGroup
      .filter((item) => item.name === technology)
      .map((item) => (
        <div
          key={item.name}
          className={`flex justify-center flex-col items-center mt-7`}
        >
          <div className={`flex flex-col justify-center items-center`}>
            <img src={imgSrc} alt={item.name} className={`h-56`} />
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
                  ? `w-10 h-10 bg-regwhite rounded-full  text-center pt-2 cursor-pointer border-solid border-4`
                  : `w-10 h-10 bg-solidBlack rounded-full border-solid  text-center pt-2 cursor-pointer`
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
                  ? `w-10 h-10 bg-regwhite rounded-full border-solid text-center pt-2 cursor-pointer`
                  : `w-10 h-10 bg-solidBlack rounded-full border-solid text-center pt-2 cursor-pointer`
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
                  ? `w-10 h-10 bg-regwhite rounded-full border-solid text-center pt-2 cursor-pointer`
                  : `w-10 h-10 bg-solidBlack rounded-full border-solid text-center pt-2 cursor-pointer`
              }
            >
              3
            </div>
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
