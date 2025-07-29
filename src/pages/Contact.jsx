import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('https://portfolio-e6og.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setResponse('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponse(`❌ Error: ${result.message}`);
      }
    } catch (err) {
      setResponse('❌ Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600">
          Have a project in mind or want a free security health check? Send us a message.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-md p-8 rounded-xl space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full border border-gray-300 rounded-lg p-3"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {response && (
          <p className={`text-sm text-center ${response.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {response}
          </p>
        )}
      </form>

      <div className="text-center mt-10">
        <p>
          Or email us directly:{" "}
          <a href="mailto:lovetechcyb@gmail.com" className="text-blue-700 underline">
            lovetechcyb@gmail.com
          </a>
        </p>
        <p>
          Connect on LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/prince-okwubali-52b4021b0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            Prince Okwubali
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
