import React, { useState } from "react"
import Item from './Item'
import { useEffect } from "react"
import axios from "axios"
import '../style/App.css'


const Registry = (props) => {
  const [items, setItems] = useState([])
  useEffect( async () => {
    await axios.get(`${props.BASE_URL}/category/${props.category}/items`)
    .then((response) => {
      setItems(response.data)
      console.log(response, 'ITEMS RESPONSE')
    }).catch((e) => {
      console.log(e)
    })
  }, [])


  // if (isLoggedIn) {
  //   button = <LogoutButton onClick={this.handleLogoutClick} />;
  // } else {
  //   button = <LoginButton onClick={this.handleLoginClick} />;
  // }
  
  // return (
  //   <div>
  //     <Greeting isLoggedIn={isLoggedIn} />
  //     {button}
  //   </div>
  // );

return (
  <div className="registry">
    {items.map((item) => (
      <Item 
      item={item}
      />
    ))}
  </div>
)
}

export default Registry