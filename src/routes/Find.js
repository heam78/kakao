import React from "react";
import Nav from "../components/Nav";
import "../styles/Find.scss";

function Find() {
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
          <h1>Find</h1>
          <div className="left_item">Edit</div>
          <div className="right_item"></div>
        </div>
      </header>
      <main>
        <div className="find_method">
          <div className="find_icon">
            <i className="fas fa-address-book"></i>
            <span>Find</span>
          </div>
          <div className="find_icon">
            <i className="fas fa-qrcode"></i>
            <span>QR Code</span>
          </div>
          <div className="find_icon">
            <i className="fas fa-mobile-alt"></i>
            <span>Shake</span>
          </div>
          <div className="find_icon">
            <i className="far fa-envelope"></i>
            <span>Invite via SNS</span>
          </div>
        </div>
        <div className="recommend_section">
          <h2>Recommended Friends</h2>
          <span>You Have no recommended friends.</span>
        </div>
      </main>
      <Nav />
    </div>
  );
}

export default Find;
