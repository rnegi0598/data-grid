import React, { useState, useEffect } from "react";
import arrowDown from "../../assets/arrowDown.svg";
import arrowUp from "../../assets/arrowUp.svg";

const TableHeaderItem = ({ ind, attr, activeField, setActiveField ,setSortOrder}) => {
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);

  useEffect(() => {
    if (activeField !== attr) {
      setAscending(false);
      setDescending(false);
    }
  }, [activeField]);

  const ascHandler = (attr) => {
    if (descending && !ascending) {
      setAscending(true);
      setDescending(false);
      setActiveField(attr);
    } else {
      if (ascending) {
        setActiveField("");
      } else {
        setActiveField(attr);
      }
      setAscending((prev) => !prev);
    }
    setSortOrder('asc')
  };
  const descHandler = (attr) => {
    if (ascending && !descending) {
      setDescending(true);
      setAscending(false);
      setActiveField(attr);
    } else {
      if (descending) {
        setActiveField("");
      } else {
        setActiveField(attr);
      }
      setDescending((prev) => !prev);
    }
    setSortOrder("desc");
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
