import React, { useState } from "react";
import "./tableHeader.scss";
import TableHeaderItem from "./TableHeaderItem";
const TableHeader = ({ fieldNames ,activeField,setActiveField,setSortOrder}) => {
 
  return (
    <tr>
      {fieldNames.map((attr, ind) => {
        return (
          <TableHeaderItem
            attr={attr}
            ind={ind}
            key={ind}
            activeField={activeField}
            setActiveField={setActiveField}
            setSortOrder={setSortOrder}
          />
        );
      })}
    </tr>
  );
};

export default TableHeader;
