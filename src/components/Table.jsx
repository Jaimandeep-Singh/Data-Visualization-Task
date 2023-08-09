import React, { useEffect, useState } from 'react'
import TableHeader from './TableHeader.jsx'
import TableBody from './TableBody.jsx'

const Table = (props) => {
// This component will accept data as props and will render it into table
    const type=props.type;
    const [resultantData, setResultantData]= useState([])
    useEffect(()=>{
      // This hook will generate different data for different type
        if(type==="Flavanoids")
            setResultantData(props.data.map((item)=>item?.map(res=>parseFloat(res.Flavanoids))))
        if(type==="Gamma")
        setResultantData(props.data.map((item)=>item?.map(res=>(parseFloat(res.Ash)*parseFloat(res.Hue))/parseFloat(res.Magnesium))))

    },[props?.data, type])
  return (
    <table className="styled-table">
          <thead>
            {/* below component will render header for the table */}
            <TableHeader data={props.data}/>
            </thead>
            <tbody>
            {/* below component will render body for the table */}
              <TableBody type={type} data={resultantData} />
            </tbody>
        </table>
  )
}
export default Table