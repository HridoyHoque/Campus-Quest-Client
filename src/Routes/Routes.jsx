import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Colleges from "../Pages/Colleges/Colleges";
import SingleCollege from "../Pages/SingleCollege/SingleCollege";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Admission from "../Pages/Admission/Admission";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import MyColleges from "../Pages/MyColleges/MyColleges";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />

      },
      {
        path: '/admission',
        element: <PrivateRoutes> <Admission /></PrivateRoutes>
      },
      {
        path: '/myCollege',
        element: <PrivateRoutes><MyColleges /></PrivateRoutes>
      },
      {
        path: '/colleges',
        element: <Colleges />
      },
      {
        path: '/SingleColleges/:id',
        element: <SingleCollege />,
        loader: ({ params }) => fetch(`https://campus-quest-server.vercel.app/s/colleges/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;