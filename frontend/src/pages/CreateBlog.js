import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

        if (blog.title.trim() !== '' &&
            blog.subtitle.trim() !== '' &&
            blog.body.trim() !== '') {
            createBlog();
        } else {
            alert('Blog contents cannot be empty');
        }        
    }

    return (
        <div className='create-blog'>
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
            <button onClick={handleSubmit}>Publish</button>
        </div>
    );
};

export default CreateBlog;
