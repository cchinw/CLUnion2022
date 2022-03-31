import React from 'react'
import '../style/App.css'
import HomeImage from '../highlights/HomeImage.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RegistryPage from '../pages/RegistryPage'
// import DateCountdown from 'react-date-countdown-timer'

const Home = () => {
  const [registry, setRegistry] = useState([])

  const BASE_URL = 'http://localhost:3000/api'

  useEffect(() => {
    const getRegistry = async () => {
      const response = await axios.get(`${BASE_URL}/registry`)
      console.log(response.data, 'ALL REGISTRIES')
      setRegistry(response.data)
    }
    getRegistry()
  }, [])
  return (
    <div className="home">
      <div>
        <img className="homeImage" src={HomeImage} alt="mainCoupleImage" />
        <h1>Welcome to Our Registry</h1>
        <h4 className="countdown">
          {/* <DateCountdown
              dateTo="December 16, 2022 00:00:00 GMT+01:00"
              callback={() => alert('The D-day is Here!!!')}
            /> */}
        </h4>
        <div>
          <RegistryPage registry={registry} />
        </div>
      </div>
    </div>
  )
}

export default Home
