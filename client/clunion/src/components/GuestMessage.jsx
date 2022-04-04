import '../style/App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'



const GuestMessage = ({msg, getMessage}) => {

  const BASE_URL = 'http://localhost:3001/api'
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
      getMessage()
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
    <div className='msgContainer'>
      <form className='msgForm' >
          <input className='uploadImage' placeholder='Paste a link to your image here' onChange={handleImageChange} value={imageLink} id="pasteImage" ></input>
          <textarea className='messageText' type='text' name='message' rows='10' placeholder='Enter your message here...' onChange={handleChange} value={message}></textarea>
          <div className='btn'>
            <button className='addMessageBtn' onClick={onClick}>Send Message</button>
          </div>
        </form >
    </div>
  )
}



export default GuestMessage