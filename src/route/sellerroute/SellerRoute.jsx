import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import UserData from "../../hook/userData";
import Loading from "../../components/loading/Loading";



export default function SellerRoute({ children }) {

     const { user, loading } = useAuth();
     const userInfo = UserData();
     const location = useLocation();
     console.log(userInfo.role);
     if (loading || !userInfo.role) {

          return <Loading></Loading>
     }
     if (user && userInfo.role === 'seller') {
          return children;
     }

     return <Navigate to="/" state={{ from: location }} replace></Navigate>
}