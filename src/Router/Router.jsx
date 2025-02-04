import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import PrivetRoute from "./PrivetRoute";
import MyBookings from "../Pages/MyBookings";
import AboutUs from "../Pages/AboutUs";
import Rooms from "../Pages/Rooms";
import RoomDetails from "../Pages/RoomDetails";
import Reviews from "../Components/Single/Reviews";
import ReviewComponent from "../Components/Single/ReviewCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/myBookings",
        element: <PrivetRoute><MyBookings></MyBookings></PrivetRoute>
      },
      {
        path: "/rooms/:id",
        element: <PrivetRoute><RoomDetails></RoomDetails></PrivetRoute>,
        loader: ({params}) => fetch(`https://ease-room-server.vercel.app/rooms/${params.id}`)
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>
      },
      {
        path: "/reviews",
        element: <ReviewComponent></ReviewComponent>,
        loader: () => fetch('https://ease-room-server.vercel.app/Reviews')
      },      
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
    ]
  },
]);

export default router