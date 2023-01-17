import '../../App.css';
import Card from '../Card';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { XyzTransition } from '@animxyz/react'
import Card2 from '../Shared/Card2';
import '@animxyz/core';

function Home() {
  
  const [contents,setContents]=useState([]);
  useEffect(()=>{
    fetch('contents.json')
    .then(res=>res.json())
    .then(data=>setContents(data))
  },[])
  const state = useSelector((state)=>state)
  console.log(state);
  return (
    <div className="App px-12 pb-5">
     <p className='text-4xl p-[200px]'>HELLO</p>
     <p className='text-4xl pt-[20px] pb-[60px]'>
      Contents
     </p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
          {
            contents.map(content=>(
              <Card key={content.id} content={content}></Card>
            ))
          }
        </div>
     
     <p className='text-4xl pt-[20px] pb-[60px]'>
      Contents
     </p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
          {
            contents.map(content=>(
              <Card2 key={content.id} content={content}></Card2>
            ))
          }
        </div>
     
       
       <p>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
       </p>
       <p>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
       </p>
       <p>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
       </p>
     
    </div>
  );
}

export default Home;
