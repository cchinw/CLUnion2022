import React from "react"
import Item from './Item'
import Checkout from "./Checkout"
import Receipt from './Receipt'
import axios from "axios"


const Registry = ({BASE_URL, registry, checkout, setCheckout, category, items, selectedItem, setSelectedItem, receipt }) => {

  const addToCheckout = (e, id) => {
    setCheckout((currentCheckout) => {return [...currentCheckout, id]})
  }

  const removeFromCheckout = (e, id) => {
    setCheckout((currentCheckout) => {
      let items = currentCheckout
      for (let i=0; i<items.length; i++) {
        if (items[i] === id) {
          items.splice(i, 1)
          break
        }
      }
      return [...items]
    })
  }

  const checkoutItems = async () => {
    const response = await axios.post(`${BASE_URL}/checkout/:regid`)
    setSelectedItem(true)
  }

const page = () => {
  if (selectedItem) {
  <Checkout checkoutId={checkout._id} items={items} price={items.price} />
  } else if (selectedItem && items > 1) {
    <Receipt receiptId={receipt._id} price={items.price} items={items} checkout={checkout} />
  } else {
    <div className="registryComponent">
      <div className="registryInfo">
        <h1>{registry.title}</h1>
        <p>Thank you so much for your kind gift. We really appreciate you! Love, Chinwendu and Lekan</p>
        <img src={items.image} alt='item-images'/>
      </div>
      <div className="registryItems">
        <h2>Categories</h2>
          {items.map((item) => {
            (<Item BASE_URL={BASE_URL} item={item} className='item' key={item._id} onClickAdd={addToCheckout} onClickRemove={removeFromCheckout} />)
          })}
      </div>
      <section className="checkout">
        <Checkout onClick={checkoutItems} checkout={checkout} />
      </section>
    </div>
  }
}

  
  return (
  <div className="registry">
    page()
  </div>)
}

export default Registry