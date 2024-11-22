import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../../hook/baseURL";
import UserTableBody from "../../../components/dashboard/manage-user/UserTableBody";



const ManageUser = () => {

     const [regUsers, setRegUsers] = useState([]);

     useEffect(() => {

          const fetchUsers = async () => {
               try {
                    const res = await axios.get(`${baseUrl}/users`);
                    setRegUsers(res.data);
               } catch (err) {
                    console.error("Error fetching users:", err);
               }
          };

          fetchUsers();
     }, []);


     return (
          <div className=" mt-20 container mx-auto">

               <h1 className="text-3xl font-bold text-center">Manage User</h1>

               <div className="overflow-x-auto">
                    <table className="table">
                         {/* head */}
                         <thead>
                              <tr>

                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Change Role</th>
                                   <th>Remove</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   regUsers.map((regUser) => <UserTableBody key={regUser._id} regUser={regUser} ></UserTableBody>)
                              }




                         </tbody>


                    </table>
               </div>
          </div>
     );
};

export default ManageUser;