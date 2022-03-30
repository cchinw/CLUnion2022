import React from "react"
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Checkout = ({regId}) => {

  let navigate = useNavigate()

  const [totalCost, useTotalCost] = useState(0)
  const [giftMessage, useGiftMessage] = useState('')
  const [email, useEmail] = useState('')
  const [paymentDetails, usePaymentDetails] = useState('')
  const [name, useName] = useState('')
  const [address, useAddress] = useState('')
  const [phoneNumber, usePhoneNumber] = useState(0)
  const [reservedStatus, useReservedStatus] = useState(true)

  const calculateTotal = (e)

  return (
    <div>

    </div>
  )
}

export default Checkout