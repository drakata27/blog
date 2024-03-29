import React from 'react'
import { Link } from 'react-router-dom'
import Paceholder from '../assets/placeholder.jpg'
import {getTime} from '../utils/getTime'

const BlogItem = ({blog}) => {
  return (
    <Link to={`/blog/${blog.id}`}>
        <div className="blog-item">
          <div >
            {blog.cover ? (
              <img className='cover' src={blog.cover}  alt='blog' />
            ) : (
              <img className='cover' src={Paceholder} alt='blog' />
            )}
          </div>
          
          <div>
            <h1 className='blog-title'>{blog.title}</h1>
            <h2><span>{blog.subtitle}</span></h2>
            <p className='published'>
              Published <span>{getTime(blog.created)}</span>
            </p>
          </div>
        </div>
      </Link>
  )
}

export default BlogItem