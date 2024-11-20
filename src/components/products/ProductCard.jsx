
const ProductCard = ({ product }) => {
     const { image, title, description, brand, category, price, stock } = product;

     return (
          <div>
               <div className="card card-compact bg-[#818df869] w-96 shadow-xl">
                    <figure>
                         <img
                              src={image}
                              alt="Shoes"
                              className='w-1/2 h-200 p-5 object-cover' />
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title">{title}</h2>
                         <div className=''>
                              <div>Brand: {brand}</div>
                              <div>Category: {category}</div>
                              <div>: {brand}</div>
                              <div>Category: {category}</div>
                         </div>
                         <p>{description}</p>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary">Buy Now</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductCard;