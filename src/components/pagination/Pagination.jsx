import React from "react";
import "./pagination.scss";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Pagination = ({ currentPage, currentPageHandler, totalPages }) => {
  return (
    <div className="pagination">
      <button className="prev" onClick={()=>{currentPageHandler(currentPage-1)} } disabled={currentPage===1?true:false} ><ArrowBackIosNewIcon/></button>
      {[...Array(totalPages)].map((_, ind) => {
        return (
          <button
            key={ind}
            className={currentPage === ind + 1 ? "active-page" : ""}
            onClick={() => {
              currentPageHandler(ind + 1);
            }}
          >
            {ind + 1}
          </button>
        );
      })}
      <button className="next" onClick={()=>{currentPageHandler(currentPage+1)}} disabled={currentPage===totalPages?true:false}><ArrowForwardIosIcon/></button>
    </div>
  );
};

export default Pagination;
