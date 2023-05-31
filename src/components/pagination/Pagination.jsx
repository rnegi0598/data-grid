import React from "react";
import "./pagination.scss";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Pagination = ({ currentPage, currentPageHandler, totalPages }) => {
 if(totalPages>20){
  const startPoint=currentPage>=6?currentPage-4:2;
  const endPoint=currentPage+4>=totalPages?totalPages-1:currentPage+4;

  return (
    <div className="pagination">
      <button className="prev" title="previous" onClick={()=>{currentPageHandler(currentPage-1)} } disabled={currentPage===1?true:false} ><ArrowBackIosNewIcon/></button>
      {[...Array(totalPages)].map((_, ind) => {
        if(ind==0 || ind==totalPages-1 || (ind+1>=startPoint && ind+1<=endPoint)){
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
        }else if(ind+1===startPoint-1 || ind+1===endPoint+1){
          return (
            <span>...</span>
          )
        }
        
      })}
      <button className="next" title="next" onClick={()=>{currentPageHandler(currentPage+1)}} disabled={currentPage===totalPages?true:false}><ArrowForwardIosIcon/></button>
    </div>
  )

  
 }
  return (
    <div className="pagination">
      <button className="prev" title="previous" onClick={()=>{currentPageHandler(currentPage-1)} } disabled={currentPage===1?true:false} ><ArrowBackIosNewIcon/></button>
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
      <button className="next" title="next" onClick={()=>{currentPageHandler(currentPage+1)}} disabled={currentPage===totalPages?true:false}><ArrowForwardIosIcon/></button>
    </div>
  );
};

export default Pagination;
