import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage'



/*import CartContext from './Context/CartContext'*/


function App() {
  
  return (
    // <Link to='/'>
    //   <LoginPage/>
    // </Link>
   
  <Routes>
     <Route path="/" element={<LoginPage/>} />
     <Route path="/Home" element={<HomePage/>} />
  </Routes>
    
  );
}

export default App;
