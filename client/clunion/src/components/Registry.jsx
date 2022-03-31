import React, { useState } from "react"
import Item from './Item'
import { useEffect } from "react"
import axios from "axios"


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

  // const addToCheckout = (e, id) => {
  //   setCheckout((currentCheckout) => {return [...currentCheckout, id]})
  // }

  // const removeFromCheckout = (e, id) => {
  //   setCheckout((currentCheckout) => {
  //     let items = currentCheckout
  //     for (let i=0; i<items.length; i++) {
  //       if (items[i] === id) {
  //         items.splice(i, 1)
  //         break
  //       }
  //     }
  //     return [...items]
  //   })
  // }

  // const checkoutItems = async () => {
  //   const response = await axios.post(`${BASE_URL}/checkout/:regid`)
  //   setCheckout(response.data)
  //   setSelectedItem(true)
  // }

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
  <div>
    {items.map((item) => (
      <Item 
      item={item}
      />
    ))}
  </div>
)
}

export default Registry

// { if (selectedItem) {
//   <Checkout checkoutId={checkout._id} items={items} price={items.price} />
//   } else if (selectedItem && items > 1) {
//     <Receipt receiptId={receipt._id} price={items.price} items={items} checkout={checkout} />
//   } else {
//     <div className="registryComponent">
//       <div className="registryInfo">
//         <h1>{items.title}</h1>
//         <p>Thank you so much for your kind gift. We really appreciate you! Love, Chinwendu and Lekan</p>
//         <img src={items.image} alt='item-images'/>
//       </div>
//       <div className="registryItems">
//         <h2>Categories</h2>
//           {items.map((item) => {
//             (<Item BASE_URL={BASE_URL} item={item} className='item' key={item._id} onClickAdd={addToCheckout} onClickRemove={removeFromCheckout} />)
//           })}
//       </div>
//       <section className="checkout">
//         <Checkout onClick={checkoutItems} checkout={checkout} />
//       </section>
//     </div>
//   }
// })