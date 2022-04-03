import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import Category from '../components/Category'
import '../style/App.css'

const CategoryPage = () => {
  const BASE_URL = 'http://localhost:3001/api'
  const [category, setCategory] = useState([])
  const [receipt, setReceipt] = useState({})
  const [selected, setSelected] = useState(false)
  const [checkout, setCheckout] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    if (!selected) {
      const getCategory = async () => {
        const response = await axios.get(`${BASE_URL}/registry`)
        console.log(response, 'CATEGORY THAT WORKS')
        setCategory(response.data)
        console.log(response.data)
      }
      getCategory()
    } else if (selected) {
      const getReceipt = async () => {
        const response = await axios.get(`${BASE_URL}/receipts/:rId`)
        setReceipt(response)
      }
      getReceipt()
      // } else {
      //   return () => {
      //     selected = true
      //   }
    }
  }, [])

  return (
    <div className="container">
      {category.map((cat) => (
        <Link to={`/registry/${cat.category}`} key={cat._id}>
          <div className="card">
            <img src={cat.image} />
            <button className="card">{cat.title}</button>
          </div>
        </Link>
      ))}
      <Category
        receipt={receipt}
        setReceipt={setReceipt}
        selected={selected}
        setSelected={setSelected}
        checkout={checkout}
        setCheckout={setCheckout}
        items={items}
        setItems={setItems}
        category={category}
        setCategory={setCategory}
      />
    </div>
  )
}

export default CategoryPage
