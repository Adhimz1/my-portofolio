import ProjectCard from './ProjectCard';
import { projectsData } from '@/libs/data'; // Impor data proyek

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-sky-400">Proyek Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projectsData.length === 0 && (
            <p className="text-center text-gray-400">
                Proyek akan segera ditambahkan.
            </p>
        )}
      </div>
    </section>
  );
};

export default Projects;