import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '../src/components/Nav'
import Home from '../src/pages/Home'
import Faq from '../src/pages/Faq'
import Guestbook from '../src/pages/Guestbook'
import '../src/style/App.css'

function App() {
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
