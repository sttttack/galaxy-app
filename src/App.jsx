import "./App.css";
import HomePage from "./pages/HomePage";
import Crew from "./pages/Crew";
import Root from "./pages/Root";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import data from "./data.json";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState(data);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/crew", element: <Crew info={info} /> },
        { path: "/destination", element: <Destination info={info} /> },
        { path: "/technology", element: <Technology info={info} /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
