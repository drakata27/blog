import {React, useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import Paceholder from '../assets/placeholder.jpg'
import Anonymous from '../assets/anonymous-user.jpg'
import {getTime} from '../utils/getTime'
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
    let {id} = useParams();

    const [blog, setBlog] = useState({
      title: '',
      subtitle: '',
      body: '',
  });

    const navigate = useNavigate();

    useEffect(() => {
        const getBlog = async () => {
          if (id==='new') return

          let response = await fetch(`/api/blogs/${id}/`);
          let data = await response.json();
          setBlog(data);
        };
        getBlog();
      }, [id]);

      let deleteBlog = async () => {
        try {
          const response = await fetch(`/api/blogs/${id}/`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
          })

          if (!response.ok) {
            console.error('Error deleting blog. Server responded with:', response.status, response.statusText);
            return;
          }

          const data = await response.json();
          console.log('Blog deleted successfully:', data);
          navigate('/')
        } catch(error) {
          console.error('Error deleting blog:', error);
        }
      }

  return (
    <div className='blog-page'>
        <h1>{blog?.title}</h1>
        <h2>{blog?.subtitle}</h2>
        
        <div className='horizontal-container'>
          <div className='author-container'>
            <img src={Anonymous} alt='author'/>
            <p>Anonymous Author</p>
          </div>
        </div>

        <div className='horizontal-container'>
          <p>{getTime(blog?.created)}</p>

          <div>
            <button className='edit-btn'>
              <Link to={`/blog/${id}/edit`}>
              <span className="material-symbols-outlined">
                edit
              </span>
              </Link>
            </button>

            <button 
              className='delete-btn'
              onClick={deleteBlog}>
                <span className="material-symbols-outlined">
                  delete
                </span>
            </button>

          </div>
        </div>

        <div className='img-container'>
          <img src={Paceholder} alt='post'/>
        </div>

        <div 
        className='ql-editor' 
        dangerouslySetInnerHTML={{__html:blog?.body}}></div>
    </div>
  )
}

export default BlogPage


