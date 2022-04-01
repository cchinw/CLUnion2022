import React from 'react'

const Item = ({ items, addOnClick, removeOnClick }) => {

  
    
  return (
    <div className='Item'>
      <div className="itemName" >
        <img src={items.image} alt='registry-item-pic'/>
        <h3>{items.title}</h3>
        <h5>{items.description}</h5>
        <h5>{items.price}</h5>
        <h6>{items.quantityNeeded}</h6>
        <button onClick={(e) => addOnClick(e, items._id)}>Add to Cart</button>
        <button onClick={(e) => removeOnClick(e, items._id)}>Remove from Cart</button>
      </div>
    </div>
  )
}

export default Item
