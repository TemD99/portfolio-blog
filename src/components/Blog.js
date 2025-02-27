import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
  // Sample blog posts data (you could fetch this from an API or markdown files)
  const posts = [
    {
      id: 1,
      title: 'My First Blog Post',
      excerpt: 'This is a summary of my first blog post...',
      date: '2024-04-01'
    },
    {
      id: 2,
      title: 'Exploring AI and Web Development',
      excerpt: 'In this post, I share my experiences integrating AI with web development...',
      date: '2024-03-15'
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <h2>Blog</h2>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Blog;
