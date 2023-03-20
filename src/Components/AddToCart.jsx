import React,{ useContext } from 'react'
import { connect } from 'react-redux';
import CartContext from '../Context.js/CartContext'; 

function AddToCart(props) {
  const { cartItems, addToCart } = useContext(CartContext);
//   const addToCart = item => {
//      props.dispatch({ type: 'ADD_TO_CART', payload: item }); }
     
  return (
    <div className='addTo'>AddToCart</div>
  )
}

export default connect()(AddToCart)