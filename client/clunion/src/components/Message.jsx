import React from "react"
import { useState } from "react"
import PostMessage from "./PostMessage"
import GuestMessage from "./GuestMessage"
import '../style/App.css'

const Message = () => {

  const [postMessage, setPostMessage] = useState([])
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)

  }

  const addMessage = () => {
    let myMessage = [...postMessage, message]
    setPostMessage(myMessage)
    setMessage('')
  }

  const removeMessage = (message) => {
    let addedMessage = [...postMessage]
    addedMessage.splice(message, 1)
    setPostMessage(addedMessage)
  }

  // const displayMessage = () => {
  //   const data = {
  //     message: message
  //   }
  // }

  return (
    <div>
      <h2>Leave a message for the couple!</h2>
      <div className="messageBoard">
        <GuestMessage handleChange={handleChange} addMessage={addMessage} message={message}/>
        <PostMessage postMessage={postMessage} removeMessage={removeMessage}/>
      </div>
    </div>
  )
}

export default Message