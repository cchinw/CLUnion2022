import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Registry from './Registry'


const Category = (props) => {
  const [categoryItems, setCategoryItems] = useState([])

  useEffect(() => {
    let isCancelled = false
    const getItemsByCategoryId = async () => {
      const response = await axios.get(`${props.BASE_URL}/category/${props.id}/items`)
      if (!isCancelled) {
        setCategoryItems(response.data)
      }
    } 
    getItemsByCategoryId()
    return() => {
      isCancelled = true
    }
  }, [props.id])

  return (
    <div className='selectCategoryItems'>
      <button>
        {categoryItems.map((items) => (
          <Registry
            items={items}
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