import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <article className="blog-post">
      <h3>{post.title}</h3>
      <p className="blog-date">{post.date}</p>
      <p>{post.excerpt}</p>
      <a href={`/blog/${post.id}`}>Read More</a>
    </article>
  );
};

export default BlogPost;
