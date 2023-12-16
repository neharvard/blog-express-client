import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import AddBlog from "../Home/AddBlog/AddBlog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Details from "../Home/RecentBlog/Details";
import Wishlist from "../Home/Wishlist/Wishlist";
import UpdateBlog from "../Home/UpdateBlog/UpdateBlog";
import AllBlog from "../Home/AllBlog/AllBlog";
import FeatureBlog from "../Home/FeatureBlog/FeatureBlog";
import CategoryData from "../Home/Category/CategoryData";
import Contact from "../Home/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addBlog',
        element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/blog/:_id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
      },
      {
        path: '/wishlist',
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
      },
      {
        path: '/blog/:id/updateBlog',
        element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/blog/${params.id}`),
      },
      {
        path: '/allBlog',
        element: <AllBlog></AllBlog>,
      },
      {
        path: '/featuredBlogs',
        element: <FeatureBlog></FeatureBlog>,
      },
      {
        path: '/blogs-by-category/:category',
        element: <CategoryData></CategoryData>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      
    ]
  },
]);

export default router;