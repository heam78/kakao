import React from "react";
import { Link } from "react-router-dom";

function ChatList({ id, name, img, username }) {
  return (
    <div>
      <li className="chats">
        <Link to={"/Chat"} state={{ id, img, username }}>
          <div className="chat_content">
            <img src={img} alt="" />
            <div className="chat_info">
              <h3>{username}</h3>
              <span>{name}</span>
            </div>
          </div>
          <span className="chats_time">
            <span>17</span>:<span>33</span>
          </span>
        </Link>
      </li>
    </div>
  );
}

export default ChatList;
