import React from "react"

const Checkout = () => {


  return (
    <div className="checkout">
      <form onSubmit={props.onSubmit}>
        <fieldset>
          <label>
            <p>Gift Message</p>
            <input giftMessage="giftMessage"/>
          </label>
          <label>
            <p>Email</p>
            <input email="email"/>
          </label>
          <label>
            <p>Payment Details</p>
            <input paymentDetails="paymentDetails"/>
          </label>
          <label>
            <p>name</p>
            <input name="name"/>
          </label>
          <label>
            <p>Address</p>
            <input address="address"/>
          </label>
          <label>
            <p>Phone Number</p>
            <input phoneNumber="phoneNumber"/>
          </label>
        </fieldset>
        <button type="submit">Checkout</button>
      </form>
    </div>
  )
}

export default Checkout