import React, { useState } from "react";
import "./searchbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchBar = ({ fieldNames ,currentPageHandler,setCategoryField,setValueField,valueField}) => {
  const [value,setValue]=useState('');
  const [category,setCategory]=useState('all');

  const submitHandler=()=>{
    if(value==="" && category===''){
      return ;
    }
    currentPageHandler(1);
    setCategoryField(category);
    setValueField(value)
    setValue('');
    setCategory('all');
  }
  return (
    <div className="search-bar">
      <div className="search-box">
        <p>What are you looking for ?</p>
        <div className="input-wrapper">
          <SearchOutlinedIcon className="search-icon" />
          <input
            placeholder={`Search for ${fieldNames[0]} ,${fieldNames[1]} etc . . .`}
            value={value} onChange={(e)=>{setValue(e.target.value)}}
          />
        </div>
      </div>
      <div className="category">
        <p>Category</p>
        <select id="cars" name="cars"  value={category} onChange={(e)=>{setCategory(e.target.value)}}>
          <option value="all">All</option>
          {fieldNames.map((field, ind) => {
            return (
              <option value={field} key={ind}>
                {field}
              </option>
            );
          })}
        </select>
      </div>
      <div className="search">
        <div className="search-btn" onClick={submitHandler}>{!valueField?"Search":"Reset"}</div>
      </div>
    </div>
  );
};

export default SearchBar;
