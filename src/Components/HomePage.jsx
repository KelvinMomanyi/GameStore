import React from 'react'
import { MediaQuery } from 'react-responsive'
import { useState } from 'react';
import CartContext from '../Context.js/CartContext';
import SideBar from './SideBar'
import SearchBar from './SearchBar'
import Social from './Social'
import MainUi from './MainUi'
import List from './List'
import Breather from './Breather'
import Breather2 from './Breather2'
import Profile from './Profile'
import Profiles from './Profiles'
import Icons from './Icons'
import Logo from './Logo'
import DropdownMenu from './Dropddown'
import Footer from './Footer';
import ProfList from './ProfList';
import AddToCart from './AddToCart';


function HomePage() {
    const [isHovering, setIsHovering] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    };
  return (
    <div className='App'>
      <SideBar/>
      <SearchBar/>
      <ProfList/>
      <Social/> 
     
        <MainUi/>
        <List/>  
    
      {/* <Breather/>
      <Breather2/> */}
      
        {/* <AddToCart/> */}
    
      <Profile/>
      <Icons/>
      <Logo/>
      <DropdownMenu/>
      <Footer/>
    </div>
  )
}

export default HomePage