import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({blog}) => {
  return (
    <Link to={`/blog/${blog.id}`}>
          <div className="" >
              <h3>{blog.title}</h3>
              <p><span>{blog.body}</span></p>
          </div>
      </Link>
  )
}

export default BlogItem