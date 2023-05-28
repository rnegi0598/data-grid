import React from "react";
import "./searchbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchBar = ({ fieldNames }) => {
  return (
    <div className="search-bar">
      <div className="search-box">
        <p>What are you looking for ?</p>
        <div className="input-wrapper">
          <SearchOutlinedIcon className="search-icon" />
          <input
            placeholder={`Search for ${fieldNames[0]} ,${fieldNames[1]} etc . . .`}
          />
        </div>
      </div>
      <div className="category">
        <p>Category</p>
        <select id="cars" name="cars" defaultValue="all">
          <option value="all">All</option>
          {fieldNames.map((category, ind) => {
            return (
              <option value={category} key={ind}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <div className="search">
        <div className="search-btn">Search</div>
      </div>
    </div>
  );
};

export default SearchBar;
