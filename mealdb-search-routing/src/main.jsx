import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Foods from "./components/Foods";
import Home from "./components/Home";
import Orders from "./components/Orders";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/foods",
        element: <Foods />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
