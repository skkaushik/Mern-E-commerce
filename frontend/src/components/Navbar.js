import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <ul className='nav-ul'>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
           <li> <Link to="/Logout">Logout</Link></li>
           <li><Link to="/profile">Profile</Link></li>
                
            
        </ul>
    </div>
  )
}

export default Navbar