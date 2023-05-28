import React from "react";
import "./datagrid.scss";
import Users from "../../pages/users/Users";
import Posts from "../../pages/posts/Posts";
import Comments from "../../pages/comments/Comments";

const DataGrid = ({ activeType, currentPage, setCurrentPage }) => {
  const currentPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (activeType === "users") {
    return (
      <Users
        currentPage={currentPage}
        currentPageHandler={currentPageHandler}
      />
    );
  } else if (activeType === "posts") {
    return (
      <Posts
        currentPage={currentPage}
        currentPageHandler={currentPageHandler}
      />
    );
  } else {
    return (
      <Comments
        currentPage={currentPage}
        currentPageHandler={currentPageHandler}
      />
    );
  }
};

export default DataGrid;
