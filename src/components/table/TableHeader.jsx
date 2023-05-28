import React from 'react'
import './tableHeader.scss'

const TableHeader = ({fieldNames}) => {
  return (
    <tr >
      {
        fieldNames.map((attr,ind)=>{
          return (
            <th key={ind}>{attr}</th>
          )
        })
      }
    </tr>
  )
}

export default TableHeader