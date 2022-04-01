import '../style/App.css'


const GuestMessage = (props) => {
  return (
    <div>
      <label>Leave Message: </label>
      <form className='msgForm' onSubmit={props.postMessage}>
          <textarea type='text' name='message' placeholder='Enter your message here' onChange={props.handleChange} value={props.message}></textarea>
          <button className='addMessageBtn'>Send Message</button>
        </form>
    </div>
  )
}

export default GuestMessage