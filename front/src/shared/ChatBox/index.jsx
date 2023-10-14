import { useContext, useState } from "react";
import { AuthContext } from "../../core/context/AuthContext";
import { ChatContext } from "../../core/context/ChatContext";
import { useFetchRecipientUser } from "../../core/hooks/useFetchRecipient";
import moment from 'moment';
import InputEmoji from 'react-input-emoji';
import './styles.sass';
import Button from "../Button";



const ChatBox = () => {
   const {user} = useContext(AuthContext);
   const {currentChat, messages, isMessagesLoading, sendTextMessage} = useContext(ChatContext);
   const {recipientUser} = useFetchRecipientUser(currentChat, user, );
   const [textMessage, setTextMessage] = useState('');

   console.log('text', recipientUser);

   if (!recipientUser){
      return (
         <div className="conversation-text">
             <p>No conversation selected yet...</p>
         </div>
      );
   }
   if (isMessagesLoading){
      return(
         <p>Loading Chat...</p>
      );
   }


   console.log('res', recipientUser);


   return(
      <div className="chat-box">
         <div className="chat-header">
            <h4 className="heading">{recipientUser?.name}</h4>
         </div>
         <div className="messages">
            {messages && messages.map((message, index) => (
               <div key={index} className={`${message?.senderId === user?._id ? 'message-item-left' : 'message-item-right'}`}>
                  <div className={`${message?.senderId === user?._id ? 'message message-right' : 'message message-left'}`}>
                     <div className="text-message">{message.text}</div>
                     <div className="message-footer">{moment(message.createdAt).calendar()}</div>
                  </div>
                 
               </div>
            ))}
         </div>
         <div className="chat-input">
            <InputEmoji value={textMessage} onChange={setTextMessage}/>
            <Button text='send' onClick={() => sendTextMessage(textMessage, user, currentChat._id, setTextMessage)}/>
         </div>
      </div>
   );
};

export default ChatBox;