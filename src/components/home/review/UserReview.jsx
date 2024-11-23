import ReviewCard from "./ReviewCard";


const UserReview = () => {

     const reviews = [
          {
               "id": 1,
               "name": "John Doe",
               "userreview": "Amazing product! It exceeded my expectations and the quality is top-notch."
          },
          {
               "id": 2,
               "name": "Jane Smith",
               "userreview": "Good value for money. The customer service was also very helpful."
          },
          {
               "id": 3,
               "name": "Alice Johnson",
               "userreview": "The product arrived on time and works perfectly. Highly recommend!"
          },
          {
               "id": 4,
               "name": "Michael Brown",
               "userreview": "Not very satisfied with the product. It didn't perform as advertised."
          },
          
     ]




     return (
          <div className="flex flex-col px-4 lg:flex-row items-center justify-center gap-4">
               {
                    reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
               }
          </div>
     );
};

export default UserReview;