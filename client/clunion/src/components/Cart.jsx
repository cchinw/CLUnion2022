import React from 'react'
import Checkout from './Checkout'

const Cart = ({ Checkout, onClick }) => {

  return (
    <div>
      <h1>Cart</h1>
      <h3>{Checkout.items} Items</h3>
      <button onClick={onClick}>Checkout</button>
    </div>
  )
}

export default Cart