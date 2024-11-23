import { useEffect, useState } from "react";
import FilterBar from "../../components/products/FilterBar";
import ProductCard from "../../components/products/ProductCard";
import SortByPrice from "../../components/products/SortByPrice";
import baseUrl from "../../hook/baseURL";
import axios from "axios";
import SearchBar from "../../components/products/SearchBar";
import Loading from "../../components/loading/Loading";


const Products = () => {

     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(false);
     const [search, setSearch] = useState("");
     const [sortPrice, setSortPrice] = useState('asc');
     const [sortBrand, setSortBrand] = useState('');
     const [sortCategory, setSortCategory] = useState('');
     const [Brands, setBrands] = useState('');
     const [Categories, setCategories] = useState('');


     useEffect(() => {
          setLoading(true);
          const fetch = async () => {
               axios.get(`${baseUrl}/all-products?title=${search}&sort=${sortPrice}&brand=${sortBrand}&category=${sortCategory}`).then((res) => {
                    console.log(res.data)
                    setProducts(res.data.product);
                    setBrands(res.data.brands);
                    console.log(res.data.brands)
                    setCategories(res.data.categories);
                    setLoading(false);
               })
          }

          fetch();
     }, [search, sortPrice, sortBrand, sortCategory])


     const handleSearch = (e) => {
          e.preventDefault();
          setSearch(e.target.search.value)

          e.target.search.value = "";
     }

     const handleReset = () => {
          setSearch('');
          setSortBrand('');
          setSortCategory('');
          setSortPrice('asc');
          window.location.reload();
     }

     return (
          <div className='container mx-auto mt-10'>


               <div className='flex flex-col lg:flex-row gap-5 lg:justify-between items-center w-full mb-6'>
                    <SearchBar handleSearch={handleSearch}></SearchBar>
                    <SortByPrice setSortPrice={setSortPrice}></SortByPrice>
               </div>

               <div className='flex flex-col gap-10 lg:grid lg:grid-cols-12 w-full'>
                    <div className='w-1/2 lg:w-full mx-auto lg:col-span-2'>
                         <FilterBar setSortBrand={setSortBrand} setSortCategory={setSortCategory} Brands={Brands} Categories={Categories} handleReset={handleReset} ></FilterBar>
                    </div>
                    <div className="lg:ml-10 lg:col-span-10"> {loading ? <Loading></Loading> :
                         <> {products.length === 0 ? <div className="min-w-full min-h-screen flex justify-center items-center">
                              <h1 className="font-bold text-3xl">No Product Found</h1>
                         </div> : <div className="grid p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {products.map((product) => <ProductCard key={product._Id} product={product} />)}
                         </div>
                         }
                         </>
                    }
                    </div>


               </div>
          </div>
     );
};

export default Products;