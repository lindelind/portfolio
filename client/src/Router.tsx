import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import Start from "./pages/Start";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Start />,
        index: true,
      },
      // {
      //   path: "/about-me",
      //   element: <AboutMe />,
      // }
    ],
  },
]);
