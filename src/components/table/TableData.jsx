import React from "react";
import "./tableData.scss";
const TableData = ({ fieldNames, data, value ,category}) => {
  return (
    <>
      {data.map((obj, ind) => {
        return (
          <tr key={ind}>
            {fieldNames.map((attr, i) => {
              const str = obj[attr].toString();
            
              if ((category==="all" || category==attr )&& str.toLowerCase().includes(value.toLowerCase())) {
                const ind = str.toLowerCase().indexOf(value.toLowerCase());
                const len = value.length;
                const beforeStr = str.slice(0, ind);
                const highlightedStr = str.slice(ind, ind + len);
                const afterStr = str.slice(ind + len);
                return (
                  <td key={i}>
                    {beforeStr}
                    <span style={{ color: "red",fontWeight:"900" }}>{highlightedStr}</span>
                    {afterStr}
                  </td>
                );
              } else {
                return <td key={i}>{str}</td>;
              }
            })}
          </tr>
        );
      })}
    </>
  );
};

export default TableData;
