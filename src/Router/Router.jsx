import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Pages/Home/Home";
import LogIn from "../Layout/Pages/LogIn/LogIn";
import Register from "../Layout/Pages/Register/Register";
import AddBlog from "../Layout/Pages/AddBlog/AddBlog";
import Details from "../Layout/Pages/Details/Details";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
          element:<AddBlog></AddBlog>
        },
        {
          path:"/details/:id",
          element:<Details></Details>,
          loader: ({params})=>fetch(`http://localhost:5000/blogs/${params.id}`),
        }
      ]
    },
  ]);

  export default router;