import React, { useState, useEffect } from "react";
import arrowDown from "../../assets/arrowDown.svg";
import arrowUp from "../../assets/arrowUp.svg";

const TableHeaderItem = ({ ind, attr, sortField, setSortField }) => {
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);

  useEffect(() => {
    if (sortField !== attr) {
      setAscending(false);
      setDescending(false);
    }
  }, [sortField]);

  const ascHandler = (attr) => {
    if (descending && !ascending) {
      setAscending(true);
      setDescending(false);
      setSortField(attr);
    } else {
      if (ascending) {
        setSortField("");
      } else {
        setSortField(attr);
      }
      setAscending((prev) => !prev);
    }
  };
  const descHandler = (attr) => {
    if (ascending && !descending) {
      setDescending(true);
      setAscending(false);
      setSortField(attr);
    } else {
      if (descending) {
        setSortField("");
      } else {
        setSortField(attr);
      }
      setDescending((prev) => !prev);
    }
  };

  return (
    <>
      <th key={ind}>
        {attr}
        <span className="sort">
          <img
            className={ascending ? " up active" : "up"}
            src={arrowUp}
            alt="arrow up"
            title="Ascending"
            onClick={(e) => {
              ascHandler(attr, e);
            }}
          />
          <img
            className={descending ? " down active" : "down"}
            src={arrowDown}
            alt="arrow down"
            title="Descending"
            onClick={() => {
              descHandler(attr);
            }}
          />
        </span>
      </th>
    </>
  );
};

export default TableHeaderItem;
