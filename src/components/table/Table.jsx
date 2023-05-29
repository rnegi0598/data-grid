import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";
import "./table.scss";
const Table = ({ fieldNames, data }) => {
  
  const [sortedData, setSortedData] = useState(data);
  const [activeField, setActiveField] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  useEffect(() => {
  

    if (!activeField) {
      setSortedData(data);
      return;
    }

    const modifyArray = [...data].sort((a, b) => {
      if(sortOrder=="asc"){
        return a[activeField] > b[activeField];
      }else{
        return b[activeField] > a[activeField];
      }
    });
    setSortedData(modifyArray);
  }, [activeField, sortOrder,data]);

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <TableHeader
            fieldNames={fieldNames}
            activeField={activeField}
            setActiveField={setActiveField}
            setSortOrder={setSortOrder}
          />
        </thead>
        <tbody>
          <TableData data={sortedData} fieldNames={fieldNames} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
