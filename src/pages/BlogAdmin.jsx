import React, { useState } from 'react';

const BlogAdmin = () => {
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    slug: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('✅ Blog post created successfully!');
        setFormData({ title: '', summary: '', content: '', slug: '' });
      } else {
        setMessage('❌ Error: ' + result.message);
      }
    } catch (err) {
      setMessage('❌ Network error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">📝 Blog Admin – Create Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-xl">
          <input
            type="text"
            name="title"
            placeholder="Post Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded p-3"
          />
          <input
            type="text"
            name="slug"
            placeholder="Unique Slug (e.g., devsecops-best-practices)"
            value={formData.slug}
            onChange={handleChange}
            required
            className="w-full border rounded p-3"
          />
          <input
            type="text"
            name="summary"
            placeholder="Summary"
            value={formData.summary}
            onChange={handleChange}
            required
            className="w-full border rounded p-3"
          />
          <textarea
            name="content"
            placeholder="Post Content (Markdown supported)"
            value={formData.content}
            onChange={handleChange}
            required
            rows={8}
            className="w-full border rounded p-3"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800"
          >
            {loading ? 'Posting...' : 'Create Blog Post'}
          </button>
          {message && <p className="text-sm mt-2">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default BlogAdmin;
