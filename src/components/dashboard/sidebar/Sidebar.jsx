import { Link, NavLink } from "react-router-dom";
import { BiBarChart } from "react-icons/bi"
import { BiCartAlt } from "react-icons/bi";
import { BiCartAdd } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import UserData from "../../../hook/userData";
import useAuth from "../../../hook/useAuth";



const Sidebar = () => {



     const { userLogout } = useAuth();
     const data = UserData();

     const sellerRoute = [
          {
               id: 1,
               route: "/dashboard/my-products",
               icon: <BiCartAlt />
          },
          {
               id: 2,
               route: "/dashboard/add-product",
               icon: <BiCartAdd />

          }
     ]


     return (
          <div className="bg-[#818cf8] min-h-screen">
               <h1 className="text-3xl font-bold text-center">Void</h1>
               <ul className="flex mx-5 mt-10 flex-col gap-2">
                    <li>
                         <NavLink to="/dashboard/overview">

                              <button className="btn w-full border-none hover:bg-[#f471b5] hover:text-black"> <BiBarChart /> Overview</button>

                         </NavLink>
                    </li>
                    {

                         data.role !== 'admin' ? (
                              data.role === 'seller' ? (<>
                                   <li>
                                        <NavLink to="/dashboard/my-products">
                                             <button className="btn w-full border-none hover:bg-[#f471b5] hover:text-black"><BiCartAlt />My Products</button>
                                        </NavLink>
                                   </li>
                                   <li>
                                        <NavLink to="/dashboard/add-products"><button className="btn w-full border-none hover:bg-[#f471b5] hover:text-black"><BiCartAdd />Add Products</button></NavLink>
                                   </li></>) : (
                                   <>
                                        <li>
                                             <NavLink to="/dashboard/my-products">
                                                  <button className="btn w-full border-none hover:bg-[#f471b5] hover:text-black"><BiCartAlt />Wishlist</button>
                                             </NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/dashboard/add-products"><button className="btn w-full border-none hover:bg-[#f471b5] hover:text-black"><BiCartAdd />Carts</button></NavLink>
                                        </li></>
                              )

                         ) : (
                              <>
                                   <li>
                                        <NavLink to="/dashboard/my-products">
                                             <button className="btn w-full border-none hover:bg-[#f471b5] hover:text-black"><BiCartAlt />Mange User</button>
                                        </NavLink>
                                   </li>
                                   <li>
                                        <NavLink to="/dashboard/add-products"><button className="btn w-full border-none hover:bg-[#f471b5] hover:text-black"><BiCartAdd />Carts</button></NavLink>
                                   </li></>
                         )


                    }


                    <li>
                         <Link to="/"><button className="btn w-full border-none hover:bg-[#f471b5] hover:text-black"><BiHome />Home</button></Link>
                    </li>
                    <li>
                         <button onClick={userLogout} className="btn w-full border-none hover:bg-red-400 hover:text-black"> <MdLogout /> Logout</button>
                    </li>

               </ul>
          </div>
     );
};

export default Sidebar;