import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
// import NavBar from "../Components/NavBar";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";
import NotFound from "../Components/NotFound";
import LayoutPublic from "../layout/LayoutPublic";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic/>,
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
    // {
    //     path: "/NavBar",
    //     element: <NavBar />,
    // },
    {
        path: "/Portfolio",
        element: <Portfolio />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },
        ]

    },
   
]);


