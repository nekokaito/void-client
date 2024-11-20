
const SortByPrice = ({ setSortPrice }) => {
     return (
          <select className="select select-bordered w-1/2 max-w-xs p-[11px] lg:w-40" onChange={(e) => setSortPrice(e.target.value)}>
               <option value='asc'>Low to High</option>
               <option value='desc'>Hight to Low</option>
          </select>
     );
};

export default SortByPrice;