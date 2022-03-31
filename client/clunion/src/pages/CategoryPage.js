import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import Category from '../components/Category'
import App from '../style/App.css'

const CategoryPage = () => {
  const BASE_URL = 'http://localhost:3001/api'
  const [category, setCategory] = useState([])
  const [title, setTitle] = useState('')

  let { id } = useParams()

  useEffect(() => {
    let isCancelled = false
    const getCategory = async () => {
      const response = await axios.get(`${BASE_URL}/category/${id}`)
      console.log(response, 'CATEGORY THAT WORKS')
      if (!isCancelled) {
        setTitle(response.data)
      }
    }
    getCategory()
    return () => {
      isCancelled = true
    }
  }, [id])

  return (
    <div className="categoryPage">
      {title.map((cat) => (
        <Link to={`/category/${cat.id}`} key={cat.id}>
          <Category {...cat} title={cat.title} BASE_URL={BASE_URL} />
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage
