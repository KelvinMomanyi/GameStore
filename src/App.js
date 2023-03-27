
import './App.css';
import LoginPage from './Components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage'

// import store from './Redux/store';


/*import CartContext from './Context/CartContext'*/


function App() {
  
  return (
   
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Home" element={<HomePage/>} />
      </Routes>
   
 
  );
}

export default App;
