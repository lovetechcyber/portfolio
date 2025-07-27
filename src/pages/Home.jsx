import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import bg from '../assets/bg.jpg';

const Home = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-32 px-6 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      <div className="relative z-10 text-center max-w-3xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          We don’t just build web apps—
          <span className="text-cyan-400">
            <TypeAnimation
              sequence={['we secure them.', 2000, 'we protect your future.', 2000, 'we build trust.', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Secure-by-design development and cybersecurity for startups, SMEs, and agencies.
        </p>
        <p className="text-base text-gray-300 mb-10 leading-relaxed">
          At LoveTechCyber, we don’t wait for attacks to happen—we build digital experiences with security
          baked in. From web development to DevSecOps pipelines and compliance audits, we deliver modern,
          safe, and scalable solutions to power your business securely.
        </p>

        <div className="flex justify-center space-x-4">
          <Link to="/contact" className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Get Started Securely
          </Link>
          <Link to="/services" className="border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-blue-900 transition">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
