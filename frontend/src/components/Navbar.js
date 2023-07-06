import React from 'react'
import {Link} from 'react-router-dom';
import SignUp from './SignUp';


function Navbar() {
  return (
    <div>
        <ul className='nav-ul'>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
           <li> <Link to="/Logout">Logout</Link></li>
           <li><Link to="/profile">Profile</Link></li>
           <li><Link to="/signup">SignUp</Link></li>
                
            
        </ul>
    </div>
  )
}

export default Navbar