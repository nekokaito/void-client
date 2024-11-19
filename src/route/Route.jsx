import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/Home/Home";
import Product from "../pages/products/Product";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>
               },
               {
                    path: "/products",
                    element: <Product />
               },
               {
                    path: "/contact",
                    element: <Contact />
               },
               {
                    path: "/about",
                    element: <About />
               },
               {
                    path: "/login",
                    element: <Login></Login>
               },
               {
                    path: "/signup",
                    element: <Register></Register>
               }
          ]
     }]);


export default router;