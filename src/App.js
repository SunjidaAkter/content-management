import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {
  const [contents,setContents]=useState([]);
  useEffect(()=>{
    fetch('contents.json')
    .then(res=>res.json())
    .then(data=>setContents(data))
  },[])
  const state = useSelector((state)=>state)
  console.log(state);
  return (
    <div className="App">
     <p className='text-4xl p-10'>HELLO</p>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
      {
        contents.map(content=>(
          <Card key={content.id} content={content}></Card>
        ))
      }
     </div>
     
    </div>
  );
}

export default App;
