import { useState } from "react";

import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import DataGrid from "./components/dataGrid/DataGrid";

function App() {
  const [activeType, setActiveType] = useState("users");
  const [currentPage,setCurrentPage]=useState(1);

  const activeHandler = (type) => {
    if (type !== activeType) setActiveType(type);
    setCurrentPage(1);
  };

  return (
    <div className="app-wrapper">
      <div className="app">
        <Navbar activeType={activeType} activeHandler={activeHandler} />
        <DataGrid activeType={activeType} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}

export default App;
