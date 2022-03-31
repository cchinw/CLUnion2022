import { Link} from 'react-router-dom'
import React from "react"
import '../style/App.css'

const Nav = () => {

return (
    <header>
      <nav>
        <div>
          <h1>Welcome to Our Wedding Registry!</h1>
        </div>
        <div className='nav'>
          <Link to='/'>Home</Link>
          <Link to='./faq'>FAQ</Link>
          <Link to='./registry'>Registry</Link>
          <div className='checkout'>
            <Link to="./checkout/:regid">Checkout</Link>
          </div>
        </div>
      </nav>
    </header>

      )
}

export default Nav