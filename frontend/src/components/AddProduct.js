import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const[name,setName]=React.useState('');
    const[price,setPrice]=React.useState('');
    const[category,setCategory]=React.useState('');
    const[company,setCompany]=React.useState('');
    const [err,setErr]=React.useState(false);

    const addProduct=async()=>{

         if(!name || !price || !category ||!company){
          setErr(true);
          return false;
         }



        console.log(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        axios.post('http://localhost:5000/add-product',{name,price,category,userId,company})
        .then((res)=>{
            console.log(res.data)
        })

    }
  return (
    <div className='add-product'>
        <h1>Add Product</h1>
        <input type='text' className='input-box' placeholder='Product Name'
        value={name} onChange={(e)=>{setName(e.target.value)}}
        />
       {err && !name && <span className='invalid'>this field is required!</span>}

        <input type='text' className='input-box' placeholder='Product Price'
        value={price} onChange={(e)=>{setPrice(e.target.value)}}
        />
        {err && !price && <span className='invalid'>this field is required! </span>}

        <input type='text'className='input-box'  placeholder='Product Category '
        value={category} onChange={(e)=>{setCategory(e.target.value)}}
        />
        {err && !category && <span className='invalid'>this field is required!</span>}

        <input type='text'className='input-box'  placeholder='Comapny Name'
        value={company} onChange={(e)=>{setCompany(e.target.value)}}
        />
        {err && !company && <span className='invalid'>this field is required!</span>}

        <button className='add-btn' onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct