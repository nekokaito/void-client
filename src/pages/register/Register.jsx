import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm();

     const dataSubmit = async (data) => {
          // const { name, email, password, role } = data;
          console.log(data)
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
                                                  message: 'Password must be at least 8 characters long'
                                             }
                                        })}
                                   />
                                   {errors.password && <p className="text-red-500">{errors.password.message}</p>}
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