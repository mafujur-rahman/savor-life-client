import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Pages/Home/Home";
import LogIn from "../Layout/Pages/LogIn/LogIn";
import Register from "../Layout/Pages/Register/Register";
import AddBlog from "../Layout/Pages/AddBlog/AddBlog";
import Details from "../Layout/Pages/Details/Details";
import Wishlist from "../Layout/Pages/Wishlist/Wishlist";
import ErrorPage from "../Layout/Pages/ErrorPage";
import AllBlogs from "../Layout/Pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../Layout/Pages/FeaturedBlogs/FeaturedBlogs";
import UpdateBlog from "../Layout/Pages/UpdateBlog/UpdateBlog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/log-in',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:"/add-blog",
          element:<PrivateRoute><AddBlog></AddBlog></PrivateRoute>,
        },
        {
          path:"/details/:id",
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params})=>fetch(`https://savor-life-server-side.vercel.app/blogs/${params.id}`),
        },
        {
          path:"/wishlist",
          element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
        },
        {
          path:"/all-blogs",
          element:<PrivateRoute><AllBlogs></AllBlogs></PrivateRoute>,
        },
        {
          path:"/featured-blogs",
          element:<FeaturedBlogs></FeaturedBlogs>
        },
        {
          path:'/update-blog/:id',
          element:<PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
          loader:({params})=>fetch(`https://savor-life-server-side.vercel.app/blogs/${params.id}`),
        }
      ]
    },
  ]);

  export default router;