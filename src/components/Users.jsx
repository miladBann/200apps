import avatar0 from "../assets/avatar_0.png";
import avatar1 from "../assets/avatar_1.png";
import message from "../assets/ChatBubble.png"



function Users() {
    return (
        <div className="users_cont">
            <img src={avatar0} alt="" />
            <img src={avatar1} alt="" />
            <img src={message} alt="" />
        </div>
    );
}

export default Users;