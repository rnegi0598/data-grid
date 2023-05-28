import React from 'react'
import './tableData.scss'
const TableData = ({fieldNames,data}) => {
  return (
    <>
      {data.map((obj,ind)=>{
        return (
          <tr key={ind}>
            {
              fieldNames.map((attr,ind)=>{
                return (
                  <td key={ind}>{obj[attr]}</td>
                )
              })
            }
          </tr>
        )
      })}
    </>
  )
}

export default TableData