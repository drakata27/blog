import {React, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Paceholder from '../assets/placeholder.jpg'
import {getTime} from '../utils/getTime'

const BlogPage = () => {
    let {id} = useParams();
    let [blog, setBlog] = useState(null);

    useEffect(() => {
        const getBlog = async () => {
          if (id==='new') return
          let response = await fetch(`/api/blogs/${id}/`);
          let data = await response.json();
          setBlog(data);
        };
        getBlog();
      }, [id]);

  return (
    <div className='blog-page'>
        <h1>{blog?.title}</h1>
        <h2>{blog?.subtitle}</h2>
        <p>{getTime(blog?.created)}</p>
        {/* <img className='blog-page-img' src={Paceholder} alt='post'/> */}
        <div className='img-container'>
          <img src={Paceholder} alt='post'/>
        </div>
        <p>{blog?.body}</p>
    </div>
  )
}

export default BlogPage