import {React, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Paceholder from '../assets/placeholder.jpg'
import {getTime} from '../utils/getTime'
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
    let {id} = useParams();
    // let [blog, setBlog] = useState(null);

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

      // let updateBlog = async () => {
      //   fetch(`/api/blogs/${id}/`, {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(blog)
      //   })
      // }

  return (
    <div className='blog-page'>
        <h1>{blog?.title}</h1>
        <h2>{blog?.subtitle}</h2>

        <div className='horizontal-container'>
          <p>{getTime(blog?.created)}</p>

          <div>
            <button className='edit-btn'>
              <span className="material-symbols-outlined">
                edit
              </span>
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
        <p>{blog?.body}</p>
    </div>
  )
}

export default BlogPage


