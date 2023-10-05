import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import {router} from "./router/index.jsx"
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import Home from "./router/Home.jsx";
import About from "./router/About.jsx";
import Portfolio from "./router/Portfolio.jsx";
import Contact from "./router/Contact.jsx";
import LayoutPublic from "./layout/LayoutPublic.jsx";
import NotFound from "./router/NotFound.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "/About",
  //   element: <About />,
  // },
  // {
  //   path: "/Portfolio",
  //   element: <Portfolio />,
  // },
  // {
  //   path: "/Contact",
  //   element: <Contact />,
  // },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
