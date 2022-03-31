import React from 'react'
// import axios from 'axios'
// import { useEffect, useState } from 'react'
import '../style/App.css'
import HomeImage from '../highlights/HomeImage.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Registry from '../components/Registry'
// import DateCountdown from 'react-date-countdown-timer'

const Home = () => {
  const [registry, setRegistry] = useState([])

  const BASE_URL = 'http://localhost:3001/api'

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
      <img className="homeImage" src={HomeImage} alt="mainCoupleImage" />
      <h1>Welcome to #CLUnion2022</h1>
      <h3>
        Here you would receive any and all updates about Wendy and Lekan's
        wedding, coming December 16, 2022, in Lagos, Nv igeria. We hope you are
        as excited as we are!
      </h3>
      <div>
        <Registry registry={registry} />
      </div>
      <div>
        <h4>December 16, 2022</h4>
        <h4>Oniru, Lagos, Nigeria</h4>
      </div>
      <div>
        <h4 className="countdown">
          {/* <DateCountdown
            dateTo="December 16, 2022 00:00:00 GMT+01:00"
            callback={() => alert('The D-day is Here!!!')}
          /> */}
        </h4>
      </div>
    </div>
  )
}

export default Home
