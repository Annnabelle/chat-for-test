import {useFetchRecipientUser} from '../../core/hooks/useFetchRecipient';
import userImage from '../../assets/user1.png';
import './styles.sass';
import { useContext } from 'react';
import { ChatContext } from '../../core/context/ChatContext';

const UserChat = ({chat, user}) => {

    const {recipientUser} = useFetchRecipientUser(chat, user);
    const {onlineUsers} = useContext(ChatContext);

    const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id)
   
    return(
        <div className='user-chat'>
            <div className="user-chat-block">
                <div className="user-me">
                    <img src={userImage} alt="user"/>
                </div>
                <div className="user-chat-text">
                    <div className="user-name">{recipientUser?.name}</div>
                    <div className="user-text">Text Message</div>
                </div>
            </div>
            <div className="userdate">
                <div className="remove-chat" onClick={() => (console.log("clicked"))}></div>
                <div className={isOnline ? "online-user" : "offline-user"}></div>
                <div className="date">12/12/2022</div>
                <div className="user-notification">2</div>
            </div>
        </div>
    );
};

export default UserChat;