import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Colleges from "../Pages/Colleges/Colleges";
import SingleCollege from "../Pages/SingleCollege/SingleCollege";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
          path: '/colleges',
          element: <Colleges />
        },
        {
          path: '/SingleColleges/:id',
          element: <SingleCollege />,
          loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
  }
  ]);

  export default router;