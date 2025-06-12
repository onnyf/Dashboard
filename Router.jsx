// src/Router.jsx or src/routes/Router.jsx

import { createBrowserRouter } from "react-router-dom";
import Layouts from "./src/layout/Layouts";
import Hero from "./src/components/home/Hero"; // Update path if needed

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "", // default route
        element: <Hero />,
      },
     
    ],
  },
]);
