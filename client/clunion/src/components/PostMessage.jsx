import React from "react"
import '../style/App.css'
import axios from "axios"
import { useState, useEffect } from 'react'

const PostMessage = ({msg, setAllMessage, getMessage}) => {

  const BASE_URL = 'http://localhost:3001/api'
    //display all messages ==> getMessage()
    // const [allMessage, setAllMessage] = useState([])

    //get message by Id ==> getMessageById
    let [specificMessage, setSpecificMessage] = useState('')
    const [imageLink, setImageLink] = useState('')
  
    //update message ==> updateMessage()
    const [messageUpdate, setMessageUpdate] = useState('')
  
    //delete message ==> deletemessage
    let [messageDelete, setMessageDelete] = useState({})


  const deleteMessage = async (msgId) => {
    const response = await axios
      .delete(`${BASE_URL}/message/${msgId}`)
      .then(function (res) {
        console.log(res, 'DELETE MESSAGE')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  
  let updateMessage = async (msgId) => {
    const data = {
      image: imageLink,
      msg: message
    }
    console.log(msgId, 'MSG ID')
    await axios
      .put(`${BASE_URL}/message/${msgId}`, data)
      .then(function (res) {
        setMessageUpdate(res.data)
        console.log(res, 'RESPONSE FOR UPDATE')
        console.log(res.data, 'UPDATE MESSAGE')
        getMessage()
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }

  return (
    <div>
              <img src={msg.image} />
              <h3>{msg.msg}</h3>
              <button
                onClick={() => {
                  deleteMessage(msg._id)
                }}
              >
                Delete Message
              </button>
              <div>
                <input onChange={handleChange} value={message}></input>
                <button
                  onClick={() => {
                    updateMessage(msg._id)
                  }}
                >
                  Update Message
                </button>
              </div>
            </div>

  )
                }
export default PostMessage