import React from "react";
import "./datagrid.scss";
import UsersTable from "./UsersTable";
import PostsTable from "./PostsTable";
import CommentsTable from "./CommentsTable";

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
