
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Profile from './components/Profile';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route  element={<PrivateComponent/>}>
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/> 
         <Route path='/profile' element={<Profile/>}/>
        </Route>

        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Login/>}/>

      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
