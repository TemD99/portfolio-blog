import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/blogPosts.json';
import '../styles/Blog.css';

const BlogList = () => {
  return (
    <div className="dark-section" id="blog">
      <h2>"Face Craft" Capstone Project Blogs</h2>
      <div className="blog-items">
        {posts.map(post => (
          <div key={post.id} className="blog-card">
            {post.image && (
              <img src={post.image} alt={post.title} className="blog-image" />
            )}
            <div className="blog-card-content">
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="button">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
