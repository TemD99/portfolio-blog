// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/blogPosts.json';
import '../components/Blog.css';
import '../components/Header.css';


const BlogList = () => {
  return (
    <div className="dark-section" id="blog">
       <div className="text-content">
       <h3 className="portfolio-section-title">FaceCraft Blogs</h3>
        </div>
      <div className="blog-items">
        {posts.map(post => (
          <Link
            to={`/blogs/${post.id}`}
            key={post.id}
            className="blog-card card"
          >
            {/* Background image for the card */}
            {post.image && (
              <div
                className="card-background"
                style={{
                  backgroundImage: `url(/images/blog.webp)`
                }}
              ></div>
            )}
            <div className="card-content blog-card-content">
              <div className="blog-text-frame">
                <h3>{post.title}</h3>
                <p className="job-title">{post.date}</p>
                <p>{post.excerpt}</p>
              </div>
              {/* Optional shine effect overlay */}
              <div className="shine"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
