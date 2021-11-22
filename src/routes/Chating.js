import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Chating.scss";

function Chating() {
  const location = useLocation();
  const { id, img, username } = location.state;
  return (
    <>
      <header className="chating_header">
        <div className="status_bar">
          <div className="left_item">
            <i className="fas fa-plane"></i>
            <i className="fas fa-wifi"></i>
          </div>
          <div className="center_item">
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
        <div class="title_bar">
          <h1>{username}</h1>
          <div class="left_item">
            <Link to="/Chats">
              <i class="fas fa-angle-left"></i>
            </Link>
          </div>
          <div class="right_item">
            <i class="fas fa-search"></i>
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </header>
      <main className="chating">
        <div className="data">Monday, october 25, 2021</div>
        <div className="chat_box my">
          <div className="message">
            <span className="chat">Hello!</span>
            <span className="chat">Hello! This is a test massage</span>
            <span className="chat">This is a test massage</span>
          </div>
          <span className="chat_time">
            <span>16</span>:<span>30</span>
          </span>
        </div>
        <div className="chat_box other">
          <div className="other_info">
            <img src={img} alt="" />
          </div>
          <div className="message">
            <h3>{username}</h3>
            <span className="chat">And this is an answer</span>
            <span className="chat">
              And this is an answer And this is an answer
            </span>
            <span className="chat">And this is an answer</span>
          </div>
          <span className="chat_time">
            <span>17</span>:<span>33</span>
          </span>
        </div>
      </main>
      <div className="chating_input">
        <span className="plus_btn">
          <i class="fas fa-plus"></i>
        </span>
        <div className="form">
          <div>
            <div className="chating_msg">
              <input type="text" />
              <i class="far fa-smile"></i>
            </div>
            <div className="voice_btn">
              <i class="fas fa-microphone"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chating;
