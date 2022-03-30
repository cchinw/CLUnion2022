import { Link } from 'react-router-dom'
import React from "react"
import '../style/Nav.css'
import OurStory from './OurStory'
import Photos from './Photos'
import ToDo from './ToDo'
import Travel from './Travel'
import WeddingParty from './WeddingParty'

const Nav = () => {
  return (
    <header>
      <nav className='nav'>
        <ul className='navLinks'>
          {/* {props.children} */}
          <Link to='/'>Home</Link>
          <Link to='/faq'>FAQs</Link>
          <Link to='/guestbook/:gbid'>Guest Signout</Link>
          <Link to='/ourstory'>Our Story</Link>
          <Link to='/photos'>Photos</Link>
          <Link to='/todo'>To Do in Lagos</Link>
          <Link to='/travel'>Travel Arrangements</Link>
          <Link to='/weddingparty'>Wedding Party</Link>
          <Link to='/registry'>Registry</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Nav