import React, { useState } from "react";
import { useGetPostsQuery } from "../../services/jsonplaceholder";
import SearchBar from "../searchbar/SearchBar";
import Table from "../table/Table";
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";
const PostsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [value, setValue] = useState("");
  //when filters is applied get all the values ,for that put start=-1 and end=-1
  //when filter not applied set start and end according to page set in pagination
  const start = value ? -1 : (currentPage - 1) * 10;
  const end = value ? -1 : currentPage * 10;

  const { data, isError, isFetching, isLoading, isSuccess } = useGetPostsQuery({
    start,
    end,
  });

  if (!data || isFetching) {
    return <Loading />;
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
        valueField={value}
      />
      <Table fieldNames={Object.keys(data[0])} data={postData} value={value} category={category} />
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

export default PostsTable;
