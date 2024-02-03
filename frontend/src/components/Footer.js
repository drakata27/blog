import React from 'react'

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
        <p>Copyright © {currentYear} Blogs</p>
    </div>
  )
}

export default Footer