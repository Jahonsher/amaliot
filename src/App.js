import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";

const App = () => {
  const route = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/products",
      element: <Products />,
    },
  ]);

  return <div>
    <RouterProvider router={route}/>
  </div>;
};

export default App;
