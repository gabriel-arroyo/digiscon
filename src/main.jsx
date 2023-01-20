import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";
import ErrorPage from "./pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import BasicLayout from "./layouts/Basic/index.jsx";
import Login from "./pages/Auth/Login/index.jsx";
import Register from "./pages/Auth/Register/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "auth",
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
