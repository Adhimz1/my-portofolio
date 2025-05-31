// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Nilai awal tidak penting, akan di-override
  const [isMounted, setIsMounted] = useState(false); // Untuk mencegah rendering sebelum tema diketahui

  // Efek untuk memuat tema dari localStorage/sistem dan menandai komponen sudah di-mount
  useEffect(() => {
    setIsMounted(true);
    // const storedTheme = localStorage.getItem('theme');
    // Tidak perlu set kelas di sini jika script di layout.tsx sudah benar
    // dan kita hanya ingin state komponen sinkron dengan <html>
    // cukup baca dari <html>
    const rootHasDarkClass = document.documentElement.classList.contains('dark');
    setDarkMode(rootHasDarkClass);

  }, []);

  // Efek untuk mengubah tema saat state darkMode berubah
  useEffect(() => {
    if (!isMounted) return; // Jangan jalankan jika belum di-mount

    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, isMounted]);


  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const navItems = [
    { href: '/#about', label: 'About' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint Tailwind
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 shadow-md dark:shadow-lg backdrop-blur-sm sticky top-0 z-[990] transition-colors duration-300">
      <nav className="container mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-500 hover:opacity-80 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Adhimz
        </Link>

        <div className="flex items-center">
          {/* Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-white px-1 py-2 text-sm font-medium transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-sky-500 dark:bg-sky-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Tombol Toggle Dark Mode */}
          {isMounted && ( // Hanya render tombol jika komponen sudah di-mount dan tema diketahui
            <button
              onClick={toggleDarkMode}
              className="p-2 ml-4 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-sky-500" />
              )}
            </button>
          )}
          {!isMounted && ( // Placeholder untuk tombol tema saat belum mounted
             <div className="p-2 ml-4 w-[36px] h-[36px]"></div> // Sesuaikan ukuran agar layout tidak bergeser
          )}


          {/* Tombol Hamburger untuk Mobile */}
          <div className="md:hidden ml-2">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile Dropdown */}
      <motion.div
        id="mobile-menu"
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm absolute w-full shadow-lg`}
        initial={{ opacity: 0, y: -20 }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              onClick={toggleMobileMenu} // Tutup menu saat item diklik
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;