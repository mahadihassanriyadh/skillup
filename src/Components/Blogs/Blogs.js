import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className="container my-5">
            <h1 className="text-center">Blogs</h1>
            <Row xs={3} md={3} lg={3} className="m-4">
                {
                    blogs.map(blog =>
                        <Blog
                        key={blog.key}
                        blog={blog}
                    ></Blog>
                    )
                }
            </Row>
        </div>
    );
};

export default Blogs;