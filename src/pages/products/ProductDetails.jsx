import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {

     const { id } = useParams();
     const product = products.find((item) => item.id === parseInt(id));

     if (!product) return <div>Product not found</div>;

     const { image, title, description, brand, category, price, stock } = product;


     return (
          <div>
               {image}
          </div>
     );
};

export default ProductDetails;