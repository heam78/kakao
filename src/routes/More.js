import React from "react";
import PlusFriends from "../components/PlusFriends";
import friends from "../data/plusFriends.json";
import Profiles from "../data/memberList.json";
import Nav from "../components/Nav";
import "../styles/More.scss";

function More() {
  const myprofile = Profiles[0];
  console.log(friends);

  return (
    <div>
      <header className="header">
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
        <div className="title_bar">
          <h1>More</h1>
          <div className="left_item">Manage</div>
          <div className="right_item">
            <i className="fas fa-cog"></i>
          </div>
        </div>
      </header>
      <main>
        <section className="user_info">
          <img src={myprofile.profileImg} alt="" />
          <span className="profile_info">
            <h3>{myprofile.name}</h3>
            <span>{myprofile.email}</span>
          </span>
          <span className="chat_img">
            <i className="far fa-comment"></i>
          </span>
        </section>
        <section className="user_menu">
          <div>
            <i className="fas fa-smile"></i>
            <span>Emoticons</span>
          </div>
          <div>
            <i className="fas fa-paint-brush"></i>
            <span>Themes</span>
          </div>
          <div>
            <i className="fas fa-hand-peace"></i>
            <span>plus Friends</span>
          </div>
          <div>
            <i className="fas fa-user-circle"></i>
            <span>Account</span>
          </div>
        </section>
        <section className="plus_friends">
          <header>
            <h2>Plus Friends</h2>
            <div>
              <i className="fas fa-info-circle"></i>
              <span>Learn More</span>
            </div>
          </header>
          <div className="plus_option">
            {friends.map((friend) => (
              <PlusFriends
                id={friend.id}
                icon={friend.icon}
                title={friend.title}
              />
            ))}
          </div>
        </section>
        <section className="more_app">
          <div className="story">
            <span className="app_icon"></span>
            <p>Kakao Story</p>
          </div>
          <div className="path">
            <span className="app_icon"></span>
            <p>Path</p>
          </div>
          <div className="kakaoFriends">
            <span className="app_icon"></span>
            <p>Kakao friends</p>
          </div>
        </section>
      </main>
      <Nav />
    </div>
  );
}

export default More;
