import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    const searchHandle = async (event)=>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json()
            if(result){
                setProducts(result)
            }
        }else{
            fetchInfo();
        }
        
    }

  
  return (
    <div className='product-list'>


<h3>Product List </h3>
<input type="" className='search-product-box' placeholder='Search Product'
            onChange={searchHandle}
             />
      
      <table className='table'>
                    <tr>
                    <th> S.No</th>
                    <th> Name</th>
                    <th>Category</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Delete</th>
                    
                    </tr>
                
        {
            products.length>0?
        products.map((data, index) => {
          
          return (
            <tr>
                <td>{index+1}</td>
                <td>{data.name}</td>
                
                <td>{data.category}</td>
                <td>{data.company}</td>
                <td>{data.price}</td>
                <td>
                    <button onClick={()=>deleteProduct(data._id)}>Delete</button>
                    <Link to={'/update/'+data._id}>Update</Link>
                </td>

               
            </tr>
            
                
              
            
          );
        })
        :<h3>No Result Found</h3>
        }
        </table>
      
    


    </div>
  )
    }

export default ProductList