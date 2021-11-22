import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <nav class="tab_bar">
      <NavLink to="/" className="choice">
        <i class="fas fa-user"></i>
        <span class="tab_title">Friends</span>
      </NavLink>
      <NavLink to="/chats" className="choice">
        <i class="fas fa-comment"></i>
        <span class="tab_title">Chate</span>
      </NavLink>
      <NavLink to="/find" className="choice">
        <i class="fas fa-search"></i>
        <span class="tab_title">Find</span>
      </NavLink>
      <NavLink to="/more" className="choice">
        <i class="fas fa-ellipsis-h"></i>
        <span class="tab_title">More</span>
      </NavLink>
    </nav>
  );
}

export default Nav;
