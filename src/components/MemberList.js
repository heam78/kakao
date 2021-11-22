import React from "react";
import { Link } from "react-router-dom";

function memberList({id, name, email, img, text, bg}) {
  return (
    <div className="memberList">
      <div className="memberList_img">
        <img src={img} alt="" />
        <Link to={"/Profile"} state={{ id, name, email, img, bg }}>
          {name}
        </Link>
      </div>
      <span>{text}</span>
    </div>
  );
}


export default memberList;
