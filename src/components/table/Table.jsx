import React from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";
import "./table.scss";
const Table = ({ fieldNames, data }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <TableHeader fieldNames={fieldNames} />
        </thead>
        <tbody>
          <TableData data={data} fieldNames={fieldNames} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
