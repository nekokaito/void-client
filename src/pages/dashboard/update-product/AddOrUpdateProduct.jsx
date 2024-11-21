import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import axios from "axios";
import baseUrl from "../../../hook/baseURL";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const AddOrUpdateProduct = () => {
     const [product, setProduct] = useState([]);
     const { user } = useAuth();

     const id = useParams().id;


     const token = localStorage.getItem("access-token");

     useEffect(() => {
          const fetchProducts = async () => {
               try {
                    const response = await axios.get(`${baseUrl}/all-products/${id}`, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    console.log(response.data)
                    setProduct(response.data);
               } catch (err) {
                    console.error("Error fetching products:", err.message);
               }
          };

          fetchProducts();
     }, [id, token]);





     const [message, setMessage] = useState("");
     const {
          register,
          handleSubmit,
          reset,
          setValue,
     } = useForm();


     useEffect(() => {
          if (product) {
               for (const [key, value] of Object.entries(product)) {
                    setValue(key, value);
               }
          }
     }, [product, setValue]);

     const dataSubmit = async (data) => {
          const fileImage = data.image?.[0];

          const handlePhotoUpload = async () => {
               if (!fileImage) return product?.image;
               const img = new FormData();
               img.append("file", fileImage);
               img.append("upload_preset", "void_tech");
               img.append("cloud_name", "dyvqe1hgj");

               const res = await fetch("https://api.cloudinary.com/v1_1/dyvqe1hgj/image/upload", {
                    method: "POST",
                    body: img,
               });

               const uploadedImg = await res.json();
               return uploadedImg.url;
          };

          try {
               const image = await handlePhotoUpload();
               const payload = {
                    title: data.title || product?.title,
                    image,
                    brand: data.brand || product?.brand,
                    stock: data.stock || product?.stock,
                    price: parseFloat(data.price) || product?.price,
                    category: data.category || product?.category,
                    description: data.description || product?.description,
                    sellerEmail: user.email,
               };


               let response;

               if (product) {

                    response = await axios.put(`${baseUrl}/update-product/${product._id}`, payload, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    toast.success("Product Updated Successfully");
               } else {

                    response = await axios.post(`${baseUrl}/add-products`, payload, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    toast.success("Product Added Successfully");
               }

               if (response.status === 200 || response.status === 201) {
                    reset();
               } else {
                    setMessage("Failed to process the product. Please try again.");
               }
          } catch (error) {
               setMessage("An error occurred while processing the product. Please try again.");
               toast.error(error.message);
          }
     };

     return (
          <div>
               <h1 className="text-4xl text-center font-bold">
                    {product ? "Edit Product" : "Add Product"}
               </h1>

               {message && (
                    <p
                         className={`text-center mt-2 ${message.includes("successfully") ? "text-green-500" : "text-red-500"
                              }`}
                    >
                         {message}
                    </p>
               )}

               <form className="card-body" onSubmit={handleSubmit(dataSubmit)}>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Title</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Product Title"
                              className="input input-bordered"
                              defaultValue={product?.title || ""}
                              {...register("title")}
                         />
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Product Image</span>
                         </label>
                         <input
                              type="file"
                              className="file-input file-input-bordered w-full"
                              {...register("image")}
                         />
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Brand</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Brand Name"
                              className="input input-bordered"
                              defaultValue={product?.brand || ""}
                              {...register("brand")}
                         />
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Price</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Product Price"
                              className="input input-bordered"
                              defaultValue={product?.price || ""}
                              {...register("price")}
                         />
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Stock</span>
                         </label>
                         <input
                              type="number"
                              placeholder="Stock Quantity"
                              className="input input-bordered"
                              defaultValue={product?.stock || ""}
                              {...register("stock")}
                         />
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Category</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Product Category"
                              className="input input-bordered"
                              defaultValue={product?.category || ""}
                              {...register("category")}
                         />
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
                              defaultValue={product?.description || ""}
                              {...register("description")}
                         />
                    </div>

                    <div className="form-control mt-6">
                         <button type="submit" className="btn btn-primary">
                              {product ? "Update Product" : "Add Product"}
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default AddOrUpdateProduct;
