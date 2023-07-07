import React from 'react';
// import axios from 'axios';

function UpdateProduct() {
    const[name,setName]=React.useState('');
    const[price,setPrice]=React.useState('');
    const[category,setCategory]=React.useState('');
    const[company,setCompany]=React.useState('');
    // const [err,setErr]=React.useState(false);

    const updateProduct=async()=>{
      console.log("update is done")
      console.log(name,price,category,company)

         

    }
  return (
    <div className='update-product'>
      
        <h1>Update Product</h1>
        <input type='text' className='input-box' placeholder='Product Name'
        value={name} onChange={(e)=>{setName(e.target.value)}}
        />
       {/* {err && !name && <span className='invalid'>this field is required!</span>} */}

        <input type='text' className='input-box' placeholder='Product Price'
        value={price} onChange={(e)=>{setPrice(e.target.value)}}
        />
        {/* {err && !price && <span className='invalid'>this field is required! </span>} */}

        <input type='text'className='input-box'  placeholder='Product Category '
        value={category} onChange={(e)=>{setCategory(e.target.value)}}
        />
        {/* {err && !category && <span className='invalid'>this field is required!</span>} */}

        <input type='text'className='input-box'  placeholder='Comapny Name'
        value={company} onChange={(e)=>{setCompany(e.target.value)}}
        />
        {/* {err && !company && <span className='invalid'>this field is required!</span>} */}

        <button className='up-btn' onClick={updateProduct}>Update</button>
    </div>
  )
}

export default UpdateProduct