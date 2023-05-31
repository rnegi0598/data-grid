import React from "react";
import "./datagrid.scss";
import UsersTable from "../../pages/users/UsersTable";
import PostsTable from "../../pages/posts/PostsTable";
import CommentsTable from "../../pages/comments/CommentsTable";

const DataGrid = ({ activeType }) => {
  if (activeType === "users") {
    return <UsersTable />;
  } else if (activeType === "posts") {
    return <PostsTable />;
  } else {
    return <CommentsTable />;
  }
};

export default DataGrid;
