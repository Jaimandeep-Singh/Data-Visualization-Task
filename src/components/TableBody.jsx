 import React from 'react'
import TableCellData from './TableCellData';

const TableBody = (props) => {
    const type=props.type;
  return (
    <>
        <tr>
            {/* This will reflect the row for mean data of each table*/}
            <th>{type +'\n Mean'}</th>
            {props.data.map((item, index)=><TableCellData key={index} calculate='mean' data={item} />)}
        </tr>
        <tr>
            {/* This will reflect the row for median data of each table*/}
            <th>{type+'\n Median'}</th>
            {props.data.map((item, index)=><TableCellData key={index} calculate='median' data={item}/>)}
        </tr>
        <tr>
            {/* This will reflect the row for mode data of each table*/}
            <th>{type+'\n Mode'}</th>
            {props.data.map((item, index)=><TableCellData key={index} calculate='mode' data={item}/>)}
        </tr>
    </>
  )
}

export default TableBody