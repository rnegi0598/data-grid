import React from "react";
import { useGetPostsQuery } from "../../services/jsonplaceholder";
import SearchBar from "../../components/searchbar/SearchBar";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
const Posts = ({ currentPage, currentPageHandler }) => {
  let start, end;
  start = (currentPage - 1) * 10;
  end = currentPage * 10;
  const { data, isError, isFetching, isLoading, isSuccess } = useGetPostsQuery({
    start,
    end,
  });
  if (data) {
    console.log(Object.keys(data[0]));
  } else {
    return <div>loading.....</div>;
  }

  return (
    <div className="datagrid">
      <SearchBar fieldNames={Object.keys(data[0])} />
      <Table fieldNames={Object.keys(data[0])} data={data} />
      <Pagination
        currentPage={currentPage}
        currentPageHandler={currentPageHandler}
        totalPages={10}
      />
    </div>
  );
};

export default Posts;
