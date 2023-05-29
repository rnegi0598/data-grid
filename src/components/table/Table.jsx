import React ,{useEffect, useState} from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";
import "./table.scss";
const Table = ({ fieldNames, data }) => {
  const [sortedData,setSortedData]=useState(data);
  const [fieldArray,setFieldArray]=useState(fieldNames.map((element) => ({
    "fieldName":element,
    "value": '',
  })));

  useEffect(()=>{
    //sort the array
    // setSortedData((arr)=>{
    //   return arr.sort((a,b)=>{

    //   })
    // })

  },[fieldArray]);

  const sortFunc=({fieldName,value})=>{
    //updated field array
    setFieldArray((arr)=>{
      return arr.map((item)=>{
        if(item.fieldName===fieldName){
          item.value=value;
        }
        return item;
      })
    })

  }

  console.log(fieldArray);
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <TableHeader fieldNames={fieldNames}  />
        </thead>
        <tbody>
          <TableData data={sortedData} fieldNames={fieldNames} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
