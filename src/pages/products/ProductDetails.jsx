import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {



     const product = useLoaderData();
     console.log(product)

     const { image, title, description, brand, category, price, stock } = product;


     return (
          <div className="flex flex-col my-20 justify-center lg:flex-row gap-6">
               <div>
                    <img className="rounded-3x w-1/2 mx-auto lg:w-[500px] object-cover" src={image} alt="" />
               </div>
               <div className="rounded-3xl w-[500px] flex flex-col justify-center items-center gap-10 h-auto bg-[#6671c6]">
                    <h1 className="text-5xl">{title}</h1>
                    <div className="flex gap-2">
                         <span>Brand: {brand}</span><span> Category: {category}</span>
                    </div>
                    <span>Stock: {stock}</span>
                    <p>{description}</p>
                    <div>
                         <h1 className="text-3xl">{price} $</h1>
                    </div>

                    <div className="flex justify-around gap-5">
                         <button className="btn">Wishlist</button>
                         <button className="btn">Cart</button>
                    </div>
               </div>
          </div>
     );
};

export default ProductDetails;