import '../style/App.css'


const GuestMessage = (props) => {

  if (props.message) {
    return props.setMessage
  } else {return props.setAllMessage}

  return (
    <div>
      <label>Leave Message: </label>
      <form className='msgForm' onSubmit={props.setAllMessage}>
          <textarea type='text' name='message' placeholder='Enter your message here' onChange={props.setSpecificMessage} value={props.message}></textarea>
          <button className='addMessageBtn'>Send Message</button>
        </form>
    </div>
  )
}

export default GuestMessage