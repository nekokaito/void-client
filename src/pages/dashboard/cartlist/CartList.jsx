import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../../hook/baseURL";
import UserData from "../../../hook/userData";
import ProductCard from "../../../components/products/ProductCard";


const CartList = () => {

     const userData = UserData();
     const [cartList, setCartList] = useState([]);
     const token = localStorage.getItem('access-token') || '';

     useEffect(() => {
          const fetchWishList = async () => {
               if (userData && userData._id) {
                    try {
                         const response = await axios.get(`${baseUrl}/cartlist/${userData._id}`, {
                              headers: {
                                   authorization: `Bearer ${token}`,
                              },
                         });
                         setCartList(response.data);
                    } catch (error) {
                         console.error("Error fetching wishlist:", error.message);
                    }
               } else {
                    console.warn("User ID is not available yet.");
               }
          };

          fetchWishList();
     }, [userData, token]);

     console.log("cart:", cartList)



     return (
          <div className="container mx-auto">

               <h1 className="text-3xl font-bold text-center my-10">My CartList</h1>
               {CartList.length > 0 ? (
                    <div className="grid p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                         {CartList.map((item) => (
                              <ProductCard key={item._id} product={item} isWishList></ProductCard>
                         ))}
                    </div>
               ) : (
                    <p>No items in your CartList.</p>
               )}
          </div>
     );
};

export default CartList;