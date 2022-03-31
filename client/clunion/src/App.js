import React, { useState } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from '../src/components/Nav'
import Faq from './pages/Faq'
import Home from '../src/pages/Home'
import Checkout from './components/Checkout'
import Registry from './components/Registry'
import '../src/style/App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/checkout/:regid" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
