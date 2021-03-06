import React, { useState } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from '../src/components/Nav'
import Faq from './pages/Faq'
import Home from '../src/pages/Home'
import Checkout from './components/Checkout'
import CategoryPage from './pages/CategoryPage'
import Category from './components/Category'
import Message from './pages/Message'
import '../src/style/App.css'
import Receipt from './components/Receipt'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/registry/:regId" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/message" element={<Message />} />
          <Route path="/receipt" element={<Receipt />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
