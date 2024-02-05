import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='app-header'> 
        <div className='logo'>
            <a href="/">
            <img src={Logo} alt='logo' />
            </a>
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