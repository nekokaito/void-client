import { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../../../hook/baseURL";
import MyProductCard from "../../../components/dashboard/product/MyProductCard";
import useAuth from "../../../hook/useAuth";

const MyProducts = () => {


     const { user } = useAuth();
     const userEmail = user.email;
     const [myProducts, setMyProducts] = useState([]);

     const token = localStorage.getItem("access-token");
     console.log(userEmail);
     useEffect(() => {
          const fetchProducts = async () => {
               try {
                    const response = await axios.get(`${baseUrl}/all-products/${user.email}`, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    console.log(response.data)

                    setMyProducts(response.data);
               } catch (err) {
                    console.error("Error fetching products:", err.message);
               }
          };

          fetchProducts();
     }, [user.email, token]);

     console.log(myProducts)

     return (
          <div className="p-4">
               <h1 className="text-4xl text-center my-10 font-bold mb-4">My Products</h1>
               {myProducts.length === 0 ? (
                    <div>No products found.</div>
               ) : (
                    <div className="flex flex-col mt-3 container mx-auto lg:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                         {
                              myProducts.map(product => <MyProductCard key={product._id} product={product} ></MyProductCard>)
                         }
                    </div>
               )}
          </div>
     );
};

export default MyProducts;
