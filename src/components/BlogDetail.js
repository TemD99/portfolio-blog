import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/blogPosts.json';
import '../styles/BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  // Convert id to number for matching
  const post = posts.find(p => p.id === parseInt(id, 10));

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  // Replace "(new line)" markers with actual newline characters.
  const modifiedContent = post.content.replace(/\(new line\)/g, "\n");

  return (
    <div className="dark-section blog-detail" id="blog-detail">
      <h2>{post.title}</h2>
      <p className="blog-date">{post.date}</p>
      {post.image && (
        <img src={post.image} alt={post.title} className="blog-detail-image" />
      )}
      <p style={{ whiteSpace: 'pre-line' }}>{modifiedContent}</p>
    </div>
  );
};

export default BlogDetail;
