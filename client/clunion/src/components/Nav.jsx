import { Link} from 'react-router-dom'
import React from "react"
import '../style/App.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CategoryPage from '../pages/CategoryPage'

const Nav = ({category}) => {

return (
    <header className='navbar'>
      <nav>
        <div>
          <h1 className='logo'>Chinwendu x Lekan</h1>
        </div>
        <div className='navigationLinks'>
          <input type="checkbox" id="hamburger_icon" />
          <label for="hamburger_icon" class="hamburger">&#9776;</label>
          <div className='nav-menu'>
          <Link to='/'>Home</Link>
          <Link to='/faq'>FAQ</Link>
          <Link to='/category'>Registry</Link>
          <Link to='/message'>Leave a Message</Link>
          <div className='nav-menu'>
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
        </div>
        
      </nav>
    </header>

      )
}

export default Nav