import React from "react"
import '../style/App.css'

const PostMessage = (props) => {

  return (
    <div>
      {props.postMessage.map((message, index) => (
        <div key={index}>
          {message}
          <button onClick={() => props.removeMessage(index)}>Delete Message</button>
        </div>
      ))}
    </div>
  )
}

export default PostMessage