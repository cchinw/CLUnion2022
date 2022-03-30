import { NavLink } from 'react-router-dom'
import { useState, useEffect, useRef} from 'react'
import React from "react"
import '../style/Nav.css'
import Home from '../pages/Home'
import Faq from '../pages/Faq'
import Guestbook from '../pages/Guestbook'
import OurStory from './OurStory'
import Photos from './Photos'
import ToDo from './ToDo'
import Travel from './Travel'
import WeddingParty from './WeddingParty'

const Nav = (props) => {

  const main = () => {
    return (
        <nav className='navComponent'>
          <Home />
          <Faq />
          <Guestbook />
          <OurStory />
          <Photos />
          <ToDo />
          <Travel />
          <WeddingParty />
        </nav>
    )
  }

  const NavBar = (props) => {
    return (
      <nav className='navbar'>
        <ul className='navProps'>{props.children}</ul>
      </nav>
    )
  }

  const NavItems = (props) => {
    const [open, setOpen] = useState(false)

    return (
      <li>
        <NavLink exact activeClassName="homeLink" to='/' onClick={() => setOpen(!open)}>Home</NavLink>
        <NavLink activeClassName="faqLink" to='/faq' onClick={() => setOpen(!open)}>FAQs</NavLink>
        <NavLink activeClassName="guestbookLink" to='/guestbook/:gbid' onClick={() => setOpen(!open)}>Guest Signout</NavLink>
        <NavLink activeClassName="ourStoryLink" to='/ourstory' onClick={() => setOpen(!open)}>Our Story</NavLink>
        <NavLink activeClassName="photosLink" to='/photos' onClick={() => setOpen(!open)}>Photos</NavLink>
        <NavLink activeClassName="toDoLink" to='/todo' onClick={() => setOpen(!open)}>To Do in Lagos</NavLink>
        <NavLink activeClassName="travelLink" to='/travel' onClick={() => setOpen(!open)}>Travel Arrangements</NavLink>
        <NavLink activeClassName="weddingPartyLink" to='/weddingparty' onClick={() => setOpen(!open)}>Wedding Party</NavLink>
        <NavLink activeClassName="registryLink" to='/registry' onClick={() => setOpen(!open)}>Registry</NavLink>
        {open && props.children}
      </li>
    )
  }

  const dropdownMenu = () => {
    const [mainMenu, setMainMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    },[])

    const calcHeight = (heights) => {
      const height = heights.offsetHeight
      setMenuHeight(height)
    }

    const dropdownItem = (props) => {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
      )
    }

    return (
      <div className='dropdownMenu' style={{height: menuHeight }} ref={dropdownRef}>

        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
            <div className='menu'>
              <Nav>Menu</Nav>
            </div>

        </CSSTransition>

      </div>
    )
  }
 
  // const [openFaq, setOpenFaq] = useState(false)
  // const [openGuestbook, setOpenGuestbook] = useState(false)
  // const [openOurStory, setOpenOurStory] = useState(false)
  // const [openPhotos, setOpenPhotos] = useState(false)
  // const [openToDo, setOpenToDo] = useState(false)
  // const [openTravel, setOpenTravel] = useState(false)
  // const [openWeddingParty, setOpenWeddingParty] = useState(false)
  // const [openRegistry, setOpenRegistry] = useState(false)


  // return (
  //   <header>
  //     <nav className='nav'>
  //       <ul className='navLinks'>
  //         <li><NavLink exact activeClassName="homeLink" to='/' onClick={() => setOpen(!open)}>Home</NavLink></li>
  //         <li><NavLink activeClassName="faqLink" to='/faq' onClick={() => setOpen(!open)}>FAQs</NavLink></li>
  //         <li><NavLink activeClassName="guestbookLink" to='/guestbook/:gbid' onClick={() => setOpen(!open)}>Guest Signout</NavLink></li>
  //         <li><NavLink activeClassName="ourStoryLink" to='/ourstory' onClick={() => setOpen(!open)}>Our Story</NavLink></li>
  //         <li><NavLink activeClassName="photosLink" to='/photos' onClick={() => setOpen(!open)}>Photos</NavLink></li>
  //         <li><NavLink activeClassName="toDoLink" to='/todo' onClick={() => setOpen(!open)}>To Do in Lagos</NavLink></li>
  //         <li><NavLink activeClassName="travelLink" to='/travel' onClick={() => setOpen(!open)}>Travel Arrangements</NavLink></li>
  //         <li><NavLink activeClassName="weddingPartyLink" to='/weddingparty' onClick={() => setOpen(!open)}>Wedding Party</NavLink></li>
  //         <li><NavLink activeClassName="registryLink" to='/registry' onClick={() => setOpen(!open)}>Registry</NavLink></li>
  //       </ul>
  //     </nav>
  //   </header>
  // )
}

export default Nav