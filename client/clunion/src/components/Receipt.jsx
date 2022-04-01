import React from 'react'
import Checkout from '../components/Checkout'
import axios from 'axios'

const Receipt = ({checkout, item, category}) => {
  let data = []
  const receipt = {
    items: [...checkout],
    totalCost: data.reduce((total, items) => total += items.price * items.quantityNeeded, 0),
    date: Date,
    purchaseStatus: true,
    registry: 'regId'
  }

  const saveReceipt = async () => {
    console.log(receipt, "AXIOS RECEIPT")
    await axios.get(`http:localhost:3001/api/receipt`, receipt).then(function (response) {
      console.log(response)
    }).catch(function(error) {
      console.log(error)
    })
  }
  saveReceipt()

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <h3>Here is your receipt!</h3>
      <Checkout category={category}/>
    </div>
  )
}

export default Receipt