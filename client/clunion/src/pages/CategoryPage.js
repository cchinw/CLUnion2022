import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Category from '../components/Category'
import App from '../style/App.css'

const CategoryPage = () => {
  const BASE_URL = 'http://localhost:3001/api'
  const [category, setCategory] = useState([])
  const [title, setTitle] = useState('')

  let { id } = useParams()

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(`${BASE_URL}/category/${id}`)
      console.log(response, 'CATEGORY THAT WORKS')
      setTitle(response.data)
    }
    getCategory()
  }, [])

  return (
    <div className="categoryPage">
      {title.map((cat) => (
        <Category id={cat.id} title={cat.title} BASE_URL={BASE_URL} />
      ))}
    </div>
  )
}

export default CategoryPage
