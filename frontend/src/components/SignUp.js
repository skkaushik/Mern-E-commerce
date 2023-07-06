import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from'react-router-dom';

function SignUp() {
  const [name,setName]=useState('');
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [age,setAge]=useState("")
  // const[user,setUser]=useState({
  //   name:"",
  //   email:"",
  //   password:"",
  //   age:
  // })
  const navigate=useNavigate();

  const collectData=async ()=>{

    
    console.log(name,email,password,age)
    // let result = await fetch('http://localhost:5000/register',{
    //  methdo:'POST',
    //  body:JSON.stringify({name,email,password,age}),
    //  headers:{
    //   'Content-Type':'application/json'
    //  },
    // });
    // result=await result.json();
    // console.log(result);
    axios.post("http://localhost:5000/register",{name,email,password,age})
    .then((res)=>{
      console.log(res.data);
      navigate("/")
    
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