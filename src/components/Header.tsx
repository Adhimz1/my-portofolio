import Link from 'next/link';
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900/80 border-b border-gray-800 shadow-lg backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 transition-all duration-300 flex items-center"
        >
          <span className="relative">
            Adhimz
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {[
            { href: '/#about', label: 'Tentang' },
            { href: '/#projects', label: 'Proyek' },
            { href: '/#skills', label: 'Keahlian' },
            { href: '/#contact', label: 'Kontak' }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-gray-300 hover:text-white px-1 py-2 text-sm font-medium transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          
          <Link 
            href="/resume" 
            className="ml-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-md hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-sky-500/20"
          >
            Resume
          </Link>
        </div>

        {/* Mobile menu button (optional) */}
        <button className="md:hidden text-gray-300 hover:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;