import React from 'react'
import { mean, median, mode } from '../utils/Helper'

const TableCellData = (props) => {
  return (
    <>
        {/* This component will calulate and render the value for each cell by call the utility functions (Helper.js)*/}
        {props.calculate==='mean'&&<td>{mean(props.data).toFixed(3)}</td>}
        {props.calculate==='median'&&<td>{median(props.data).toFixed(3)}</td>}
        {props.calculate==='mode'&&<td>{mode(props.data).toFixed(3)}</td>} 
    </>
  )
}

export default TableCellData