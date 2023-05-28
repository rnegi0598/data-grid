import React, { useState } from "react";
import { useGetUserQuery } from "../../services/jsonplaceholder";
import SearchBar from "../../components/searchbar/SearchBar";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category,setCategory]=useState('all');
  const [value,setValue]=useState('');

  const start = (currentPage - 1) * 10;
  const end = currentPage * 10;

  const { data, isError, isFetching, isLoading, isSuccess } = useGetUserQuery({
    start,
    end,
  });

  // console.log(data);
  
  if (!data) {
    return <div>loading.....</div>;
  } 

  return (
    <div className="datagrid">
      <SearchBar
        fieldNames={Object.keys(data[0])}
        currentPageHandler={setCurrentPage}
        setCategoryField={setCategory}
        setValueField={setValue}
      />
      <Table fieldNames={Object.keys(data[0])} data={data} />
      <Pagination
        currentPage={currentPage}
        currentPageHandler={setCurrentPage}
        totalPages={1}
      />
    </div>
  );
};

export default Users;
