const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} LoveTechCyber. All rights reserved.</p>
      <p>Contact: <a href="mailto:lovetechcyb@gmail.com" className="underline">lovetechcyb@gmail.com</a></p>
    </footer>
  );
};

export default Footer;
