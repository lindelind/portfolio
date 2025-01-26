import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import Start from "./pages/Start";
import { Contact } from "./pages/Contact";
import { AboutMe } from "./pages/AboutMe";

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
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/projects",
      //   element:  <Projects/>,
      // },
    ],
  },
]);
