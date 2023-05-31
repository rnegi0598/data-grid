import React, { useState } from "react";
import { useGetUserQuery } from "../../services/jsonplaceholder";
import SearchBar from "../searchbar/SearchBar";
import Table from "../table/Table";
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";
const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [value, setValue] = useState("");
  //when filters is applied get all the values ,for that put start=-1 and end=-1
  //when filter not applied set start and end according to page set in pagination
  const start = value ? -1 : (currentPage - 1) * 10;
  const end = value ? -1 : currentPage * 10;

  const { data, isError, isFetching, isLoading, isSuccess } = useGetUserQuery({
    start,
    end,
  });

  if (!data || isFetching) {
    return <Loading />;
  }

  //filter for search
  let userData;
  if (value) {
    if (category === "all") {
      userData = data.list.filter((item) => {
        const keys = Object.keys(item);
        return keys.some((key) => {
          return item[key]
            .toString()
            .toUpperCase()
            .includes(value.toUpperCase());
        });
      });
    } else {
      userData = data.list.filter((item) => {
        return item[category]
          .toString()
          .toUpperCase()
          .includes(value.toUpperCase());
      }); 
    }
  } else {
    userData = data.list;
  }

  return (
    <div className="datagrid">
      <SearchBar
        fieldNames={Object.keys(data.list[0])}
        currentPageHandler={setCurrentPage}
        setCategoryField={setCategory}
        setValueField={setValue}
        valueField={value}
      />
      <Table fieldNames={Object.keys(data.list[0])} data={userData} value={value } category={category} />
      {!value && (
        <Pagination
          currentPage={currentPage}
          currentPageHandler={setCurrentPage}
          totalPages={data.totalPages}
        />
      )}
    </div>
  );
};

export default UsersTable;
