import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    summary: '',
    content: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('https://portfolio-e6og.onrender.com/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('✅ Post created!');
        setFormData({ title: '', slug: '', summary: '', content: '' });
      } else {
        if (res.status === 401) {
          setMessage('Session expired. Please log in again.');
          localStorage.removeItem('admin_token');
          navigate('/admin/login');
        } else {
          setMessage('❌ ' + (data.message || 'Something went wrong.'));
        }
      }
    } catch (err) {
      setMessage('❌ Server error.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-800">📝 Blog Admin</h2>
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 underline"
          >
            Logout
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-xl">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded p-3"
          />
          <input
            type="text"
            name="slug"
            placeholder="Slug (e.g. my-first-post)"
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
            placeholder="Content (markdown supported)"
            value={formData.content}
            onChange={handleChange}
            required
            rows={8}
            className="w-full border rounded p-3"
          />
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800"
          >
            Publish
          </button>
          {message && <p className="text-sm mt-2 text-blue-700">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default BlogAdmin;
