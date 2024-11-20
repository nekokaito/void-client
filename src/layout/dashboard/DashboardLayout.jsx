import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";



const DashboardLayout = () => {
     return (
          <div className="grid lg:grid-cols-12">
               <div className="col-span-2">
                    <Sidebar></Sidebar>
               </div>
               <div className="col-span-10">
                    <Outlet />
               </div>
          </div>
     );
};

export default DashboardLayout;