import React, { useState } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router'
import Nav from '../src/components/Nav'
import Home from '../src/pages/Home'
import Checkout from './components/Checkout'
// import Receipt from './components/Receipt'
import Registry from './components/Registry'
import '../src/style/App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/checkout/:regid" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
