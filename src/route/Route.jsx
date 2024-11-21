import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/Home/Home";
import Product from "../pages/products/Product";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./private/PrivateRoute";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Overview from "../pages/dashboard/overview/Overview";
import MyProducts from "../pages/dashboard/my-prodcuts/MyProducts";
import AddProducts from "../pages/dashboard/add-products/AddProducts";
import SellerRoute from "./sellerroute/SellerRoute";
import ProductDetails from "../pages/products/ProductDetails";
import AddOrUpdateProduct from "../pages/dashboard/update-product/AddOrUpdateProduct";
import baseUrl from "../hook/baseURL";


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
                    path: "/products/:id",
                    element: <ProductDetails></ProductDetails>,
                    loader: ({ params }) => fetch(`${baseUrl}/all-product/${params.id}`)
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
     },
     {
          path: "/dashboard",
          element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
          children: [
               {
                    path: "/dashboard/",
                    element: <Overview></Overview>
               },
               //Seller Routes
               {
                    path: "/dashboard/my-products",
                    element: <SellerRoute><MyProducts /></SellerRoute>
               },
               {
                    path: "/dashboard/add-products",
                    element: <SellerRoute><AddProducts /></SellerRoute>
               },
               {
                    path: "/dashboard/update-product/:id",
                    element: <AddOrUpdateProduct></AddOrUpdateProduct>,

               }
          ]
     }

]);


export default router;