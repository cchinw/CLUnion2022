import { Link} from 'react-router-dom'
// import { useState} from 'react'
import React from "react"
import '../style/App.css'
// import Home from '../pages/Home'
// import Faq from '../pages/Faq'
// import Guestbook from '../pages/Guestbook'
// import OurStory from './OurStory'
// import Photos from './Photos'
// import ToDo from './ToDo'
// import Travel from './Travel'
// import WeddingParty from './WeddingParty'
// import Registry from './Registry'

const Nav = (props) => {

      return (
        <div>
          <Link to='/ourstory' ></Link>
          <Link to='/photos' >Photos</Link>
          <Link to='/todo' >To Do in Lagos</Link>
          <Link to='/travel' >Travel Arrangements</Link>
          <Link to='/weddingparty' >Wedding Party</Link>
          <Link to='/registry' >Registry</Link>
        </div>
      )
}

export default Nav