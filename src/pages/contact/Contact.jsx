

const Contact = () => {

     const handleMessage = (e) => {

          e.preventDefault();
          const email = e.target.email.value;
          const message = e.target.message.value;

          const sendMessage = {
               email, message
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