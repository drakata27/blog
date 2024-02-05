import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import modules from '../utils/quilModules'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog = () => {
    const [blog, setBlog] = useState({
        title: '',
        subtitle: '',
        body: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlog({ ...blog, [name]: value });
    };

    const createBlog = async () => {
        try {
            const response = await fetch(`/api/blogs/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blog),
            });

            if (!response.ok) {
                console.error('Error creating blog. Server responded with:', response.status, response.statusText);
                return;
            }

            const data = await response.json();
            console.log('Blog created successfully:', data);
            navigate('/')
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    let handleSubmit = ()=> {
        console.log('body', blog);

        if (blog.title.trim() !== '' &&
            blog.subtitle.trim() !== '') {
            createBlog();
        } else {
            alert('Blog contents cannot be empty');
        }        
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
                className='subtitle-input'
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

            <button onClick={handleSubmit}>Publish</button>
        </div>
    );
};

export default CreateBlog;
