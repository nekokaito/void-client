const Banner = () => {
     return (
          <div>
               <div
                    className="hero min-h-screen"
                    style={{
                         backgroundImage: "url('/header.jpg')",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                         <div className="max-w-md">
                              <h1 className="mb-5 text-5xl font-bold">We Sell Premium</h1>
                              <p className="mb-5">
                                   Your one-stop shop for cutting-edge gadgets, where innovation meets affordability!
                              </p>
                              <button className="btn btn-primary">Get Started</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;