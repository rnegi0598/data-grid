import React from "react";
import "./navbar.scss";
const Navbar = ({ activeType, activeHandler }) => {
  return (
    <div className="navbar">
      <div
        className={activeType === "users" ? "flex-item active users" : "flex-item users"}
        onClick={()=>activeHandler("users")}
      >
        Users
      </div>
      <div
        className={activeType === "posts" ? "flex-item active" : "flex-item"}
        onClick={()=>activeHandler("posts")}
      >
        Posts
      </div>
      <div
        className={activeType === "comments" ? "flex-item active comments" : "flex-item comments"}
        onClick={()=>activeHandler("comments")}
      >
        Comments
      </div>
    </div>
  );
};

export default Navbar;
