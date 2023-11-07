import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import AddBlog from "../Home/AddBlog/AddBlog";


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
        element: <AddBlog></AddBlog>
      },
    ]
  },
]);

export default router;