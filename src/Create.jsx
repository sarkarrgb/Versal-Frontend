import React, { useState } from 'react';
import axios from 'axios'


const Create = () => {
const [task ,setTask]=useState()
const BASE_URL = "https://versal-backend-i8ax.onrender.com";

const handleAdd =()=>{
 axios.post(`${BASE_URL}/add`,{task:task})
 .then(result => {
    location.reload()
 })
 .catch(err =>console.log(err))
}
  return (
    <div className="Create_from">
      <input type="text" placeholder='Task' onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
}; 

export default Create;
