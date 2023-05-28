import React from "react";
import "./datagrid.scss";
import Users from "../../pages/users/Users";
import Posts from "../../pages/posts/Posts";
import Comments from "../../pages/comments/Comments";

const DataGrid = ({ activeType }) => {
  if (activeType === "users") {
    return <Users />;
  } else if (activeType === "posts") {
    return <Posts />;
  } else {
    return <Comments />;
  }
};

export default DataGrid;
