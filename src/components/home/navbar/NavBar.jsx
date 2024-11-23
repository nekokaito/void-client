import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import UserMenu from "./UserMenu";
import UserData from "../../../hook/userData";



const NavBar = () => {

     const { user } = useAuth();
     const isUser = UserData();
     const links = <div className="lg:flex gap-3 font-pixel">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          {
               (isUser.role !== 'seller' && isUser.role !== 'admin') && (
                    <li><NavLink to="/contact">Contact</NavLink></li>
               )
          }


          <li><NavLink to="/about">About</NavLink></li>
     </div>
     return (
          <div className=" sticky top-0 z-10">
               <div className="navbar bg-[#818df8c1]">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>
                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                   {links}
                              </ul>
                         </div>
                         <a className="btn btn-ghost text-3xl">V o i d</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {links}
                         </ul>
                    </div>
                    <div className="navbar-end">

                         {
                              user ? (<div>
                                   <UserMenu></UserMenu>
                              </div>) : (<div className='flex gap-2 items-center'>
                                   <Link to="/login"><button className='btn rounded-xl bg-[#f471b5] text-white border-none hover:bg-[#ffffff] hover:text-black'>Log In</button></Link>
                                   <Link to="/signup">
                                        <button className='btn rounded-xl bg-black hover:bg-[#38bdf8] text-white border-none'>Sign Up</button>
                                   </Link>


                              </div>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default NavBar;