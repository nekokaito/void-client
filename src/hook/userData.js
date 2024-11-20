import { useEffect, useState } from "react";

import axios from "axios";
import useAuth from "./useAuth";
import baseUrl from "./baseURL";

const UserData = () => {
  const { user, loading } = useAuth();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/user/${user.email}`);
        setUserData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [user, loading]);

  return userData;
};

export default UserData;
