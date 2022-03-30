import React from "react"
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Checkout from './Checkout'

const CheckoutHandler = ({regId}) => {

  let navigate = useNavigate()

  const [totalCost, setTotalCost] = useState(0)
  const [giftMessage, setGiftMessage] = useState('')
  const [input, setInput] = useState('')
  const [email, useEmail] = useState('')
  const [paymentDetails, setPaymentDetails] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(0)
  const [reservedStatus, setReservedStatus] = useState(true)

  const saveGiftMessage = (e) => {
    setGiftMessage(e.target.value)
  }

  const saveEmail = (e) => {
    useEmail(e.target.value)
  }

  const savePaymentDetails = (e) => {
    setPaymentDetails(e.target.value)
  }

  const saveName = (e) => {
    setName(e.target.value)
  }

  const saveAddress = (e) => {
    setAddress(e.target.value)
  }

  const savePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  const addGiftMessage = () => {
    let newGiftMessage = ''
    setGiftMessage(newGiftMessage)
    setInput('')
  }

  const deleteGiftMessage = (index) => {
    let deleteMessage = giftMessage
    deleteMessage.slice(index)
    setGiftMessage(deleteMessage)
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const postCheckout = () => {
    const data = {
      giftMessage: giftMessage,
      email: email,
      paymentDetails: paymentDetails,
      name: name,
      address: address,
      phoneNumber: phoneNumber,
      category: regId,
      reservedStatus: reservedStatus
    }
    console.log(data)
  }

  return (
    <div className="checkoutHandler">
      <Checkout />
    </div>
  )
}

export default CheckoutHandler