import React, { useState } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router'
import Nav from '../src/components/Nav'
import Home from '../src/pages/Home'
import Faq from '../src/pages/Faq'
import Guestbook from '../src/pages/Guestbook'
import Checkout from './components/Checkout'
// import Receipt from './components/Receipt'
// import Registry from './components/Registry'
import '../src/style/App.css'

function App() {
  // let navigate = useNavigate()
  // const location = useLocation()

  // // const [checkout, setCheckout] = useState(Checkout)
  // const [newCheckout, setNewCheckout] = useState({
  //   id: '',
  //   giftMessage: '',
  //   email: '',
  //   paymentDetails: '',
  //   name: '',
  //   address: '',
  //   phoneNumber: '',
  //   category: [],
  //   reservedStatus: true
  // })

  // const saveCheckout = async () => {
  //   await axios
  //     .post(`http://localhost:3001/api/checkout/regId`, newCheckout)
  //     .then(function(response) {
  //       console.log(response)
  //     })
  //     .catch(function(error) {
  //       console.log(error)
  //     })
  // }
  // saveCheckout()
  // navigate(location.pathname)

  // const addCheckout = e => {
  //   e.preventDefault()
  //   const currentCheckout = checkout
  //   const createdCheckout = {
  //     ...newCheckout,
  //     id: Registry.regId,
  //     category: [Registry.category]
  //   }
  //   currentCheckout.push(createdCheckout)
  //   setCheckout(currentCheckout)
  //   setNewCheckout(saveCheckout)
  // }

  // const handleChange = e => {
  //   setNewCheckout({ ...newCheckout, [e.target.name]: e.target.value })
  // }
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/guestbook/:gbid" element={<Guestbook />} />
          <Route path="/checkout/:regid" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
