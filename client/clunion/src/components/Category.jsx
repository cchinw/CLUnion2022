import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../components/Item'


const Category = (props) => {
  const {regId} = useParams()
  const [categoryItems, setCategoryItems] = useState([])

  useEffect(() => {
    let isCancelled = false
    const getItemsByCategoryId = async () => {
      const response = await axios.get(`http://localhost:3001/api/category/${regId}/items`)
      if (!isCancelled) {
        setCategoryItems(response.data)
        console.log(response.data)
      }
    } 
    getItemsByCategoryId()
    return() => {
      isCancelled = true
    }
  }, [])

  return (
    <div className='selectCategoryItems'>
      <button>
        {categoryItems.map((item) => (
            <Item
            item={item}
            />
        ))}
      </button>
      {/* <button></button>
      <button></button>
      <button></button> */}
    </div>
    )
}

export default Category