import { NavLink } from 'react-router-dom'
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
          <li><NavLink exact activeClassName="homeLink" to='/'>Home</NavLink></li>
          <li><NavLink activeClassName="faqLink" to='/faq'>FAQs</NavLink></li>
          <li><NavLink activeClassName="guestbookLink" to='/guestbook/:gbid'>Guest Signout</NavLink></li>
          <li><NavLink activeClassName="ourStoryLink" to='/ourstory'>Our Story</NavLink></li>
          <li><NavLink activeClassName="photosLink" to='/photos'>Photos</NavLink></li>
          <li><NavLink activeClassName="toDoLink" to='/todo'>To Do in Lagos</NavLink></li>
          <li><NavLink activeClassName="travelLink" to='/travel'>Travel Arrangements</NavLink></li>
          <li><NavLink activeClassName="weddingPartyLink" to='/weddingparty'>Wedding Party</NavLink></li>
          <li><NavLink activeClassName="registryLink" to='/registry'>Registry</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav