// src/pages/BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/blogPosts.json';
import '../components/BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id.toString() === id);

  if (!post) {
    return (
      <div className="blog-detail">
        <h2>Blog post not found</h2>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="blog-detail-container">
        <h1 className="blog-title">{post.title}</h1>
        <p className="blog-date">{post.date}</p>
        <div className="blog-content">
          {post.content ? (
            post.content.split('\n').map((para, idx) => <p key={idx}>{para}</p>)
          ) : (
            <p>This blog post does not have any content yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
