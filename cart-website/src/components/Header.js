import "../components/style.css"
import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <ul className='nav'>
        <li className='prod'>
            <NavLink to="/">Home</NavLink>
        </li>
        <li className='prod1'>
            <NavLink to="/cart">Cart</NavLink>
        </li>
        <li className='prod1'>
            <NavLink to="/about">About Us</NavLink>
        </li>
        <li className='prod1'>
            <NavLink to="/cart">Contact Us</NavLink>
        </li>
        <li className='prod1'>
            <NavLink to="/cart">FAQ</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
