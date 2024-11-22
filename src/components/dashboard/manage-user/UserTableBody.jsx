import axios from "axios";
import baseUrl from "../../../hook/baseURL";
import toast from "react-hot-toast";
import useAuth from "../../../hook/useAuth";


const UserTableBody = ({ regUser }) => {

     const { user } = useAuth();
     const currentUser = user.email;
     const { _id, name, email, photoURL, role } = regUser;

     const handleRoleChange = async (e) => {
          const newRole = e.target.value;

          try {

               const response = await axios.patch(`${baseUrl}/users/${_id}`, { role: newRole });
               if (response.data.success) {
                    toast.success('Role Updated').then(location.reload())

               } else {
                    toast.error('Failed To Update')
               }
          } catch (err) {
               console.error("Error updating role:", err);
          }
     };

     const handleRemoveUser = async () => {
          const confirmDelete = window.confirm(`Are you sure you want to remove ${name}?`);
          if (!confirmDelete) return;

          try {
               const response = await axios.delete(`${baseUrl}/users/${_id}`);
               if (response.data.success) {
                    alert(`${name} has been removed successfully.`);
                    location.reload();
               } else {
                    alert("Failed to remove user.");
               }
          } catch (err) {
               console.error("Error removing user:", err);
          }
     };

     return (
          <tr>

               <td>
                    <div className="flex items-center gap-3">
                         <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                   <img
                                        src={photoURL}
                                        alt="Avatar Tailwind CSS Component" />
                              </div>
                         </div>
                         <div>
                              <div className="font-bold">{name}</div>

                         </div>
                    </div>
               </td>
               <td>
                    {email}
               </td>
               <td>
                    <div className="flex gap-2">
                         <select
                              className="select w-full max-w-xs"
                              value={role}
                              onChange={handleRoleChange}
                         >
                              <option value="buyer">Buyer</option>
                              <option value="seller">Seller</option>
                              <option value="admin">Admin</option>
                         </select>

                    </div>

               </td>
               <th>
                    {currentUser === email ? (<button onClick={handleRemoveUser} className="btn bg-red-500" disabled>Remove</button>) : (<button onClick={handleRemoveUser} className="btn bg-red-500">Remove</button>)}

               </th>
          </tr>
     );
};

export default UserTableBody;