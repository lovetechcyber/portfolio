import React from 'react';
import blogPosts from '../data/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Insights & Security Tips</h2>
        <p className="text-lg text-gray-600">
          Stay updated with DevSecOps best practices, compliance guides, and real-world case studies.
        </p>
      </div>

      <div className="grid gap-8 max-w-5xl mx-auto">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-800">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <Link to={`/blog/${post.id}`} className="text-blue-600 underline">
              Read Full Article
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
