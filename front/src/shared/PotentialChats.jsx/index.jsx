import { useContext } from "react";
import { ChatContext } from "../../core/context/ChatContext";
import { AuthContext } from "../../core/context/AuthContext";
import './styles.sass';

const PotentialChats = () => {
    const {user} = useContext(AuthContext);
    const {potentialChats, createChat, onlineUsers} = useContext(ChatContext);

    return(
        <div className="potential">
            {potentialChats && potentialChats.map((u, index) => {
                return(
                    <div className="single-user" key={index} onClick={() => createChat(user._id, u._id)}>
                        <div className="user-name">
                            <p className="name">{u.name}</p>
                        </div>
                       <div className={onlineUsers?.some((user) => user?.userId === u?._id) ? "online-user" : "offline-user"}>
                       </div>
                        
                    </div>
                )
            })
            }
        </div>
    );
};

export default PotentialChats;