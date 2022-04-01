import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Item from '../components/Item'
import Checkout from './Checkout'
import Receipt from './Receipt'
import '../style/App.css'


const Category = ({item}) => {
  const {regId} = useParams()
  const [categoryItems, setCategoryItems] = useState([])
  const [receipt, setReceipt] = useState({})
  const [selectedItem, setSelectedItem] = useState(false)
  const [checkout, setCheckout] = useState([])
  const [items, setItems] = useState([])
  const BASE_URL = 'http://localhost:3001/api'


  useEffect(() => {
    let isCancelled = false
    const getItemsByCategoryId = async () => {
      const response = await axios.get(`http://localhost:3001/api/category/${regId}/items`)
      if (!isCancelled) {
        setCategoryItems(response.data)
        console.log(response.data)
      }
    } 
    getItemsByCategoryId()
    return() => {
      isCancelled = true
    }
  }, [])

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
  
  useEffect(() => {
    const checkoutItems = async () => {
      const response = await axios.post(`http://localhost:3001/api//checkout/${regId}`)
      setCheckout(response.data)
      setSelectedItem(true)
    }
    checkoutItems()
  } ,[])


 const checkoutCondition = () => {
  if (selectedItem) {
      <Checkout checkoutId={checkout._id} items={items} price={items.price} />
  }else if (selectedItem && items > 1) {
      <Receipt receiptId={receipt._id} price={items.price} items={items} checkout={checkout} />
    } else {
      <div className="registryComponent">
        <div className="registryInfo">
          <h1>{items.title}</h1>
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
          <Checkout onClick={setSelectedItem} checkout={checkout} />
        </section>
      </div>
  }
 }
 

  return (
    <div className='registry-display'>
        {categoryItems.map((items) => (
            <Item
            items={items}
            addToCheckout={addToCheckout}
            removeFromCheckout={removeFromCheckout}
            checkoutCondition={checkoutCondition}
            />
        ))}
    </div>
    )
}

export default Category