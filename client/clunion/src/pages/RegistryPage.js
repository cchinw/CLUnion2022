import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Registry from '../components/Registry'

const RegistryPage = () => {
  const BASE_URL = 'http://localhost:3000/api'
  const [registry, setRegistry] = useState({})
  const [category, setCategory] = useState({})
  const [items, setItems] = useState([])
  const [receipt, setReceipt] = useState({})
  const [selectedItem, setSelectedItem] = useState(false)
  const [cart, setCart] = useState([])

  let { regId } = useParams()

  useEffect(() => {
    if (!selectedItem) {
      const getRegistry = async () => {
        const response = await axios.get(`${BASE_URL}/registry/${regId}`)
        const result = await axios.get(
          `${BASE_URL}/category/${response.data.category}/items`
        )

        setRegistry(response.data)
        setCategory(result.data)
      }
      getRegistry()
    } else if (isSelected) {
      const getReceipt = async () => {
        const response = await axios.get(`${BASE_URL}/receipts/rId`)
        setReceipt(response)
      }
      getReceipt()
    }
  }, [selectedItem, regId])

  return (
    <div>
      <Registry
        BASE_URL={BASE_URL}
        registry={registry}
        setRegistry={setRegistry}
        cart={cart}
        setCart={setCart}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        category={category}
        setCategory={setCategory}
        receipt={receipt}
        setReceipt={setReceipt}
      />
    </div>
  )
}

export default RegistryPage
