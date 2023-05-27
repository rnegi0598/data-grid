import { useState } from "react";
import {
  useGetCommentsQuery,
  useGetPostsQuery,
  useGetUserQuery,
} from "./services/jsonplaceholder";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import DataGrid from "./components/dataGrid/DataGrid";

function App() {
  const { data, isError, isFetching, isLoading, isSuccess } = useGetUserQuery();

  return (
    <>
      <Navbar />
      <DataGrid />
    </>
  );
}

export default App;
