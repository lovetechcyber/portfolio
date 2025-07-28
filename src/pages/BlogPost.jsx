import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-red-600 font-bold">404 - Blog Not Found</h2>
        <Link to="/blog" className="text-blue-600 underline mt-4 block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto text-gray-900">
      <h1 className="text-4xl font-bold text-blue-800 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <article className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }} />
      <div className="mt-10">
        <Link to="/blog" className="text-blue-700 underline">← Back to Blog</Link>
      </div>
    </section>
  );
};

export default BlogPost;
