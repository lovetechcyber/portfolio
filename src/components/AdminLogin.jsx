import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://portfolio-e6og.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('admin_token', data.token);
        navigate('/admin/blog');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-xl">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border rounded p-3" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded p-3" required />
          <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded hover:bg-blue-700">Login</button>
          {error && <p className="text-red-600 text-sm mt-2 text-center">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
