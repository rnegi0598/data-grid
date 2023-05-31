import React, { useState } from "react";
import { useGetUserQuery } from "../../services/jsonplaceholder";
import SearchBar from "../../components/searchbar/SearchBar";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
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
      userData = data.filter((item) => {
        const keys = Object.keys(item);
        return keys.some((key) => {
          return item[key]
            .toString()
            .toUpperCase()
            .includes(value.toUpperCase());
        });
      });
    } else {
      userData = data.filter((item) => {
        return item[category]
          .toString()
          .toUpperCase()
          .includes(value.toUpperCase());
      }); 
    }
  } else {
    userData = data;
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
      <Table fieldNames={Object.keys(data[0])} data={userData} value={value } category={category} />
      {!value && (
        <Pagination
          currentPage={currentPage}
          currentPageHandler={setCurrentPage}
          totalPages={1}
        />
      )}
    </div>
  );
};

export default UsersTable;
