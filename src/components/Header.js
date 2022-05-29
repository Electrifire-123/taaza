import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Header extends Component {
  render() {
    return (
      <header>
          <h1>
            <Link className='link'  to="/" >TAAZA KHABARE</Link>
            </h1>
          <ul>
                <li>  
                  <Link className='link' to='/general'>
                     General
                  </Link>
                </li>
                <li>  
                  <Link className='link' to='/entertainment'>
                     Entertainment
                  </Link>
                </li>
                <li>  
                  <Link className='link' to='/health'>
                     Health
                  </Link>
                </li>
                <li>  
                  <Link className='link' to='/sports'>
                     Sports
                  </Link>
                </li>
                <li>
                  <Link className='link' to='/technology'>
                     Technology
                  </Link>
                </li>
                <li>
                  <Link 
                  className='link' 
                  to='/contact'>
                      Contact
                  </Link>
                </li>
          </ul>
          {/* 
          This commentes part uses NavLink which we can use dilectly in the ul
          It will change the color of the text when we are on the same page as link
          */}
          {/* <NavLink
            className="link"
            style={{ color: "white", textDecoration: "none" }}
            to="/"
          >
            TAAZA KHABARE
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "darkblue" } : { color: "white" }
              }
              className="link"
              to="/"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "darkblue" } : { color: "white" }
              }
              className="link"
              to="/contact"
            >
              Contact
            </NavLink> */}
      </header>
    )
  }
}

export default Header