
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<h1>Product Components</h1>}/>
        <Route path='/add' element={<h1>Add Components</h1>}/>
        <Route path='/update' element={<h1>Update Components</h1>}/>
        <Route path='/logout' element={<h1>Logout Components</h1>}/>
        <Route path='/profile' element={<h1>Profile Components</h1>}/>

      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
