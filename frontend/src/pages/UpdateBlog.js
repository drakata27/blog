import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
        <textarea
            name='body'
            id=''
            cols='30'
            rows='15'
            placeholder='Content...'
            value={blog.body}
            onChange={handleInputChange}
        ></textarea>
        <button className='save-btn' onClick={handleSubmit}>Save</button>
    </div>
);
}

export default UpdateBlog