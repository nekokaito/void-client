import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
     const { _id, image, title, brand, category, price } = product;


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
                         <div className="card-actions justify-between">
                              <div className="text-3xl font-bold">{price} $</div>
                              <Link to={`/products/${_id}`}><button className="btn border-none btn-primary text-black hover:bg-white">Details</button></Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductCard;