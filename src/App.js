import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage'
import { Provider } from 'react-redux';
import store from './Redux/store';


/*import CartContext from './Context/CartContext'*/


function App() {
  
  return (
    // <Link to='/'>
    //   <LoginPage/>
    // </Link>
      <Routes>
        <Route path="/gamestore" element={<LoginPage/>} />
        <Route path="/gamestore/Home" element={<HomePage/>} />
      </Routes>
   
 
  );
}

export default App;
