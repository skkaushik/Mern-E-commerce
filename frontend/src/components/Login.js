import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate=useNavigate();
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/');
        }

    })
    const handleLogin=async()=>{
        // console.log(email,password)
        axios.post('http://localhost:5000/login',{email,password})
        .then((res)=>{
            console.log(res.data)
            if(res.data.name){
                localStorage.setItem('user',JSON.stringify(res.data));
                navigate('/');

            }else{
                alert("Pls enter vaild email")
            }
        })

    }
  return (
    <div className='login'>
        <input type='email'className='input-box'value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
        <input type='password'className='input-box'value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
        <button className='login-btn' onClick={handleLogin} >Sign In</button>

    </div>
  )
}

export default Login