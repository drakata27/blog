import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import modules from '../utils/quilModules'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const UpdateBlog = () => {
  let {id} = useParams();

  const [blog, setBlog] = useState({
    title: '',
    subtitle: '',
    body: '',
});


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}/edit`);
        if (!response.ok) {
          console.error('Error fetching blog data:', response.status, response.statusText);
          return;
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlog();
  }, [id]);

const navigate = useNavigate();

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
};

let updateBlog = async () => {
  fetch(`/api/blogs/${id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog)
  })
}


let handleSubmit = ()=> {
  updateBlog()
  navigate(`/blog/${id}`)
}

return (
    <div className='blog-form'>
        <input
            type='text'
            name='title'
            placeholder='Title...'
            value={blog.title}
            onChange={handleInputChange}
        />
        <input
            type='text'
            name='subtitle'
            placeholder='Subtitle...'
            value={blog.subtitle}
            onChange={handleInputChange}
        />

          <ReactQuill 
              className='editor-input'
              modules={modules}
              theme="snow" 
              value={blog.body} 
              onChange={body => handleInputChange({ target: { value: body, name: 'body' } })}
          />

        <button className='save-btn' onClick={handleSubmit}>Save</button>
    </div>
);
}

export default UpdateBlog