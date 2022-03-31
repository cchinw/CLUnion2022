import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import Category from '../components/Category'
import App from '../style/App.css'

const CategoryPage = () => {
  const BASE_URL = 'http://localhost:3001/api'
  const [category, setCategory] = useState([])

  useEffect(() => {
    let isSelected = false
    const getCategory = async () => {
      const response = await axios.get(`${BASE_URL}/registry`)
      console.log(response, 'CATEGORY THAT WORKS')
      if (!isSelected) {
        setCategory(response.data)
        console.log(response.data)
      }
    }
    getCategory()
    return () => {
      isSelected = true
    }
  }, [])

  return (
    <div className="categoryPage">
      {category.map((cat) => (
        <Link to={`/registry/${cat.category}`} key={cat._id}>
          <div>
            <h2>{cat.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage
