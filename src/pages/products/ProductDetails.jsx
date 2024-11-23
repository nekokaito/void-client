import { Link, useLoaderData } from "react-router-dom";
import UserData from "../../hook/userData";

const ProductDetails = () => {


     const user = UserData();
     const product = useLoaderData();
     console.log(product)

     const { _id, image, title, description, brand, category, price, stock, sellerEmail } = product;


     return (
          <div className="flex flex-col my-20 justify-center lg:flex-row gap-6">
               <div>
                    <img className="rounded-3xl w-1/2 mx-auto lg:w-[500px] object-cover" src={image} alt="" />
               </div>
               <div className="rounded-3xl w-1/2 mx-auto lg:mx-0 lg:w-[500px] flex flex-col justify-center items-center gap-5 h-auto bg-[#6671c6]">
                    <h1 className="text-2xl lg:text-5xl lg:p-10">{title}</h1>
                    <div className="flex gap-2">
                         <span>Brand: {brand}</span><span> Category: {category}</span>
                    </div>
                    <span>Stock: {stock}</span>
                    <p className="px-10">{description}</p>
                    <div>
                         <h1 className="text-3xl">{price} $</h1>
                    </div>
                    {
                         user.role === 'buyer' ? (<div className="flex justify-around gap-5">

                              <button className="btn">Wishlist</button>
                              <button className="btn">Cart</button>
                         </div>) : (
                              <div className="flex justify-center">
                                   {
                                        user.email === sellerEmail ? (<Link to={`/dashboard/update-product/${_id}`}><button className="btn">Edit Product</button></Link>) : ('')
                                   }


                              </div>
                         )
                    }

               </div>
          </div>
     );
};

export default ProductDetails;