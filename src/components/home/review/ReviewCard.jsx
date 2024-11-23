/* eslint-disable react/prop-types */
const ReviewCard = ({ review }) => {
     const { name, userreview } = review
     return (
          <div>
               <div className="card bg-primary text-primary-content w-96">
                    <div className="card-body">
                         <h2 className="card-title">{name}</h2>
                         <p>{userreview}</p>

                    </div>
               </div>
          </div>
     );
};

export default ReviewCard;