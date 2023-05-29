import React, { useState } from "react";
import "./tableHeader.scss";
import TableHeaderItem from "./TableHeaderItem";
const TableHeader = ({ fieldNames }) => {
  const [sortField, setSortField] = useState("");
console.log(sortField);
  return (
    <tr>
      {fieldNames.map((attr, ind) => {
        return (
          <TableHeaderItem
            attr={attr}
            ind={ind}
            key={ind}
            sortField={sortField}
            setSortField={setSortField}
          />
        );
      })}
    </tr>
  );
};

export default TableHeader;
