import React from 'react'

const TableHeader = (props) => {
  return (
    <tr>
      {/* this component is rendering headers for the table */}
        <th>Measure</th>
        {props?.data?.map((item,index)=><th key={item}>Class {index+1}</th>)}
    </tr>
  )
}

export default TableHeader