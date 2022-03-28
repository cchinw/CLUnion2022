import React from 'react'
import '../style/App.css'
import HomeImage from '../highlights/HomeImage.png'
import DateCountdown from 'react-date-countdown-timer'

const Home = () => {
  return (
    <div className="home">
      <img src={HomeImage} alt="mainCoupleImage" />
      <h1>Welcome to #CLUnion2022</h1>
      <h3>
        Here you would receive any and all updates about Wendy and Lekan's
        wedding, coming December 16, 2022, in Lagos, Nigeria. We hope you are as
        excited as we are!
      </h3>
      <div>
        <h4>December 16, 2022</h4>
        <h4>Oniru, Lagos, Nigeria</h4>
      </div>
      <div>
        <h4 className="countdown">
          <DateCountdown
            dateTo="December 16, 2022 00:00:00 GMT+01:00"
            callback={() => alert('The D-day is Here!!!')}
          />
        </h4>
      </div>
    </div>
  )
}

export default Home
