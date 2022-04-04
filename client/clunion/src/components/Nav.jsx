import { Link} from 'react-router-dom'
import React from "react"
import '../style/App.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CategoryPage from '../pages/CategoryPage'

const Nav = ({category}) => {

return (

      <nav className='navbar'>
        <div className='logo'>Chinwendu x Lekan</div>
        <ul className='navigationLinks'>
          <input type="checkbox" id="hamburger_icon" />
          <label for="hamburger_icon" class="hamburger">&#9776;</label>
          <div className='nav-menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
            <li><Link to='/category'>Registry</Link></li>
            <li><Link to='/message'>Leave a Message</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
        </div>
        </ul>  
      </nav>

      )
}

export default Nav