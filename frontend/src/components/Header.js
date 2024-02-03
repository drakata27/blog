import React from 'react'
import PostIcon from '../assets/post.png'

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
            <button>
              <span class="material-symbols-outlined">edit_square</span>
            </button>
            {/* <button><a href="/">Sign In</a></button>
            <button><a href="/">Sign Up</a></button> */}
        </div>
    </div>
  )
}

export default Header