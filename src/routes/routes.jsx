import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/HomePage/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>error</p>,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
