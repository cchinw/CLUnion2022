import React from 'react'
import { useState, useEffect } from 'react'
import PostMessage from '../components/PostMessage'
import GuestMessage from '../components/GuestMessage'
import '../style/App.css'
import axios from 'axios'

const Message = () => {
  const BASE_URL = 'http://localhost:3001/api'
  //display all messages ==> getMessage()
  const [allMessage, setAllMessage] = useState([])

  //get message by Id ==> getMessageById
  let [specificMessage, setSpecificMessage] = useState('')

  //update message ==> updateMessage()
  const [messageUpdate, setMessageUpdate] = useState('')

  //delete message ==> deletemessage
  let [messageDelete, setMessageDelete] = useState({})

  let getMessage = async () => {
    let response = await axios.get(`${BASE_URL}/message`)
    setAllMessage(response.data.msg)
  }
  useEffect(() => {
    getMessage()
  }, [])

  return (
    <div>
      <h2>Leave a message for the couple!</h2>
      <div className="msgContainer">
        <div>
          <div className="msgDisplay">
            {allMessage.map((msg) => (
              <div className="postMessage">
                <PostMessage
                  msg={msg}
                  setAllMessage={setAllMessage}
                  getMessage={getMessage}
                />
              </div>
            ))}
            <div className="guestMessage">
              <GuestMessage msg={allMessage} getMessage={getMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
