import React from "react"
import Item from './Item'
import Cart from './Cart'
import Checkout from "./Checkout"
import Category from "./Category"
import Receipt from './Receipt'


const Registry = ({BASE_URL,registry, checkout, setCheckout, category, setCategory, selectedItem, setSelectedItem, receipt, setReceipt }) => {
  
  const addToCheckout = (e, id) => {
    setCheckout((currentCheckout) => {return [...currentCheckout, id]})
  }

  const removeFromCheckout = (e, id) => {
    setCheckout((currentCheckout) => {

    })
  }
  
  return (
  <div className="registry">

  </div>)
}

export default Registry