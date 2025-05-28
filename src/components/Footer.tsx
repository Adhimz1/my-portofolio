const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-6">
        <p>© {currentYear} Ahmad Fauzil Adhim. All rights reserved.</p>
        <p className="text-sm mt-1">
          Built with <span className="text-sky-400">Next.js</span> & <span className="text-teal-400">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;