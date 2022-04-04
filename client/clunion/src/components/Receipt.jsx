import React from 'react'
import Checkout from '../components/Checkout'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../style/App.css'

const Receipt = ({checkout, item, category}) => {

  const [receipt, setReceipt] = useState({})

  useEffect(() => {
    const saveReceipt = async () => {
      console.log(receipt, "AXIOS RECEIPT")
      const response = await axios.post(`http:localhost:3001/api/receipt`)
        console.log(response, 'RECEIPT POST')
        setReceipt(response.data)
        console.log(response.data)
    }
    saveReceipt()
  }, [])
  
  let items = checkout.sort()
  let total = 0

  let data = []

  const getItems = (id) => {
    let result = {}
    item.forEach(el => {
      if (el._id === id) {
        console.log(el, 'RIGHT ITEM')
        result = el
        return
      }
    })
    return result
  }
  console.log(getItems("62461c776d61e9345ae67f03"), 'RETURN ITEM')

  const getItemDetails = () => {
    for (let i=0; i<items.length; i++) {
      if (i = 0) {
        data.push({...getItems(items[i]), count: 1})
      } else if (items[i] === items[i-1]) {
        data[data.length - 1].count++
      } else {
        data.push({...getItems(items[i]), count: 1})
      }
    }
  }
  getItemDetails()
  console.log(data, 'ITEM DETAILS')

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <h3>Here is your receipt!</h3>
      <div>
        <h2>Receipt Summary</h2>
        {data.map((item) => {
          total += item.price * item.itemsLeft
          return(`Thank you for your order! You have purchased ${item.itemsLeft} of ${item.title} for ${item.price}`)
        })}
      </div>
    </div>
  )
}

export default Receipt