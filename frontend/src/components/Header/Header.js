import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='app-header'> 
        <h1>Blogs</h1>
        <div className="buttons">
            <button><a href="/">Sign In</a></button>
            <button><a href="/">Sign Up</a></button>
        </div>
    </div>
  )
}

export default Header