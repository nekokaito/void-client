/* eslint-disable react/prop-types */

import useAuth from '../../hook/useAuth';
import UserData from '../../hook/userData';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/loading/Loading';

const AdminRoute = ({ children }) => {
     const { user, loading } = useAuth();
     const userInfo = UserData();
     const location = useLocation();

     if (loading || !userInfo.role) {

          return <Loading></Loading>
     }
     if (user && userInfo.role === 'admin') {
          return children;
     }

     return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;