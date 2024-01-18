import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import { data } from './data'
const Birthdays = () => {
   const [info,setInfo] = useState(data);
  const removeData =(id) => {
   const newData = info.filter((items) =>{
      return(items.id !== id)
   })
   setInfo(newData)
  }
    return (
    <>
    <div className="container col-lg-7 mx-auto shadow mt-5 p-3 bg-light">
    <h1 className={`text-center display-4 ${info.length === 0 ? 'text-danger' : 'text-success' }`}style={{fontWeight:'bold'}} >{info.length} birthdays today</h1>
    <div className="container"> 
    {info.map((item) =>{
      return(<SingleBirthday key={item.id} {...item} remove={removeData}/>)
    })}
    </div>
    <button onClick={info.length === 0 ? ()=>setInfo(data) : ()=>setInfo([])} className={`btn ${info.length === 0 ? 'btn-success' : 'btn-danger'}`} style={{display:'block',margin:'auto'}}>{info.length === 0 ? 'Refresh All' : 'Remove All'}</button>
    </div>
    
    
    
    </>
  )
}

export default Birthdays