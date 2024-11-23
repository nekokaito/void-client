import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../products/ProductCard";
import baseUrl from "../../../hook/baseURL";

const FeatureProducts = () => {

     const [products, setProducts] = useState([]);

     useEffect(() => {
          const fetchProducts = async () => {
               try {
                    const res = await axios.get(`${baseUrl}/products`);
                    const pr = res.data.slice(0, 6);
                    console.log(pr)
                    setProducts(pr);
               } catch (error) {
                    console.error("Error fetching products:", error);
               }
          };

          fetchProducts();
     }, [])


     return (
          <div className="grid gap-4 p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
               }
          </div>
     );
};

export default FeatureProducts;