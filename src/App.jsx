import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import Home from "./pages/Home";
import AllData from "./pages/AllData";
import OneData from "./pages/oneData";
const App = () => {
  let paths = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/data", element: <AllData /> },
    { path: "/oneData/:id", element: <OneData /> },
  ]);
  return (
    <>
      <RouterProvider router={paths}></RouterProvider>
    </>
  );
};

export default App;
