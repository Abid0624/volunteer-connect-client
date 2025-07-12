import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import AllVolunteerPost from "../pages/AllVolunteerPost";
import ManageMyPosts from "../pages/ManageMyPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-volunteer",
        element: <AllVolunteerPost></AllVolunteerPost>,
      },
      {
        path: "/add-volunteer",
        element: <AddVolunteerPost></AddVolunteerPost>,
      },
      {
        path: "/my-posts",
        element: <ManageMyPosts></ManageMyPosts>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
