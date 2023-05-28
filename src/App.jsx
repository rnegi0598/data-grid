import { useState } from "react";

import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import DataGrid from "./components/dataGrid/DataGrid";

function App() {
  const [activeType, setActiveType] = useState("users");

  const activeHandler = (type) => {
    setActiveType(type);
  };

  return (
    <div className="app-wrapper">
      <div className="app">
        <Navbar activeType={activeType} activeHandler={activeHandler} />
        <DataGrid activeType={activeType} />
      </div>
    </div>
  );
}

export default App;
