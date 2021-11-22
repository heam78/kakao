import React from "react";
import MemberList from "../components/MemberList";
import profiles from "../data/memberList.json";
import Nav from "../components/Nav";
import "../styles/Friends.scss";

function Friends() {
  const myprofile = profiles[0];
  return (
    <div>
      <div className="header">
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
          <h1>
            Friends <span>1</span>
          </h1>
          <div className="left_item">Manage</div>
          <div className="right_item">
            <i className="fas fa-cog"></i>
          </div>
        </div>
      </div>
      <main className="friends">
        <div className="search_box">
          <div className="search_inner">
            <i className="fas fa-search"></i>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Find friends, chats, Plus Friends"
            />
          </div>
        </div>
        <section className="main_section">
          <header className="section-h">
            <h2>My Profile</h2>
          </header>
          <div className="profile_list">
            <MemberList
              id={myprofile.id}
              name={myprofile.name}
              email={myprofile.email}
              img={myprofile.profileImg}
              text={myprofile.profileMsg}
              bg={myprofile.backgroundImg}
            />
          </div>
        </section>
        <hr />
        <section className="main_section">
          <header className="section-h">
            <h2>Friends</h2>
          </header>
          <div className="profile_list">
            {profiles.map((profile) => {
              if (profile.id != 0) {
                return (
                  <MemberList
                    id={profile.id}
                    name={profile.name}
                    email={profile.email}
                    img={profile.profileImg}
                    text={profile.profileMsg}
                    bg={profile.backgroundImg}
                  />
                );
              }
            })}
          </div>
        </section>
      </main>
      <Nav />
    </div>
  );
}

export default Friends;
