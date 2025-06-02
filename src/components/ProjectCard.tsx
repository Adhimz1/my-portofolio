// src/components/ProjectCard.tsx
'use client'; // Jika ada interaksi atau hook, jika tidak bisa dihapus

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/libs/data'; // Pastikan path ke tipe Project benar

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800/90 rounded-xl shadow-lg dark:shadow-2xl overflow-hidden transform hover:scale-[1.03] transition-all duration-300 ease-out border border-slate-200 dark:border-gray-700/80 hover:shadow-sky-300/40 dark:hover:shadow-sky-500/20 group">
      <div className="relative w-full h-52 sm:h-56 overflow-hidden"> {/* Pastikan gambar tidak meluber */}
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill // Menggunakan fill agar gambar responsif terhadap parent
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Sesuaikan jika perlu
          quality={80} // Kualitas gambar
        />
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-grow"> {/* flex-grow agar konten mengisi ruang */}
        <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-slate-800 dark:text-sky-400 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow min-h-[4.5rem] max-h-20 overflow-y-auto custom-scrollbar">
          {/* min-h-[4.5rem] untuk memastikan setidaknya 3 baris teks, max-h-20 untuk membatasi */}
          {project.description}
        </p>
        <div className="mb-4 mt-auto flex flex-wrap gap-2"> {/* mt-auto agar tag di bawah */}
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="inline-block bg-sky-100 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-start space-x-4 pt-3 border-t border-slate-200 dark:border-gray-700">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 hover:underline transition-colors duration-200"
            >
              Live Demo
            </Link>
          )}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-200 hover:underline transition-colors duration-200"
            >
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;