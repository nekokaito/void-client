import Accordion from "../../components/home/accordion/Accordion";
import Banner from "../../components/home/banner/Banner";
import FeatureProducts from "../../components/home/feature/FeatureProducts";
import PaymentMethods from "../../components/home/payment/PaymentMethods";
import UserReview from "../../components/home/review/UserReview";

const Home = () => {
     return (
          <div>
               <Banner></Banner>

               <div className='container mx-auto'>
                    <div className='my-32'>
                         <h1 className='mb-16 text-center font-bold text-3xl'>Featured Products</h1>
                         <FeatureProducts></FeatureProducts>
                    </div>
                    <div className='my-32'>
                         <h1 className='mb-16 text-center font-bold text-3xl'>Review</h1>
                         <UserReview></UserReview>
                    </div>
                    <div className='my-32'>
                         <h1 className='mb-16 text-center font-bold text-3xl'>Questions</h1>
                         <Accordion></Accordion>
                    </div>
                    <div className='my-32'>
                         <h1 className='mb-16 text-center font-bold text-3xl'>Payment Methods</h1>
                         <PaymentMethods></PaymentMethods>
                    </div>
               </div>
          </div>
     );
};

export default Home;