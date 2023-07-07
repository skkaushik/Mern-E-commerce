import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const[products,setProducts]=useState([]);

   
  const fetchInfo = async() => {
    return axios.get("http://localhost:5000/products").then((res) => setProducts(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const deleteProduct=async(id)=>{
    console.log(id)
    let result = await fetch(`http://localhost:5000/product/${id}`,{
        method:"Delete"
    });
    result=await result.json() ;
    if(result){
        fetchInfo();
    }
    

  }

  
  return (
    <div className='product-list'>


<h3>Product List </h3>
      
      <table className='table'>
                    <tr>
                    <th> S.No</th>
                    <th> Name</th>
                    <th>Category</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Delete</th>
                    
                    </tr>
                
        {products.map((data, index) => {
          
          return (
            <tr>
                <td>{index+1}</td>
                <td>{data.name}</td>
                
                <td>{data.category}</td>
                <td>{data.company}</td>
                <td>{data.price}</td>
                <td><button onClick={()=>deleteProduct(data._id)}>Delete</button></td>

               
            </tr>
            
                
              
            
          );
        })}
        </table>
      
    


    </div>
  )
    }

export default ProductList