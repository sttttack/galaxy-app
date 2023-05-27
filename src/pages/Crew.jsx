import React, { useState, useEffect } from "react";
import backgroundImage from "/public/images/background-crew-mobile.jpg";
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

  document.body.style.backgroundImage = `url(${backgroundImage})`;

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
          className={`flex justify-center flex-col items-center mt-7`}
        >
          <div
            className={`flex flex-col justify-center items-center border-b border-solidBlack min-w-[327px]`}
          >
            <img src={imgSrc} alt={item.name} className={`h-56`} />
          </div>
          <div
            className={`flex flex-row gap-4 text-skyblue justify-center mt-8`}
          >
            <div
              onClick={() => {
                setCrew(douglas);
              }}
              className={
                crew === douglas
                  ? `w-3 h-3 bg-regwhite rounded-md`
                  : `w-3 h-3 bg-solidBlack rounded-md`
              }
            ></div>
            <div
              onClick={() => {
                setCrew(mark);
              }}
              className={
                crew === mark
                  ? `w-3 h-3 bg-regwhite rounded-md`
                  : `w-3 h-3 bg-solidBlack rounded-md`
              }
            ></div>
            <div
              onClick={() => {
                setCrew(victor);
              }}
              className={
                crew === victor
                  ? `w-3 h-3 bg-regwhite rounded-md`
                  : `w-3 h-3 bg-solidBlack rounded-md`
              }
            ></div>
            <div
              onClick={() => {
                setCrew(anounshen);
              }}
              className={
                crew === anounshen
                  ? `w-3 h-3 bg-regwhite rounded-md`
                  : `w-3 h-3 bg-solidBlack rounded-md`
              }
            ></div>
          </div>
          <p
            className={`text-md mt-8 mb-2 font-bellefair uppercase text-regwhite opacity-50`}
          >
            {item.role}
          </p>
          <p className={`text-regwhite text-2xl font-bellefair uppercase`}>
            {item.name}
          </p>
          <p
            className={`text-skyblue font-barlow text-center ml-4 mt-6 mr-6 leading-7`}
          >
            {item.bio}
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
          <span>Meet your crew</span>
        </div>
        <>{arrayMap(crew)}</>
      </div>
    </>
  );
}
