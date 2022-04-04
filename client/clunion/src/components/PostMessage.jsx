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
        getMessage()
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

  const handleImageChange = (e) => {
    const newImage = e.target.value
    setImageLink(newImage)
  } 

  return (
    <div className="postMessage">
      <div className="msgImgDiv">
        <img className="msgImage" src={msg.image} />
      </div>

      <div className="updateDeleteDiv">
      <h3>{msg.msg}</h3>
      <div className="updateMsgContainer">
                <div className="updateMsg">
                <input className='uploadImage' placeholder='Paste New Image Link' onChange={handleImageChange} value={imageLink} ></input>
                {/* <input className='uploadImage' placeholder='Paste New Image Link' onChange={handleImageChange} type= 'file' accept="image/jpeg, image/png" value={imageLink}></input> */}
                <textarea rows='10' className="messageText" placeholder="Edit your message here..." type='text' onChange={handleChange} value={message}></textarea>
                </div>
                <div className="updateBtnDiv">
                  <button  className="updateBtn"
                  onClick={() => {
                    updateMessage(msg._id)
                  }}
                  >
                    Update Message
                  </button>
      </div>
      <div>
      <button className="updateBtn"
                onClick={() => {
                  deleteMessage(msg._id)
                }}
              >
                Delete Message
              </button>
      </div>
                </div>
              </div>
            </div>

  )
                }
export default PostMessage