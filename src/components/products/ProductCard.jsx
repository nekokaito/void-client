import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
     const { _id, image, title, brand, category, price } = product;


     return (

          <div className="card card-compact bg-[#818df869] w-96  shadow-xl">
               <figure className="bg-white p-5">
                    <img
                         src={image}
                         alt="Shoes"
                         className='w-full rounded-3xl h-[300px] p-5 object-cover' />
               </figure>
               <div className="card-body">
                    <h2 className="card-title text-white">{title}</h2>
                    <p className=" font-light">{brand} . {category}</p>
                    <div className="card-actions justify-between">
                         <div className="text-3xl font-bold">{price} $</div>
                         <Link to={`/products/${_id}`}><button className="btn border-none btn-primary text-black hover:bg-white">Details</button></Link>
                    </div>
               </div>
          </div>

     );
};

export default ProductCard;