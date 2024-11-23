import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import axios from "axios";
import baseUrl from "../../../hook/baseURL";
import toast from "react-hot-toast";

const AddProducts = () => {
     const { user } = useAuth();
     const [message, setMessage] = useState("");
     const {
          register,
          handleSubmit,
          reset,
          formState: { errors }
     } = useForm();

     const dataSubmit = async (data) => {
          const fileImage = data.image[0];

          const handlePhotoUpload = async () => {
               if (!fileImage) return;

               const img = new FormData();
               img.append("file", fileImage);
               img.append("upload_preset", "void_tech");
               img.append("cloud_name", "dyvqe1hgj");

               const res = await fetch("https://api.cloudinary.com/v1_1/dyvqe1hgj/image/upload", {
                    method: "POST",
                    body: img
               });

               const uploadedImg = await res.json();
               return uploadedImg.url;
          };

          try {
               const title = data.title;
               const image = await handlePhotoUpload();
               const brand = data.brand;
               const stock = data.stock;
               const price = parseFloat(data.price);
               const category = data.category;
               const description = data.description;
               const sellerEmail = user.email;

               const product = {
                    title,
                    image,
                    brand,
                    stock,
                    price,
                    category,
                    description,
                    sellerEmail
               };

               const token = localStorage.getItem("access-token");

               const response = await axios.post(`${baseUrl}/add-products`, product, {
                    headers: {
                         Authorization: `Bearer ${token}`
                    }
               });

               if (response.status === 200 || response.status === 201) {
                    toast.success('Product Added Successfully')
                    reset();
               } else {
                    setMessage("Failed to add the product. Please try again.");
               }
          } catch (error) {
               setMessage("An error occurred while adding the product. Please try again.", error);
               toast.error(error);
          }
     };

     return (
          <div>
               <h1 className="text-4xl text-center font-bold">Add Product</h1>

               {message && <p className={`text-center mt-2 ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>{message}</p>}

               <form className="card-body" onSubmit={handleSubmit(dataSubmit)}>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Title</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Product Title"
                              className="input input-bordered"
                              {...register('title', { required: 'Product Title is required' })}
                         />
                         {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Product Image</span>
                         </label>

                         <input type="file" className="file-input file-input-bordered w-full" {...register('image', { required: 'Product Image is required' })} />
                         {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Brand</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Brand Name"
                              className="input input-bordered"
                              {...register('brand', { required: 'Brand Name is required' })}
                         />
                         {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Price</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Product Price"
                              className="input input-bordered"
                              {...register('price', { required: 'Product Price is required' })}
                         />
                         {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Stock</span>
                         </label>
                         <input
                              type="number"
                              placeholder="Stock Quantity"
                              className="input input-bordered"
                              {...register('stock', { required: 'Stock Quantity is required' })}
                         />
                         {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Category</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Product Category"
                              className="input input-bordered"
                              {...register('category', { required: 'Category is required' })}
                         />
                         {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Description</span>
                         </label>
                         <textarea
                              rows="10"
                              cols="100"
                              placeholder="Description"
                              className="input input-bordered"
                              {...register('description', { required: 'Description is required' })}
                         />
                         {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                    </div>

                    <div className="form-control mt-6">
                         <button type="submit" className="btn btn-primary">
                              Add Product
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default AddProducts;
