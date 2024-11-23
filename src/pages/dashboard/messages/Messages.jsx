import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../../hook/baseURL";
import MessageCard from "../../../components/dashboard/msg/MessageCard";


const Messages = () => {

     const [messages, setMessages] = useState([]);

     useEffect(() => {
          const getMessages = async () => {
               await axios.get(`${baseUrl}/messages`).then(res => setMessages(res.data))
          }
          getMessages();
     }, [])

     return (
          <div className="container mx-auto">
               <h1 className="text-3xl text-center my-10">All Messages</h1>
               {messages.length > 0 ? (
                    <div className="grid p-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                         {messages.map(userMessage => (
                              <MessageCard key={userMessage._id} userMessage={userMessage} />
                         ))}
                    </div>
               ) : (
                    <p className="text-center text-gray-500">No messages found</p>
               )}
          </div>

     );
};

export default Messages;