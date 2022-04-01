import { Link} from 'react-router-dom'
import React from "react"
import '../style/App.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CategoryPage from '../pages/CategoryPage'

const Nav = ({category}) => {

return (
    <header>
      <nav>
        <div>
          <h1 className='navheading'>Chinwendu x Lekan</h1>
        </div>
        <div className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/faq'>FAQ</Link>
          <Link to='/category'>Registry</Link>
          <Link to='/message'>Leave a Message</Link>
          <div className='checkout'>
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
      </nav>
    </header>

      )
}

export default Nav