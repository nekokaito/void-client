import { TbMessageExclamation } from "react-icons/tb";


const MessageCard = ({ userMessage }) => {
     const { name, email, message } = userMessage;
     return (

          <div className="card bg-green-500 text-primary-content w-96">
               <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p>{email}</p>
                    <p>{message}</p>

               </div>
               <div className="flex justify-end gap-2">
                    <TbMessageExclamation size={50} />

               </div>
          </div>

     );
};

export default MessageCard;