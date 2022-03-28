import { Link } from 'react-router-dom'
import React from "react"
import '../style/App.css'

const Nav = () => {
  return (
    <header>
      <nav>
        <div>
          <h1 className='heading'>Chinwendu x Lekan</h1>
        </div>
        <div className='Nav'>
          <Link to='/'>Home</Link>
          <Link to='/faq'>FAQs</Link>
          <Link to='/guestbook/:gid'>Guest Signout</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav