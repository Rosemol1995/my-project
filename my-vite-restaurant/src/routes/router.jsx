import { createBrowserRouter } from "react-router-dom";
import Login from "../components/shared/login";
import Register from "../components/shared/register";
import Customerlayout from "../layout/Customerlayout";
import HomePage from "../pages/customer.jsx/HomePage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "",
    element: <Login />,
  },
  { path: "/register", 
    element: <Register />
 },
 {
  path: "/customer",
  element: <Customerlayout/>,
  children:[
    {
      path:"",
      element: <HomePage/>,
    }
  ]
 }
]);
