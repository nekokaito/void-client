const PaymentMethods = () => {
     return (
          <section className="flex flex-col lg:flex-row items-center justify-center p-10 mx-auto mb-10">
               {/* Payments Image and Title */}
               <div className="flex flex-col items-center mb-8">

                    <img
                         className="w-full rounded-2xl"
                         src="images/payment-bg.png"
                         alt="Payment Background"
                    />
               </div>

               {/* Payments Box */}
               <div className="flex flex-col lg:grid gap-6 lg:grid-rows-4 lg:grid-cols-2 p-8">
                    <div className="payments-way flex justify-center items-center rounded-xl bg-gray-200/80 w-52 h-36 transition-all duration-500 hover:bg-[#6671c6]">
                         <img className="w-24" src="images/Mastercard-logo.png" alt="Mastercard" />
                    </div>
                    <div className="payments-way flex justify-center items-center rounded-xl bg-gray-200/80 w-52 h-36 transition-all duration-500 hover:bg-[#6671c6] col-start-2">
                         <img className="w-24" src="images/Visa_Logo.png" alt="Visa" />
                    </div>
                    <div className="payments-way flex justify-center items-center rounded-xl bg-gray-200/80 w-52 h-36 transition-all duration-500 hover:bg-[#6671c6] row-start-3">
                         <img className="w-24" src="images/Black_PNG.png" alt="KO" />
                    </div>
                    <div className="payments-way flex justify-center items-center rounded-xl bg-gray-200/80 w-52 h-36 transition-all duration-500 hover:bg-[#6671c6] col-start-2">
                         <img className="w-24" src="images/wechatpay.png" alt="WeChat Pay" />
                    </div>
               </div>
          </section>
     );
};

export default PaymentMethods;
