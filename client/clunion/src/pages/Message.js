import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'
import PostMessage from '../components/PostMessage'
import GuestMessage from '../components/GuestMessage'
import '../style/App.css'
import axios from 'axios'

const Message = () => {
  const location = useLocation()
  let navigate = useNavigate()
  const { msgId } = useParams()

  const BASE_URL = 'http://localhost:3001/api'
  //display all messages ==> getMessage()
  let [allMessage, setAllMessage] = useState([])

  // let [postMessage, setPostMessage] = useState([])

  //create new message ==> createMessage()
  let [message, setMessage] = useState('')
  //get message by Id ==> getMessageById
  let [specificMessage, setSpecificMessage] = useState('')
  //update message ==> updateMessage()
  const [messageUpdate, setMessageUpdate] = useState('')
  //delete message ==> deletemessage
  let [messageDelete, setMessageDelete] = useState({})
  let [selected, setSelected] = useState(false)

  useEffect(() => {
    if (!selected) {
      let getMessage = async () => {
        let response = await axios.get(`${BASE_URL}/message`)
        console.log(response, 'GET ALL MESSAGES')
        setAllMessage(response.data)
      }
      getMessage()
      return () => {
        allMessage = [...allMessage]
      }
    } else if (selected) {
      let createMessage = async () => {
        let response = await axios
          .post(`${BASE_URL}/message`)
          .then(function (res) {
            console.log(response, 'POST MESSAGE')
            setMessage(response.data)
          })
      }
      createMessage()
      return () => {
        message = [...allMessage, message]
      }
    } else if (selected && specificMessage) {
      let getMessageById = async () => {
        let response = await axios.get(`${BASE_URL}/message/${msgId}`)
        console.log(response, 'GET SPECIFIC MESSAGES')
        setSpecificMessage(response.data)
      }
      getMessageById()
      return () => {
        specificMessage = [specificMessage]
      }
    } else if (selected && messageUpdate) {
      let updateMessage = async () => {
        let response = await axios
          .put(`${BASE_URL}/message/${msgId}`)
          .then(function () {
            console.log(response, 'UPDATE MESSAGE')
            setMessageUpdate(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      updateMessage()
      return () => {
        updateMessage = [...allMessage, updateMessage]
      }
    } else if (selected && messageDelete) {
      let deleteMessage = async () => {
        let response = await axios
          .delete(`${BASE_URL}/message/${msgId}`)
          .then(function (res) {
            console.log(response, 'DELETE MESSAGE')
            setMessage(res.data)
          })
          .catch(function (error) {
            console.log(error)
          })
        setMessageDelete(response.data)
      }
      deleteMessage()
      return () => {
        deleteMessage = ['Message Deleted']
      }
    } else {
      return (selected = true)
    }
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }

  const addMessage = () => {
    let myMessage = [...allMessage, message]
    setAllMessage(myMessage)
    setMessage('')
  }

  const removeMessage = (msg) => {
    let addedMessage = [...allMessage]
    addedMessage.splice(message, 1)
    setAllMessage(addedMessage)
  }

  const updateMessage = () => {
    let newMessage = ''
    specificMessage.forEach(function (specific, i) {
      if (specific === specificMessage) specificMessage[i] = newMessage
    })
  }

  const showAllMessages = () => {
    let allMessages = [...allMessage]
    return allMessages
  }

  const showOneMessage = () => {
    return specificMessage
  }

  return (
    <div>
      <h2>Leave a message for the couple!</h2>
      <div className="msgContainer">
        {/* <div>
          <label>Leave a message</label>
          <form className="msgForm" onSubmit={setAllMessage}>
            <textarea
              className="msgText"
              type="text"
              name="message"
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="addMsgBtn" onChange={setMessage}>
              Send Message
            </button>
          </form>
          <div>{setAllMessage}</div>
        </div> */}
        <div className="msgDisplay">
          <GuestMessage
            handleChange={handleChange}
            addMessage={addMessage}
            message={message}

            // allMessage={allMessage}
            // setAllMessage={setAllMessage}
            // message={message}
            // setMessage={setMessage}
            // specificMessage={specificMessage}
            // setSpecificMessage={setSpecificMessage}
          />
          <PostMessage
            allMessage={allMessage}
            showAllMessages={showAllMessages}
            showOneMessage={showOneMessage}
            removeMessage={removeMessage}
            updateMessage={updateMessage}

            // allMessage={allMessage}
            // setAllMessage={setAllMessage}
            // messageupdate={messageUpdate}
            // setMessageUpdate={setMessageUpdate}
            // messageDelete={messageDelete}
            // setMessageDelete={setMessageDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default Message
