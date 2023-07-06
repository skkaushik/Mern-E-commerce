
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route  element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Product Components</h1>}/>
        <Route path='/add' element={<h1>Add Components</h1>}/>
        <Route path='/update' element={<h1>Update Components</h1>}/>
        <Route path='/logout' element={<h1>Logout Components</h1>}/>
        <Route path='/profile' element={<h1>Profile Components</h1>}/>
        </Route>

        <Route path='/signup' element={<SignUp/>}/>

      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
