import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import baseUrl from '../../hook/baseURL';
import { updateProfile } from 'firebase/auth';
import useAuth from '../../hook/useAuth';
import toast from 'react-hot-toast';

const Register = () => {
     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm();
     const navigate = useNavigate();
     const { createUser } = useAuth();
     const dataSubmit = async (formdata) => {

          const fileImage = formdata.files[0]

          const handlePhotoUpload = async () => {
               if (!fileImage) return

               const img = new FormData();
               img.append("file", fileImage);
               img.append("upload_preset", "void_tech");
               img.append("cloud_name", "dyvqe1hgj")

               const res = await fetch('https://api.cloudinary.com/v1_1/dyvqe1hgj/image/upload', {
                    method: "POST",
                    body: img
               })

               const uploadedImg = await res.json();
               return uploadedImg.url;
          }
          const { name, email, password, role } = formdata;
          const status = role === 'buyer' ? 'approved' : 'pending';
          const wishlist = [];
          const cartlist = [];
          const photoURL = await handlePhotoUpload();


          const userData = { name, email, photoURL, password, role, status, wishlist, cartlist};
          try {
               const userCredential = await createUser(email, password);
               const user = userCredential.user;

               // Update user profile
               await updateProfile(user, { displayName: name });

               // Save user data to the database
               await axios.post(`${baseUrl}/users`, userData);


               toast.success('Successfully signed up!');
               navigate('/');

          } catch (error) {
               toast.error(error.message || 'Registration failed.');
          }



     }
     return (
          <div className="hero bg-base-200 min-h-screen">
               <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">Sign Up now!</h1>
                         <p className="py-6">
                              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                         </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                         <form className="card-body" onSubmit={handleSubmit(dataSubmit)}>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Name</span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="name"
                                        className="input input-bordered"
                                        {...register('name', { required: 'Name is required' })}
                                   />
                                   {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        {...register('email', { required: 'Email is required' })}
                                   />
                                   {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Profile Image</span>
                                   </label>

                                   <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register('files')} />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Role</span>
                                   </label>
                                   <select
                                        className="select select-bordered w-full max-w-xs"
                                        {...register('role')}
                                   >
                                        <option value="buyer">Buyer</option>
                                        <option value="seller">Seller</option>
                                   </select>
                                   {errors.role && <p className="text-red-500">{errors.role.message}</p>}
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        {...register('password', {
                                             required: 'Password is required',
                                             minLength: {
                                                  value: 8,
                                                  message: 'Password must be at least 8 characters long',
                                             },
                                             validate: {
                                                  hasUpperCase: value =>
                                                       /[A-Z]/.test(value) || 'Password must include at least one uppercase letter',
                                                  hasLowerCase: value =>
                                                       /[a-z]/.test(value) || 'Password must include at least one lowercase letter',
                                                  hasNumber: value =>
                                                       /[0-9]/.test(value) || 'Password must include at least one number',
                                                  hasSpecialChar: value =>
                                                       /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must include at least one special character',
                                             },
                                        })}
                                   />
                                   <div className='mt-2'>
                                        {errors.password?.type === 'hasUpperCase' && (
                                             <p className="text-red-500">{errors.password.message}</p>
                                        )}
                                        {errors.password?.type === 'hasLowerCase' && (
                                             <p className="text-red-500">{errors.password.message}</p>
                                        )}
                                        {errors.password?.type === 'hasNumber' && (
                                             <p className="text-red-500">{errors.password.message}</p>
                                        )}
                                        {errors.password?.type === 'hasSpecialChar' && (
                                             <p className="text-red-500">{errors.password.message}</p>
                                        )}
                                   </div>

                              </div>
                              <label className="label">
                                   <span className="label-text-alt">
                                        Already have an account? <Link to="/login" className="link link-hover">Login</Link>
                                   </span>
                              </label>
                              <div className="form-control mt-6">
                                   <button type="submit" className="btn btn-primary">
                                        Sign Up
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Register;