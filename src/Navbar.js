import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import "./navbar.css"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <img src="https://i.imgur.com/5IAdQDh.png?2" style={{height:"50px"}}/>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <div  className='navtext'>
            <a className='nav-link' href='#home'>Home</a>
          </div>
          <div className='navtext'>
            <a className='nav-link' href='#about'>About</a>
          </div>
          <div className='navtext'>
            <a className='nav-link' href="#price">Price</a>
          </div>
          <div className='navtext'>
            <a className='nav-link' href='#gallery'>Gallery</a>
          </div>
          <div  className='navtext'>
            <a className='nav-link' href='#location'>Location</a>
          </div>
          <div className='navtext'>
            <a  className='nav-link' href='#video'>Video</a>
          </div>

        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar