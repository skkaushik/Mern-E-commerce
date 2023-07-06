import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import SignUp from './SignUp';


function Navbar() {
  const auth=localStorage.getItem('user');
  const navigate=useNavigate();

  const logout=()=>{
    localStorage.clear();
  navigate('/signup')
    

  }
 
  
  return (
    <div>
        <ul className='nav-ul'>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>           
           <li><Link to="/profile">Profile</Link></li>
           <li>{auth?<li> <Link to="/signup" onClick={logout}>Logout</Link></li>:<Link to="/signup">SignUp</Link>}</li>
                
            
        </ul>
    </div>
  )
}

export default Navbar