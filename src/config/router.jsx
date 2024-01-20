import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignUp from "../pages/signup";
import LogIn from "../pages/login";
import Home from "../pages/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
       <Route path="home" element={<Home />} /> 
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
