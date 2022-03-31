import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Registry from './Registry'


const Category = (props) => {
  const [category, setCategory] = useState([])

  useEffect( async () => {
 await axios.get(`${props.BASE_URL}/category/${props.id}`)
  }, [])

  return (
    <div className='selectCategory'>
      <button>
        {category.map((cat) => (
          <Registry
            cat={cat}
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