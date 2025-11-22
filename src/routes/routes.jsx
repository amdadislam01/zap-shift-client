import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import ForgatePassword from "../auth/ForgatePassword/ForgatePassword";
import PrivetRoutes from "./PrivetRoutes";
import BeRider from "../pages/BeRider/BeRider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
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
        path: "/coverage",
        element: <Coverage />,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "/rider",
        element: (
          <PrivetRoutes>
            <BeRider />
          </PrivetRoutes>
        ),
      },
      {
        path: "/send-parcel",
        element: <SendParcel />,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgate-password",
    element: <ForgatePassword />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivetRoutes>
    ),
    children: [
      {
        path: "my-parcels",
        element: <MyParcels />,
      },
      {
        path: ''
      }
    ],
  },
]);
