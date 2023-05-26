import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "/public/images/logo.svg";
import Menu from "/public/images/icon-hamburger.svg";
import Close from "/public/images/icon-close.svg";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const clickHandler = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    setMenu(false);
  }, [location]);

  return (
    <>
      <header className={`flex items-center w-auto m-6 justify-between`}>
        <div>
          <img src={Logo} alt="logo" className={`cursor-pointer`}></img>
        </div>
        <div>
          <img
            src={menu ? Close : Menu}
            alt="menu icon close icon"
            className={`cursor-pointer relative z-10`}
            onClick={clickHandler}
          ></img>
        </div>
        <div
          className={
            menu
              ? `w-64 h-screen fixed backdrop-blur-md bg-customRgba top-0 end-px`
              : `hidden`
          }
        >
          <nav>
            <ul
              className={`pl-8 pt-28 text-regwhite fixed uppercase text-base tracking-widest flex flex-col gap-8`}
            >
              <li className={`hover:underline`}>
                <Link to="/">00 Home</Link>
              </li>
              <li className={`hover:underline`}>
                <Link to="/destination">01 Destination</Link>
              </li>
              <li className={`hover:underline`}>
                <Link to="/crew">02 Crew</Link>
              </li>
              <li className={`hover:underline`}>
                <Link to="/technology">03 Technology</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
