import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);

export default router;
