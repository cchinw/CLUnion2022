import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
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
  let [specificMessage, setSpecificMessage] = useState({})
  //update message ==> updateMessage()
  let [messageUpdate, setMessageUpdate] = useEffect([])
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
        await axios.post(`${BASE_URL}/message`).then(function (response) {
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
          .then(function (response) {
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
          .then(function (response) {
            console.log(response, 'DELETE MESSAGE')
            setMessage(response.data)
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
    }
  }, [])

  return (
    <div>
      <h2>Leave a message for the couple!</h2>
      <div className="msgContainer">
        {allMessage.map((msg) => (
          <Link to={`/message/${msg.msg}`} key={msg._id}>
            <div className="guestMsg">
              <GuestMessage
                allMessage={allMessage}
                setAllMessage={setAllMessage}
                message={message}
                setMessage={setMessage}
                specificMessage={specificMessage}
                setSpecificMessage={setSpecificMessage}
              />
            </div>
          </Link>
        ))}
        <div className="msgDisplay">
          <PostMessage
            allMessage={allMessage}
            setAllMessage={setAllMessage}
            messageupdate={messageUpdate}
            setMessageUpdate={setMessageUpdate}
            messageDelete={messageDelete}
            setMessageDelete={setMessageDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default Message
