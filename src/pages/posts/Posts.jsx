import React, { useState } from "react";
import { useGetPostsQuery } from "../../services/jsonplaceholder";
import SearchBar from "../../components/searchbar/SearchBar";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [value, setValue] = useState("");

  //if value is not empty meaning filter is applied ,then get all the values
  const start = value ? -1 : (currentPage - 1) * 10;
  const end = value ? -1 : currentPage * 10;

  const { data, isError, isFetching, isLoading, isSuccess } = useGetPostsQuery({
    start,
    end,
  });

  if (!data) {
    return <div>loading.....</div>;
  }

  //filter for search
  let postData;
  if (value) {
    if (category === "all") {
      postData = data.filter((item) => {
        const keys = Object.keys(item);
        return keys.some((key) => {
          return item[key]
            .toString()
            .toUpperCase()
            .includes(value.toUpperCase());
        });
      });
    } else {
      postData = data.filter((item) => {
        return item[category]
          .toString()
          .toUpperCase()
          .includes(value.toUpperCase());
      });
    }
  } else {
    postData = data;
  }

  return (
    <div className="datagrid">
      <SearchBar
        fieldNames={Object.keys(data[0])}
        currentPageHandler={setCurrentPage}
        setCategoryField={setCategory}
        setValueField={setValue}
      />
      <Table fieldNames={Object.keys(data[0])} data={postData} />
      {!value && (
        <Pagination
          currentPage={currentPage}
          currentPageHandler={setCurrentPage}
          totalPages={10}
        />
      )}
    </div>
  );
};

export default Posts;
