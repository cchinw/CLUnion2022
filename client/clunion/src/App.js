import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Nav from '../src/components/Nav'
import Home from '../src/pages/Home'
import Faq from '../src/pages/Faq'
import Guestbook from '../src/pages/Guestbook'
import Checkout from './components/Checkout'
import Receipt from './components/Receipt'
import Registry from './components/Registry'
import '../src/style/App.css'

function App() {
  let navigate = useNavigate()

  const saveCheckout = async () => {
    await axios
      .post(`http://localhost:3001/api/checkout/regId`, data)
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }
  saveCheckout()
  navigate(location.pathname)

  const [checkout, setCheckout] = useState(Receipt)
  const [newCheckout, setnewCheckout] = useState({
    id: '',
    giftMessage: '',
    email: '',
    paymentDetails: '',
    name: '',
    address: '',
    phoneNumber: '',
    category: '',
    reservedStatus: true
  })

  const addCheckout = e => {
    e.preventDefault()
    const currentCheckout = checkout
    const createdCheckout = {
      ...newCheckout,
      id: Registry.regId,
      category: Registry.category
    }
    currentCheckout.push(createdCheckout)
    setCheckout(currentCheckout)
    setnewCheckout(saveCheckout)
  }

  const handleChange = e => {
    setnewCheckout({ ...newCheckout, [e.target.name]: e.target.value })
  }
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route index path="/faq" element={<Faq />} />
          <Route index path="/guestbook/:gbid" element={<Guestbook />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
