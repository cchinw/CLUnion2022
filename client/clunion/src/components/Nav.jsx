import { Link} from 'react-router-dom'
import React from "react"
import '../style/App.css'

const Nav = (props) => {

      return (
        <div>
          <Link to='/api'>Home</Link>
          <Link to='/api/registry' >Registry</Link>
        </div>
      )
}

export default Nav