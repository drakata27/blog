import React from 'react'

// import {
//   HashRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

const Header = () => {
  return (
    <div className='app-header'> 
        <h1><a href="/">Blogs</a></h1>
        <div className="buttons">
            <button><a href="/">Sign In</a></button>
            <button><a href="/">Sign Up</a></button>
        </div>
    </div>
  )
}

export default Header