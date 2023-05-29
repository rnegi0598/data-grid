import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";
import NoMatchFound from "../noMatchFound/NoMatchFound";
import "./table.scss";
const Table = ({ fieldNames, data, value, category }) => {
  const [sortedData, setSortedData] = useState(data);
  const [activeField, setActiveField] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  useEffect(() => {
    if (!activeField) {
      setSortedData(data);
      return;
    }

    const modifyArray = [...data].sort((a, b) => {
      if (sortOrder == "asc") {
        return a[activeField] > b[activeField];
      } else {
        return b[activeField] > a[activeField];
      }
    });
    setSortedData(modifyArray);
  }, [activeField, sortOrder, data]);

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
        {data.length === 0 ? (
          <NoMatchFound/>
        ) : (
          <tbody>
            <TableData
              data={sortedData}
              fieldNames={fieldNames}
              value={value}
              category={category}
            />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Table;
