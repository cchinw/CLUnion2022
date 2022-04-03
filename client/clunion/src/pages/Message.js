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
  let [allMessage, setAllMessage] = useState([])
  let [postMessage, setPostMessage] = useState([])
  let [message, setMessage] = useState('')
  let [specificMessage, setSpecificMessage] = useState({})
  let [messageUpdate, setMessageUpdate] = useEffect('')
  let [messageDelete, setMessageDelete] = useState({})
  // let [selected, setSelected] = useState(false)

  useEffect(() => {
    if (message) {
      let addNewMessage = () => {
        const data = {
          msg: ''
        }
        let createMessage = async () => {
          await axios
            .post(`${BASE_URL}/message`, data)
            .then(function (response) {
              console.log(response, 'POST MESSAGE')
              setMessage(response.data)
            })
            .catch(function (error) {
              console.log(error)
            })
        }
        createMessage()
        navigate(location.pathname)
        return () => {
          message = [...allMessage, message]
        }
      }
    }
    if (allMessage) {
      let getMessage = async () => {
        let response = await axios.get(`${BASE_URL}/message`)
        console.log(response, 'GET ALL MESSAGES')
        setAllMessage(response.data)
        navigate(location.pathname)
      }
      getMessage()
      return () => {
        allMessage = [...allMessage]
      }
    }
    if (specificMessage) {
      let getMessageById = async () => {
        let response = await axios.get(`${BASE_URL}/message/${msgId}`)
        console.log(response, 'GET SPECIFIC MESSAGES')
        setSpecificMessage(response.data)
        navigate(location.pathname)
      }
      getMessageById()
      return () => {
        getMessageById = [getMessageById]
      }
    }
    if (messageUpdate) {
      let updateMessage = async () => {
        let response = await axios
          .put(`${BASE_URL}/message/${msgId}`)
          .then(function (response) {
            console.log(response, 'UPDATE MESSAGE')
            setMessage(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
        setMessageUpdate(response.data)
        navigate(location.pathname)
      }
      updateMessage()
      return () => {
        updateMessage = [...allMessage, updateMessage]
      }
    }
    if (messageDelete) {
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
        navigate(location.pathname)
      }
      deleteMessage()
      return () => {
        deleteMessage = ['Message Deleted']
      }
    }
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }

  // const addMessage = () => {
  //   let myMessage = [...postMessage, message]
  //   setPostMessage(myMessage)
  //   setMessage('')
  // }

  // const removeMessage = (message) => {
  //   let addedMessage = [...postMessage]
  //   addedMessage.splice(message, 1)
  //   setPostMessage(addedMessage)
  // }

  // const displayMessage = () => {
  //   const data = {
  //     message: message
  //   }
  // }

  return (
    <div>
      <h2>Leave a message for the couple!</h2>
      <div>
        <GuestMessage
          handleChange={handleChange}
          allMessage={allMessage}
          setAllMessage={setAllMessage}
          message={message}
          setMessage={setMessage}
          specificMessage={specificMessage}
          setSpecificMessage={setSpecificMessage}
          messageupdate={messageUpdate}
          setMessageUpdate={setMessageUpdate}
          messageDelete={messageDelete}
          setMessageDelete={setMessageDelete}
        />
        <PostMessage
          postMessage={postMessage}
          setPostMessage={setPostMessage}
          messageDelete={messageDelete}
          setMessageDelete={setMessageDelete}
        />
      </div>
    </div>
  )
}

export default Message
