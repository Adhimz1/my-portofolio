// src/app/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Buttontest from '@/components/ButtonFullBlue';
import SkillsComponent from '@/components/SkillsCard';
import ProjectCard from '@/components/ProjectCard';
import { projectsData, skillsData } from '@/libs/data';

export default function HomePage() {
  // Animation variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };
  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.1 } },
  };

  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme after mount
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Only set dark mode if explicitly stored or system preference (no default)
    const initialDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);
    setDarkMode(initialDarkMode);
    
    // Apply to HTML element
    const root = document.documentElement;
    if (initialDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  // Update dark mode class and localStorage when state changes
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Show loading state until mounted
  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-500 dark:border-sky-400"></div>
      </div>
    );
  }

  return (
    <>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-5 left-5 z-[999] p-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full shadow-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 focus-visible:ring-sky-500"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <SunIcon className="w-5 h-5 text-yellow-400" />
        ) : (
          <MoonIcon className="w-5 h-5 text-sky-500" />
        )}
      </button>

      {/* Wrapper for BackgroundBeams */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-[140vh] md:h-[120vh] -z-10 pointer-events-none">
          <BackgroundBeams className="w-full h-full" />
        </div>

        {/* Hero Section */}
        <section
          id="hero"
          className="py-16 md:py-24 text-center relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
        >
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="flex flex-col items-center justify-center"
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-8 group"
                variants={heroImageVariants}
              >
                <Image
                  src="/me.png"
                  alt="Profile Photo Adhim"
                  fill
                  className="rounded-full object-cover object-center border-4 border-sky-300 dark:border-sky-500/40 shadow-2xl shadow-sky-400/30 dark:shadow-sky-500/20 group-hover:scale-105 group-hover:shadow-sky-500/40 dark:group-hover:shadow-sky-400/40 transition-all duration-300"
                  priority
                  quality={85}
                  sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, 16rem"
                />
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 dark:from-sky-400 dark:via-cyan-400 dark:to-blue-500 leading-tight py-1"
                variants={heroItemVariants}
              >
                Hello, I&apos;m <span className="text-sky-600 dark:text-sky-300">Adhim</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
                variants={heroItemVariants}
              >
                A passionate Web Developer building modern and responsive web applications.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center"
                variants={heroItemVariants}
              >
                <Buttontest href="/#projects">My Projects</Buttontest>
                <a
                  href="#contact"
                  className="border border-sky-500 dark:border-sky-500 text-sky-600 dark:text-sky-400 hover:bg-sky-500/10 dark:hover:bg-sky-500/15 hover:text-sky-700 dark:hover:text-sky-300 font-semibold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:-translate-y-1 inline-block"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-12 md:py-16 relative group"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-8 text-center"
                variants={heroItemVariants}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500">
                  About Me
                </span>
                <div className="w-20 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-600 mx-auto mt-3 rounded-full" />
              </motion.h2>

              <motion.div
                className="bg-white dark:bg-gray-800/60 dark:backdrop-blur-md border border-gray-200 dark:border-gray-700/70 rounded-xl p-6 md:p-8 space-y-4 shadow-lg dark:shadow-xl"
                variants={heroItemVariants}
              >
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I&apos;m an experienced <span className="text-sky-600 dark:text-sky-400 font-medium">Full-stack Developer</span> building innovative digital solutions. Proficient in <span className="text-sky-600 dark:text-sky-400">React</span>, <span className="text-sky-600 dark:text-sky-400">Next.js</span>, and <span className="text-sky-600 dark:text-sky-400">Node.js</span>.
                </p>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Focused on writing <span className="text-sky-600 dark:text-sky-400">well-structured</span> and <span className="text-sky-600 dark:text-sky-400">high-performance</span> code with strong emphasis on optimal user experience.
                </p>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Active in <span className="text-sky-600 dark:text-sky-400">open-source</span> and continuously developing skills to stay relevant in the dynamic industry.
                </p>
              </motion.div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600/80 rounded-lg py-2.5 px-3 text-center hover:bg-gray-200 dark:hover:bg-sky-800/40 hover:border-sky-400 dark:hover:border-sky-500/60 transition-all duration-200 shadow-sm hover:shadow-md"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.07 }}
                  >
                    <span className="text-sky-700 dark:text-sky-400 text-sm font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-16 bg-gray-100 dark:bg-gray-900/70"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={heroItemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500">
              My Projects
            </span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-600 mx-auto mt-3 rounded-full" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          {projectsData.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-400 mt-10">
              Projects will be added soon.
            </p>
          )}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-md"
      >
        <SkillsComponent skills={skillsData} />
        <div id="skills" className="sr-only"></div>
      </motion.div>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 bg-gray-100 dark:bg-gray-900/70"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-sky-600 dark:text-sky-400"
            variants={heroItemVariants}
          >
            Contact Me
            <div className="w-20 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-600 mx-auto mt-3 rounded-full" />
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto text-lg"
            variants={heroItemVariants}
          >
            Interested in collaboration or have questions? Feel free to reach out.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {[
              { href: "mailto:ahmadadhim01@gmail.com", text: "Send Email", style: "bg-sky-500 hover:bg-sky-600 text-white dark:bg-sky-600 dark:hover:bg-sky-700" },
              { href: "https://linkedin.com/in/usernameanda", text: "LinkedIn", style: "text-sky-600 border-sky-500 hover:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500 dark:hover:bg-sky-500/15 dark:hover:text-sky-300 border" },
              { href: "https://github.com/Adhimz1", text: "GitHub", style: "text-gray-700 border-gray-500 hover:bg-gray-500/10 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700/40 dark:hover:text-gray-100 border" },
            ].map((link, index) => (
              <motion.a
                key={link.text}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : "_self"}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-base min-w-[150px] shadow-md hover:shadow-lg ${link.style}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
              >
                {link.text}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}