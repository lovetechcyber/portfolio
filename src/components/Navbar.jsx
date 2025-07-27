import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-800">LoveTechCyber</Link>
      <ul className="flex space-x-6 text-blue-900 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/roadmap">Roadmap</Link></li>
        <li><Link to="/industries">Industries</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
