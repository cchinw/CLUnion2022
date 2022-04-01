import React from 'react'
import '../style/App.css'
import HomeImage from '../highlights/HomeImage.jpg'
// import DateCountdown from 'react-date-countdown-timer'

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Welcome to Our Wedding Website</h1>
        <img className="homeImage" src={HomeImage} alt="mainCoupleImage" />
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
