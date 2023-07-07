import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
// import SignUp from './SignUp';


function Navbar() {
  const auth=localStorage.getItem('user');
  const navigate=useNavigate();

  const logout=()=>{
    localStorage.clear();
  navigate('/signup')
    

  }
 
  
  return (
    <div>
      <img src='https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png'
      alt='Error'
      className='logo'

      />
      {auth? <ul className='nav-ul'>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update/:id">Update Product</Link></li>           
           <li><Link to="/profile">Profile</Link></li>
           
           <li> <Link to="/signup" onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>
           </ul>
           :
           <ul className='nav-ul right-ul'>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
           </ul>
}
    </div>
  )
}

export default Navbar