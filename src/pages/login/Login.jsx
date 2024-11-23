/* eslint-disable no-unused-vars */
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";


const Login = () => {
     const { userLogin, googleLogin } = useAuth();
     const navigate = useNavigate();
     const [serverError, setServerError] = useState("");

     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm();

     const dataSubmit = async (data) => {
          setServerError(""); // Reset error message
          try {
               const { email, password } = data;
               await userLogin(email, password);
               navigate("/");

               toast.success(` Welcome`);

          } catch (error) {
               setServerError(error.message || "Failed to login. Please try again.");
          }
     };

     const handleGoogleLogin = async () => {
          setServerError(""); // Reset error message
          try {
               await googleLogin();
               navigate("/");
          } catch (error) {
               setServerError(error.message || "Google login failed. Please try again.");
          }
     };

     return (
          <div>
               <div className="hero bg-[#818cf8] min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                              <h1 className='text-3xl text-center mt-3'>Log In</h1>
                              <form className="card-body" onSubmit={handleSubmit(dataSubmit)}>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" {
                                             ...register('email', { required: true })
                                        } />
                                        {
                                             errors.name && (
                                                  <p className='text-red-500'>Please Fill Up Email</p>
                                             )
                                        }
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" {
                                             ...register('password', { required: true, minLength: 8 })
                                        } />
                                        {
                                             errors.password?.type === "required" && (
                                                  <p className='text-red-500'>Password Required</p>
                                             )
                                        }
                                        {
                                             errors.password?.type === "minLength" && (
                                                  <p className='text-red-500'>Minimum 8 Password</p>
                                             )
                                        }
                                        <label className="label">
                                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                   </div>
                                   <div className="form-control flex flex-col gap-3 mt-6">
                                        <button type='submit' className="btn bg-[#f471b5] hover:bg-white text-black">Login</button>
                                        <button onClick={handleGoogleLogin} type='submit' className="btn bg-[#38bdf8] hover:bg-white text-black"> <FaGoogle /> Google</button>

                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;