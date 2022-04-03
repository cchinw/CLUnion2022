import React from "react"
import '../style/App.css'

const PostMessage = (props) => {
  console.log(props.allMessage, 'NEW ALL MESSAGE')
console.log(props.allMessage['msg'], 'ALL MESSAGE PROPS')
  return (
    <ul>
      {props.allMessage['msg'].map((msg, index) => {
        <li className='msgList' key={index}>
          {msg}
          <button className='updateMessageBtn' onClick={() => props.updateMessage(index)}>Update Message</button>
          <button className='deleteMessageBtn' onClick={() => props.removeMessage(index)}>Delete Message</button>
        </li>
})}
    </ul>
  )
}

export default PostMessage