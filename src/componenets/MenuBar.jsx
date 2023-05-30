import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function MenuBar() {
  return (
    <div
      className={`hidden md:flex w-[450px] h-24 bg-customRgba items-center justify-center mt-0 lg:w-[830px] lg:backdrop-blur-md`}
    >
      <ul
        className={`text-regwhite flex flex-row gap-9 font-barlow font-sm uppercase lg:hidden`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `underline underline-offset-[35px] decoration-[3px]` : ``
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive ? `underline underline-offset-[35px] decoration-[3px]` : ``
          }
        >
          Destination
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive ? `underline underline-offset-[35px] decoration-[3px]` : ``
          }
        >
          Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive ? `underline underline-offset-[35px] decoration-[3px]` : ``
          }
        >
          Technology
        </NavLink>
      </ul>
      <ul
        className={`hidden lg:text-regwhite flex-row gap-9 font-barlow font-sm uppercase lg:text-base lg:gap-12 lg:relative lg:right-[8px] md:hidden lg:flex tracking-widest`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `underline underline-offset-[35px] decoration-[3px] hover:opacity-25`
              : `hover:opacity-25`
          }
        >
          00 Home
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive
              ? `underline underline-offset-[35px] decoration-[3px]`
              : `hover:opacity-25`
          }
        >
          01 Destination
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive
              ? `underline underline-offset-[35px] decoration-[3px]`
              : `hover:opacity-25`
          }
        >
          02 Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive
              ? `underline underline-offset-[35px] decoration-[3px]`
              : `hover:opacity-25`
          }
        >
          03 Technology
        </NavLink>
      </ul>
    </div>
  );
}
