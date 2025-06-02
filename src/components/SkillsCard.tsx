// src/components/SkillsCard.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Skill } from '@/libs/data';

interface SkillsProps {
  skills: Skill[];
  className?: string;
  id?: string;
}

export default function Skills({ skills, className = '', id = "skills" }: SkillsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      id={id}
      // Background section diatur di page.tsx atau wrapper div jika digunakan di sana
      // Jika komponen ini dipakai mandiri, tambahkan bg di sini:
      // className={`py-16 md:py-20 bg-slate-50 dark:bg-gray-800/60 dark:backdrop-blur-md ${className}`}
      className={`py-16 md:py-20 ${className}`} // className dari prop akan menentukan background
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-center text-slate-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500">
            My Skills
          </span>
          <div className="w-20 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-600 mx-auto mt-3 rounded-full" />
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-5 place-items-center"
          variants={containerVariants}
          initial="hidden" // Akan di-trigger oleh whileInView parent section
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Picu sedikit lebih awal untuk kartu
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="group relative flex flex-col items-center p-3 bg-white dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700/70 rounded-xl shadow-md hover:shadow-sky-300/50 dark:hover:shadow-sky-500/25 transition-all duration-300 ease-out transform hover:-translate-y-1.5 w-full max-w-[120px] aspect-square justify-center"
              // Tambah w-full max-w-[120px] aspect-square justify-center untuk ukuran yang lebih terkontrol dan konsisten
              variants={skillItemVariants}
              whileHover={{ scale: 1.08, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 350, damping: 12 }}
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-1.5 sm:mb-2 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100/70 to-blue-100/70 dark:from-sky-700/30 dark:to-blue-700/30 opacity-40 dark:opacity-25 rounded-full group-hover:opacity-60 dark:group-hover:opacity-40 transition-opacity duration-300 blur-xs group-hover:blur-[1px]"></div>
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={36} // Ukuran render gambar ikon disesuaikan
                  height={36}
                  className="object-contain relative z-[1] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.3)] dark:group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]"
                />
              </div>
              <span className="text-[11px] sm:text-xs md:text-sm font-medium text-center text-slate-600 dark:text-sky-300 group-hover:text-sky-600 dark:group-hover:text-sky-100 transition-colors duration-300 tracking-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {skills.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            Skills list will be updated soon.
          </p>
        )}
      </div>
    </motion.section>
  );
}