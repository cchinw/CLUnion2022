import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Registry from '../components/Registry'

import App from '../style/App.css'

const RegistryPage = () => {
  const BASE_URL = 'http://localhost:3001/api'
  const [registry, setRegistry] = useState({})
  const [category, setCategory] = useState({})
  const [items, setItems] = useState([])
  const [receipt, setReceipt] = useState({})
  const [selectedItem, setSelectedItem] = useState(false)
  const [checkout, setCheckout] = useState([])

  let { regId } = useParams()

  useEffect(() => {
    if (!selectedItem) {
      const getRegistry = async () => {
        const response = await axios.get(`${BASE_URL}/registry`)
        const result = await axios.get(
          `${BASE_URL}/category/${response.data.category}/items`
        )
        setRegistry(response.data)
        setCategory(result.data)
      }
      getRegistry()
    } else if (selectedItem && items > 1) {
      const getItem = async () => {
        const response = await axios.get(`${BASE_URL}/item/:id`)
        setItems(response)
      }
      getItem()
    } else if (selectedItem && checkout > 1) {
      const getCheckout = async () => {
        const response = await axios.get(`${BASE_URL}/checkout/${regId}`)
        setCheckout(response)
      }
      getCheckout()
    } else if (selectedItem) {
      const getReceipt = async () => {
        const response = await axios.get(`${BASE_URL}/receipts/:rID`)
        setReceipt(response)
      }
      getReceipt()
    }
  }, [selectedItem, regId])

  return (
    <div className="registryPage">
      <Registry
        BASE_URL={BASE_URL}
        registry={registry}
        setRegistry={setRegistry}
        checkout={checkout}
        setCheckout={setCheckout}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        category={category}
        setCategory={setCategory}
        receipt={receipt}
        setReceipt={setReceipt}
        items={items}
        setItems={setItems}
      />
    </div>
  )
}

export default RegistryPage
