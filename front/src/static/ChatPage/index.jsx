import React, { useContext } from 'react';
import './styles.sass';
import { ChatContext } from '../../core/context/ChatContext';
import UserChat from '../../shared/Chat';
import { AuthContext } from '../../core/context/AuthContext';
import PotentialChats from '../../shared/PotentialChats.jsx';
import ChatBox from '../../shared/ChatBox';

const ChatPage = () => {
    const { user } = useContext(AuthContext);
    const {userChats, isUserChatsLoading, updateCurrentChat} = useContext(ChatContext);

    return(
        <div className='page-chat'>
            <PotentialChats/>
            {userChats?.length < 1 ? null : (
                <div className='chat-block'>
                    <div className="chat-list">
                        {isUserChatsLoading && <p>Loading chats...</p>}
                        {userChats?.map((chat, index) => {
                            return(
                                <div key={index} onClick={() => updateCurrentChat(chat)}>
                                    <UserChat chat={chat} user={user}/>
                                </div>
                            )
                           
                        })}
                    </div>
                    <ChatBox/>
                </div>
            )}
        </div>
    )
}

export default ChatPage;