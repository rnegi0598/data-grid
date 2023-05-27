import React from "react";
import SearchBar from "../searchbar/SearchBar";
import Table from "../table/Table";
import Pagination from "../pagination/Pagination";
const DataGrid = () => {
  return (
    <div>
      <SearchBar />
      <Table />
      <Pagination />
    </div>
  );
};

export default DataGrid;
