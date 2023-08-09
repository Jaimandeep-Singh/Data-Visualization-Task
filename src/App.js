import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import {data} from './data/test.js'

function App() {

  // Below snippet will calulate all the distinct classes and seperate their data based upon all classes
  const [distinctClasses, setDistinctClasses] = useState([])
  const [filteredData, setfilteredData] = useState([])
    useEffect(()=>{
        setDistinctClasses([...new Set(data.map(item=>item.Alcohol))]);
    },[]);

    useEffect(()=>{
      setfilteredData(distinctClasses?.map(dist=>data?.filter(res=>res.Alcohol===dist)))
    },
    [distinctClasses])
  
  return (
    <div className="App">
        {/* rendered different tables based upon their types and passed data as props  */}
        <Table type='Flavanoids' data={filteredData}/>
        <Table type='Gamma' data={filteredData}/>
    </div>
  );
}

export default App;
