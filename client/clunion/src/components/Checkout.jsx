import React from "react"
import { useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import axios from "axios"
import Receipt from "./Receipt"

const Checkout = ({category}) => {

  const location = useLocation()
  let navigate = useNavigate()
  let { id } = useParams()

  const [giftMessage, setGiftMessage] = useState('')
  const [email, setEmail] = useState('')
  const [paymentDetails, setPaymentDetails] = useState(0)
  const [name, setName] = useState('')
  const [address, setAddress] =useState('')
  const [phoneNumber, setPhoneNumber] = useState(0)
  const [reservedStatus, setReservedStatus] = useState(true)



  const saveGiftMessage = (e) => {
    setGiftMessage(e.target.value)
  }

  const saveEmail= (e) => {
    setEmail(e.target.value)
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

  const saveReservedStatus = () => {
    setReservedStatus(true)
  }

  const postCheckout = () => {
    const data = {
      giftMessage: giftMessage,
      email: email,
      paymentDetails: paymentDetails,
      name: name,
      address: address,
      phoneNumber: phoneNumber,
      category: category,
      reservedStatus: reservedStatus
    }
    console.log(data, 'CHECKOUT DATA')
    const saveCheckout = async () => {
      await axios.post(`http://localhost:3001/api/checkout/`, data).then(function (response) {
        console.log(response, 'AXIOS POST FOR CHECKOUT')
      }).catch(function (error) {
        console.log(error)
      })
    }
    saveCheckout()
    navigate(location.pathname)
  }

  const openReceipt = () => {
    <Link>
      <Receipt />
    </Link>
  }

  return (
    <div className="checkout">
      <h1>Checkout Your items Here</h1>
      <form onChange={postCheckout} onSubmit={openReceipt}>
        <textarea type='text' placeholder="Message?" value={giftMessage} onChange={saveGiftMessage}></textarea>
        <input type='text' placeholder="Email" value={email} onChange={saveEmail}></input>
        <input type='number' placeholder="Payment Details" value={paymentDetails} onChange={savePaymentDetails}></input>
        <input type='text' placeholder="Name" value={name} onChange={saveName}></input>
        <input type='text' placeholder="Address" value={address} onChange={saveAddress}></input>
        <input type='number' placeholder="Phone Number" value={phoneNumber} onChange={savePhoneNumber}></input>
        <button>Confirm Payment</button>
      </form>
    </div>
  )
}

export default Checkout