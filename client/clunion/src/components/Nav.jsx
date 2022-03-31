import { Link} from 'react-router-dom'
import React from "react"
import '../style/App.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Nav = () => {

  const BASE_URL = 'http://localhost:3001/api'
  const [category, setCategory] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(`${BASE_URL}/registry`)
      console.log(response, 'CATEGORY BY ID')
      setCategory(response.data[0].category)
      console.log(response.data[0].category)
    }
    getCategory()
  }, [])

  console.log(category)

return (
    <header>
      <nav>
        <div>
          <h1>Chinwendu x Lekan</h1>
        </div>
        <div className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/faq'>FAQ</Link>
          <Link to={`/category/${category}`}>Registry</Link>
          <div className='checkout'>
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
      </nav>
    </header>

      )
}

export default Nav