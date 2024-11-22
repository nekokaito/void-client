import { Link, NavLink } from "react-router-dom";
import { BiBarChart } from "react-icons/bi"
import { BiCartAlt } from "react-icons/bi";
import { BiCartAdd } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import UserData from "../../../hook/userData";
import useAuth from "../../../hook/useAuth";
import { FaUserGear } from "react-icons/fa6";



const Sidebar = () => {



     const { userLogout } = useAuth();
     const data = UserData();


     return (
          <div className="bg-[#818df888] min-h-screen">
               <div className="flex flex-col rounded-2xl relative">
                    <div className="bg-black">
                         <img className=" object-cover opacity-20 " src={data.photoURL} alt="" />
                    </div>

                    <div className="absolute flex gap-2 bottom-2 left-4">
                         <div>
                              <img className="w-12 h-12 object-cover rounded-full" src={data.photoURL} alt="" />
                         </div>
                         <div>
                              <h1 className="text-4xl font-bold text-white stroke-back-200">{data.name}</h1>
                              <p className=" ">{data.email}</p>
                              {
                                   data.role && data.role === 'admin' && (
                                        <div className="badge badge-secondary">Administrator</div>
                                   )
                              }
                         </div>

                    </div>
               </div>
               <ul className="flex mx-5 mt-10 flex-col gap-2">
                    <li>
                         <NavLink to="/dashboard/">

                              <button className="btn w-full border-none hover:bg-[#f471b5] hover:text-black"> <BiBarChart /> Overview</button>

                         </NavLink>
                    </li>
                    {


                         data.role !== 'buyer' ? (<>
                              {
                                   data.role === 'admin' ? (<>
                                        <li>
                                             <NavLink to="/dashboard/manage-user">
                                                  <button className="btn w-full border-none hover:bg-[#f471b5] hover:text-black"><FaUserGear />Manage User</button>
                                             </NavLink>
                                        </li>
                                   </>) : (<></>)
                              }
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