import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import Start from "./pages/Start";
import { Contact } from "./pages/Contact";
import  {Projects}  from "./pages/Projects";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element:  <Projects/>,
      },
    ],
  },
]);
