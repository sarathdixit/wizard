import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Begninner from "./pages/begninner";
import Intermediate from "./pages/intermediate";
import Problem1 from "./problems/beginner/problem1";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "beginner",
        element: <Begninner />,
        children: [
          {
            path: "Problem1",
            element: <Problem1 />,
          },
        ],
      },
      {
        path: "intermediate",
        element: <Intermediate />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
