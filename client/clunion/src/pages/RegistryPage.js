import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Registry from '../components/Registry'
import '../style/App.css'

const RegistryPage = () => {
  const BASE_URL = 'http://localhost:3001/api'
  const [registry, setRegistry] = useState([])
  // const [receipt, setReceipt] = useState({})
  // const [selectedItem, setSelectedItem] = useState(false)
  // const [checkout, setCheckout] = useState([])

  let { regId } = useParams()

  useEffect(() => {
    // if (!selectedItem) {
    let isSelected = false
    const getRegistry = async () => {
      const response = await axios.get(`${BASE_URL}/registry/${regId}`)
      console.log(response)
      setRegistry(response.data)
    }
    getRegistry()
    // }
    // } else if (selectedItem && items > 1) {
    // const getItem = async () => {
    //   const response = await axios.get(`${BASE_URL}/item/:id`)
    //   setItems(response)
    //   console.log(response, 'ITEM')
    // }
    //   getItem()
    // } else if (selectedItem && checkout > 1) {
    //   const getCheckout = async () => {
    //     const response = await axios.get(`${BASE_URL}/checkout/${regId}`)
    //     setCheckout(response)
    //   }
    //   getCheckout()
    // } else if (selectedItem) {
    //   const getReceipt = async () => {
    //     const response = await axios.get(`${BASE_URL}/receipts/:rID`)
    //     setReceipt(response)
    //   }
    //   getReceipt()
    // }
  }, [regId])

  return (
    <div className="registryPage">
      {registry.map((reg) => (
        <Registry
          id={reg._id}
          greeting={reg.greeting}
          category={reg.category}
          BASE_URL={BASE_URL}
          // registry={registry}
          // setRegistry={setRegistry}
          // checkout={checkout}
          // setCheckout={setCheckout}
          // selectedItem={selectedItem}
          // setSelectedItem={setSelectedItem}
          // category={category}
          // setCategory={setCategory}
          // receipt={receipt}
          // setReceipt={setReceipt}
          // items={items}
          // setItems={setItems}
        />
      ))}
    </div>
  )
}

export default RegistryPage
