import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componenets/Header";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
