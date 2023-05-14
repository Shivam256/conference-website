import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main/main.layout";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
}

//pages

const Home = Loadable(lazy(() => import("../pages/home/home.component")));

const About = Loadable(lazy(() => import("../pages/about/about.component")));
