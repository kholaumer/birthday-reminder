import React from 'react'
import { data } from './data'
const SingleBirthday = ({ id ,name,age,image,remove}) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
    <div className="right d-flex gap-3 align-items-center">
    <div className="image ">
        <img className='pic' width="60px" style={{height:'60px', borderRadius:'50%'}} src={image} alt="" />
    </div>
   <div className="info">
    <h4>{name}</h4>
    <p>{age} years</p>
   </div>
   </div>
   <div className="left">
    <button onClick={() => remove(id)} className="btn btn-danger">Remove</button>
   </div>
    </div>

  )
}

export default SingleBirthday