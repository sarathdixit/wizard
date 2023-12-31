import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Begninner from "./pages/begninner";
import Intermediate from "./pages/intermediate";
import Problem1 from "./problems/beginner/problem1";
import Problem2 from "./problems/beginner/problem2";
import Problem3 from "./problems/beginner/problem3";
import Problem4 from "./problems/beginner/problem4";
import Problem5 from "./problems/beginner/problem5";
import Problem6 from "./problems/beginner/problem6";
import Problem7 from "./problems/beginner/problem7";
import Problem8 from "./problems/beginner/problem8";
import Problem9 from "./problems/beginner/problem9";
import Problem10 from "./problems/beginner/problem10";
import Wizards from "./pages/wizards";
import Elixers from "./pages/elixers";
import Problem11 from "./problems/intermediate/problem11";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "Wizards",
        element: <Wizards />,
      },
      {
        path: "elixers",
        element: <Elixers />,
      },
      {
        path: "beginner",
        element: <Begninner />,
        children: [
          {
            path: "Problem1",
            element: <Problem1 />,
          },
          {
            path: "Problem2",
            element: <Problem2 />,
          },
          {
            path: "Problem3",
            element: <Problem3 />,
          },
          {
            path: "Problem4",
            element: <Problem4 />,
          },
          {
            path: "Problem5",
            element: <Problem5 />,
          },
          {
            path: "Problem6",
            element: <Problem6 />,
          },
          {
            path: "Problem7",
            element: <Problem7 />,
          },
          {
            path: "Problem8",
            element: <Problem8 />,
          },
          {
            path: "Problem9",
            element: <Problem9 />,
          },
          {
            path: "Problem10",
            element: <Problem10 />,
          },
        ],
      },
      {
        path: "intermediate",
        element: <Intermediate />,
        children: [
          {
            path: "problem11",
            element: <Problem11 />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
