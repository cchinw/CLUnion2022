import React from 'react'

const Item = ({ item, addToCheckout, removeFromCheckout }) => {

  
    
  return (
    <div className='Item'>
      <div className="itemName" >
        <img src={item.image} alt='food-image-picture'/>
        <h3>{item.title}</h3>
        <h5>{item.description}</h5>
        <h5>{item.price}</h5>
        <h6>{item.quantityNeeded}</h6>
        <button onClick={item.addToCheckout}>Add to Cart</button>
        <button onClick={item.removeFromCheckout}>Remove from Cart</button>
      </div>
    </div>
  )
}

export default Item
