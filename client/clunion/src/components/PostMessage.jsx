import React from "react"
import '../style/App.css'

const PostMessage = (props) => {
console.log(props.postMessage)
  return (
    <ul>
      {props.postMessage.map((msg, index) => (
        <li className='msgList' key={index}>
          {msg}
          <button className='postMessageBtn' onClick={() => props.removeMessage(index)}>Delete Message</button>
        </li>
      ))}
    </ul>
  )
}

export default PostMessage