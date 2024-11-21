
import { GrPowerReset } from "react-icons/gr";
import { TbFilter } from "react-icons/tb";

const FilterBar = ({ setSortBrand, setSortCategory, Brands, Categories, handleReset }) => {
     return (
          <div className="bg-[#818df899] w-full  rounded-2xl p-4">
               <div className="mt-10">

               </div>

               <div className="mt-8 flex flex-col gap-2 items-center">
                    {/* Brand Dropdown */}
                    <select
                         className="select select-bordered w-full max-w-xs p-[11px]"
                         onChange={(e) => setSortBrand(e.target.value)}
                    >
                         <option value="">Brand</option>
                         {Array.isArray(Brands) &&
                              Brands.map((brand) => (
                                   <option key={brand} value={brand}>
                                        {brand}
                                   </option>
                              ))}
                    </select>

                    {/* Category Dropdown */}
                    <select
                         className="select select-bordered w-full max-w-xs p-[11px]"
                         onChange={(e) => setSortCategory(e.target.value)}
                         defaultValue=""
                    >
                         <option value="">
                              Category
                         </option>
                         {Array.isArray(Categories) &&
                              Categories.map((category) => (
                                   <option key={category} value={category}>
                                        {category}
                                   </option>
                              ))}
                    </select>

                    {/* Reset Button */}
                    <button
                         onClick={handleReset}
                         className="btn w-full max-w-xs p-[11px] flex items-center justify-center gap-2"
                    >
                         <GrPowerReset />
                         Reset
                    </button>
               </div>
          </div>
     );
};

export default FilterBar;
