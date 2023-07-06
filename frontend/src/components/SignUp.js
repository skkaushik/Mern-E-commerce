import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from'react-router-dom';

function SignUp() {
  const [name,setName]=useState('');
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [age,setAge]=useState("")

  const navigate=useNavigate();

  const collectData=async ()=>{

    
    console.log(name,email,password,age)
   
    axios.post("http://localhost:5000/register",{name,email,password,age})
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        alert("Yor have register successfully!")
      navigate("/")
      }
    
    }).catch(err=>console.log(err))
  }
  return (
    <div>
        <h1>Register</h1>
        
        <input type='text' className='input-box'value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name'/>
      
        <input type='email'className='input-box'value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
      
        <input type='password' className='input-box' value={password} onChange={(e)=>{setPassword(e.target.value)}}placeholder='Password'/>

        <input type='text' className='input-box'value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder='Age'/>

        <button className='signup-btn' onClick={collectData}>Sign UP</button>
    </div>
  )
}

export default SignUp