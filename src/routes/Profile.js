import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Profile.scss";

function Profile() {
  const location = useLocation();
  const { id, name, email, img, bg } = location.state;
  return (
    <>
      <header className="profile_header">
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
          <div className="left_item">
            <Link to="/" exact={true}>
              <i className="fas fa-times"></i>
            </Link>
          </div>
          <div className="right_item">
            <a href="#">
              <i className="fas fa-user"></i>
            </a>
          </div>
        </div>
      </header>
      <main className="profile">
        <header
          className="profile_bg"
          style={{
            background: "url(" + bg + ") no-repeat 0% 0%",
            backgroundSize: "cover",
          }}
        >
          <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
          </div>
        </header>
        <div className="container">
          <input type="text" placeholder={email} />
          <div className="profile_menu">
            <div>
              <span className="profile_icon">
                <i className="fas fa-comment"></i>
              </span>
              <p>Chatroom</p>
            </div>
            <div>
              <span className="profile_icon">
                <i className="fas fa-pencil-alt"></i>
              </span>
              <p>Edit Profile</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
