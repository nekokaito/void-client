import { useEffect, useState } from "react";
import UserData from "../../../hook/userData";
import axios from "axios";
import baseUrl from "../../../hook/baseURL";
import ProductCard from "../../../components/products/ProductCard";

const Wishlist = () => {
     const userData = UserData(); 
     const [wishList, setWishList] = useState([]);
     const token = localStorage.getItem('access-token') || '';

     useEffect(() => {
          const fetchWishList = async () => {
               if (userData && userData._id) {
                    try {
                         const response = await axios.get(`${baseUrl}/wishlist/${userData._id}`, {
                              headers: {
                                   authorization: `Bearer ${token}`,
                              },
                         });
                         setWishList(response.data);
                    } catch (error) {
                         console.error("Error fetching wishlist:", error.message);
                    }
               } else {
                    console.warn("User ID is not available yet.");
               }
          };

          fetchWishList();
     }, [userData, token]);

     

     return (
          <div className="container mx-auto">

               <h1 className="text-3xl font-bold text-center my-10">My WishList</h1>
               {wishList.length > 0 ? (
                    <div className="grid p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                         {wishList.map((item) => (
                              <ProductCard key={item._id} product={item}></ProductCard>
                         ))}
                    </div>
               ) : (
                    <p>No items in your wishlist.</p>
               )}
          </div>
     );
};

export default Wishlist;
