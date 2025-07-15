import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import AllVolunteerPost from "../pages/AllVolunteerPost";
import ManageMyPosts from "../pages/ManageMyPosts";
import PrivateRoute from "./PrivateRoute";
import UpdateVolunteerPost from "../pages/UpdateVolunteerPost";
import PostDetails from "../pages/PostDetails";
import ApplyForVolunteer from "../pages/ApplyForVolunteer";

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
        element: (
          <PrivateRoute>
            <AddVolunteerPost></AddVolunteerPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posts",
        element: (
          <PrivateRoute>
            <ManageMyPosts></ManageMyPosts>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateVolunteerPost></UpdateVolunteerPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <PostDetails></PostDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/job-apply/:id",
        element: (
          <PrivateRoute>
            <ApplyForVolunteer></ApplyForVolunteer>
          </PrivateRoute>
        ),
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
