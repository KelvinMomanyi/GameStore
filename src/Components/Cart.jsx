import React,{useState} from 'react'
/*import {CartContext} from '../Context/CartContext'*/
import { connect } from 'react-redux';


function Cart() {
  const[cart, setCart]=useState(false)
  /*const context = useContext(CartContext)*/
  const removeFromCart = id => {
    props.dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  }

  return (
    <div className='cart'>
      
      
      Cart</div>

  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Cart);