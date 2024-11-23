/* eslint-disable react/prop-types */
import axios from "axios";
import { Link } from "react-router-dom";
import baseUrl from "../../../hook/baseURL";
import toast from "react-hot-toast";


const MyProductCard = ({ product }) => {





     const { _id, image, title, brand, category } = product;

     const token = localStorage.getItem("access-token");

     const deleteProduct = async () => {
          try {
               const response = await axios.delete(`${baseUrl}/delete-product/${_id}`, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });

               if (response.data.success) {
                    toast.success("Item Deleted");
                    location.reload();

               } else {
                    toast.error("Error")
               }
          } catch (error) {
               console.error("Error deleting product:", error);

          }
     };
     return (
          <div>
               <div className="card card-compact bg-[#818df869] w-96 shadow-xl">
                    <figure>
                         <img
                              src={image}
                              alt="Shoes"
                              className='w-1/2 rounded-3xl h-200 p-5 object-cover' />
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title text-white">{title}</h2>
                         <p className=" font-light">{brand} . {category}</p>
                         <div className="card-actions gap-2">

                              <Link to={`/dashboard/update-product/${_id}`}><button className="btn">Edit</button></Link>  <button onClick={deleteProduct} className="btn bg-red-500 border-none">Delete</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default MyProductCard;