import { createBrowserRouter } from "react-router-dom";
import Login from "../components/shared/login";
import Register from "../components/shared/register";
import Customerlayout from "../layout/Customerlayout";
import HomePage from "../pages/customer/HomePage";
import MenuPage from "../pages/customer/MenuPage";
import About from "../pages/customer/About";
import Contact from "../pages/customer/Contact";
import AdminDashboard from "../pages/admin/AdminDashboard";
import StaffDashboard from "../components/Staff/staffDashboard";
import ManageFoodItems from "../pages/admin/ManageFoodItems";
import Adminlayout from "../layout/Adminlayout";
import AdminMenu from "../pages/admin/AdminMenu";
import ManageStaff from "../pages/admin/ManageStaff";
import OrderManagement from "../pages/admin/OrderManagement";
import ManageTable from "../pages/admin/TableManagement";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
  {
    path: "/customer",
    element: <Customerlayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "menuPage",
        element: <MenuPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      { path: "contact",
        element: <Contact />
      },
    ],
  },
  {
    path:"/admin",
    element: <Adminlayout/>,
    children:[
      {
        path:"",
        element: <AdminDashboard/>,
      },
      {
        path:"managefooditem",
        element: <ManageFoodItems/>,
      },
      {
        path:"menu",
        element: <AdminMenu/>,
      },
      {
        path:"manageFoodItems",
        element: <ManageFoodItems/>,
      },
      {
        path:"manageStaff",
        element: <ManageStaff/>,
      },
      {
        path:"manageOrder",
        element: <OrderManagement/>
      },
      {
        path:"managetable",
        element:<ManageTable/>,
      },
    ]
  },
  {
    path:"/staff",
    element:<StaffDashboard/>
  },
]);
