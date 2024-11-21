
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import userData from '../../../hook/userData';
import { RxDashboard } from 'react-icons/rx';
import { CiLogout } from 'react-icons/ci';

const UserMenu = () => {

     const { userLogout } = useAuth();
     const user = userData();


     return (

          <div className="dropdown dropdown-end border-white">
               <div tabIndex={0} role="button">
                    <img className=' w-12 h-12 object-cover rounded-full' src={`${user?.photoURL || "/profile.png"}`} alt="" />
               </div>

               <ul tabIndex={0} className="dropdown-content flex flex-col gap-2 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li className='text-2xl font-bold btn bg-transparent hover:bg-transparent'>{user.name}</li>
                    <li> <Link to="/dashboard"><RxDashboard />Dashboard</Link> </li>
                    <li><button onClick={userLogout} className='btn bg-red-400 text-black hover:bg-white'><CiLogout />Logout</button></li>
               </ul>
          </div>

     );
};

export default UserMenu;