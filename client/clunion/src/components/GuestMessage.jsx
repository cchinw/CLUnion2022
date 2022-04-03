import '../style/App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'



const GuestMessage = ({msg}) => {

  const BASE_URL = 'http://localhost:3001/api'
    //create new message ==> createMessage()
    const [message, setMessage] = useState('')
    const [imageLink, setImageLink] = useState('')

    
  const handleChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }



    const createMessage = async () => {
      const data = {
        image: imageLink,
        msg: message
    }
    const response = await axios.post(`${BASE_URL}/message`, data)
    .then(function (res) {
      console.log(response, 'POST MESSAGE')
      setMessage(response.data)
    })
  }

  const onClick = () => {
    createMessage()
  }

  const handleImageChange = (e) => {
    const newImage = e.target.value
    setImageLink(newImage)
  } 

  console.log(message)
  return (
    <div>
      <label>Leave Message: </label>
      <form className='msgForm' >
          <input onChange={handleImageChange} value={imageLink} ></input>
          <textarea type='text' name='message' placeholder='Enter your message here...' onChange={handleChange} value={message}></textarea>
          <button className='addMessageBtn' onClick={onClick}>Send Message</button>
        </form >
    </div>
  )
}

export default GuestMessage