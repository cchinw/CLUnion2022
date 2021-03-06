import '../style/App.css'
import React from 'react'

const Item = ({ items, buyNow, checkoutCondition, addToCheckout, removeFromCheckout}) => {

    
  return (
    <div className='card__details'>
      <div className="column" >
        <img src={items.image} alt='registry-item-pic'/>
        <h3 className='name'>{items.title}</h3>
        <h5>{items.description}</h5>
        <h5 className='name'>{items.price}</h5>
        <h6>{items.quantityNeeded}</h6>
        <button onClick={buyNow} onChange={items.checkoutCondition}>Buy Here</button>
      </div>
    </div>
  )
}

export default Item
