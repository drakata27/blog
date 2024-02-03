import React from 'react'

const Header = () => {
  return (
    <div className='app-header'> 
        <h1><a href="/">Blogs</a></h1>
        <div className="buttons">
            <button>
              <span class="material-symbols-outlined">edit_square</span>
            </button>
        </div>
    </div>
  )
}

export default Header