import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/libs/data'; // <--- Perubahan di sini: lib -> libs

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={500}
        height={300}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3 text-sky-400">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="mb-4">
          {project.tags.map((tag: string) => ( // <--- Tambahkan tipe 'string' untuk tag
            <span
              key={tag}
              className="inline-block bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-sky-300 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-start space-x-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-300 font-medium transition duration-300"
            >
              Lihat Langsung
            </Link>
          )}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 font-medium transition duration-300"
            >
              Kode Sumber
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;