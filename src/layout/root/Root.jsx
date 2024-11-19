import { Outlet } from "react-router-dom";
import Footer from "../../components/home/footer/Footer";
import NavBar from "../../components/home/navbar/NavBar";


const Root = () => {
     return (
          <div>
               <div>
                    <NavBar></NavBar>
                    <div className=" min-h-screen">
                         <Outlet></Outlet>
                    </div>

                    <Footer></Footer>

               </div>
          </div>
     );
};

export default Root;