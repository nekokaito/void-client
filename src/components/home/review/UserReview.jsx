import ReviewCard from "./ReviewCard";


const UserReview = () => {
     return (
          <div className="flex flex-col px-4 lg:flex-row items-center justify-center gap-4">
               <ReviewCard></ReviewCard>
               <ReviewCard></ReviewCard>
               <ReviewCard></ReviewCard>
               <ReviewCard></ReviewCard>
          </div>
     );
};

export default UserReview;