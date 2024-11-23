import axios from "axios";
import baseUrl from "../../hook/baseURL";
import toast from "react-hot-toast";


const Contact = () => {

     const handleMessage = async (e) => {

          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const message = e.target.message.value;

          const sendMessage = {
              name, email, message
          }

          try {

               await axios.post(`${baseUrl}/add-message`, sendMessage);


               toast("Message has been sent,\n\n we will contact you in 24 hours.", {
                    duration: 6000,
               });

               e.target.reset();
          } catch (error) {
               console.error("Error sending message:", error);
          }


     }


     return (
          <div>
               <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Contact Us</h1>
                              <p className="py-6">
                                   We are available 24/7 to serve you. Whether its day or night, our team is always here to provide support, answer your questions, and ensure your needs are met promptly and efficiently. Count on us anytime, anywhere!
                              </p>
                         </div>
                         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                              <form onSubmit={handleMessage} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Name</span>
                                        </label>
                                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Message</span>
                                        </label>
                                        <textarea name="message" className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                                   </div>
                                   <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Contact;