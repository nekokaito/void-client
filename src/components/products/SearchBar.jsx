/* eslint-disable react/prop-types */
import { IoSearchOutline } from "react-icons/io5";


const SearchBar = ({ handleSearch }) => {
     return (
          <form onSubmit={handleSearch} className="flex gap-2">
               <input type="text" placeholder="Search Products" name="search" className="max-w-md input input-bordered" />
               <button type="submit" className="btn bg-[#f471b5] text-black hover:bg-white"><IoSearchOutline /></button>
          </form>
     );
};

export default SearchBar;