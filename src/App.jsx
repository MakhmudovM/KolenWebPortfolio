import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home";
import About from "./page/About";
import Skills from "./page/Skils";
import Education from "./page/Education";
import Projects from "./page/Projects";
import Resume from "./page/Resume";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
      ],
    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;