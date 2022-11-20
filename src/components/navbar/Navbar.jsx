import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { Headline } from './Navbar.styles';

const Navbar = () => {
  return (
    <Headline>
      <h1>
        <Link to='/'>
          <FaHome />Home
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
         <li>
          <Link to='/posts'>Posts</Link>
        </li>
      </ul>
    </Headline>
  )
}

export default Navbar