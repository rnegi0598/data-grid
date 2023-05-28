import React from "react";
import "./navbar.scss";
const Navbar = ({ activeType, activeHandler }) => {
  return (
    <div className="navbar">
      <div
        className={activeType === "users" ? "flex-item active" : "flex-item"}
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
        className={activeType === "comments" ? "flex-item active" : "flex-item"}
        onClick={()=>activeHandler("comments")}
      >
        Comments
      </div>
    </div>
  );
};

export default Navbar;
