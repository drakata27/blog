import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='app-header'> 
        <div className='logo'>
          <h1><a href="/">Blogs</a></h1>
        </div>
        
        <div className="buttons">
          <button>
            <Link to="/blog/new/">
              <span className="material-symbols-outlined">edit_square</span>
            </Link>
          </button>
        </div>
    </div>
  )
}

export default Header