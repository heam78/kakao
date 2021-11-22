import React, { useState, useEffect } from "react";
import axios from "axios";

import ChatList from "../components/ChatList";
import Img from "../data/Img.json";
import Nav from "../components/Nav";
import "../styles/Chats.scss";

function Chats() {
  const chatImg = Img;
  console.log(chatImg);
  const [chats, setChats] = useState([]);
  const getChat = async () => {
    const { data: chats } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setChats(chats);
  };
  useEffect(getChat, []);

  return (
    <div>
      <header className="header">
        <div className="status_bar">
          <div className="left_item">
            <i className="fas fa-plane"></i>
            <i className="fas fa-wifi"></i>
          </div>
          <div className="chat_center_item">
            <span>17</span>:<span>33</span>
          </div>
          <div className="right_item">
            <i className="far fa-moon"></i>
            <i className="fab fa-bluetooth-b"></i>
            <span>
              <span>100</span>%
            </span>
            <i className="fas fa-battery-full"></i>
          </div>
        </div>
        <div className="title_bar">
          <h1>Chats</h1>
          <div className="left_item">Edit</div>
          <div className="right_item">
            <i className="fas fa-cog"></i>
          </div>
        </div>
      </header>
      <main className="chats">
        <div className="search_box">
          <div className="search_inner">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Find friends"
            />
          </div>
        </div>
        <ul className="chats_list">
          {chats.map((chat, idx) => (
            <ChatList
              id={chat.id}
              username={chat.username}
              name={chat.name}
              img={chatImg[idx].image}
            />
          ))}
        </ul>
      </main>
      <Nav />
      <div className="chat_fa_btn">
        <i className="fas fa-comment"></i>
      </div>
    </div>
  );
}

export default Chats;
