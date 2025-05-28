import Image from 'next/image';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { projectsData, skillsData } from '@/libs/data';
import ProjectCard from '@/components/ProjectCard';
import Buttontest from '@/components/ButtonFullBlue';
import Skills from '@/components/SkillsCard';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-24 text-center relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="absolute inset-0 -z-10">
            <BackgroundBeams />
          </div>

          <div className="flex flex-col items-center justify-center min-h-[70vh]">
            {/* Profile Photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 group">
              <Image
                src="/me.png"
                alt="Profile Photo"
                fill
                className="rounded-full object-cover object-center 
                          border-4 border-sky-400/30 shadow-xl shadow-sky-400/30 
                          group-hover:scale-105 transition-transform duration-300"
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 leading-tight py-1">
              Hello, I'm <span className="text-sky-400">Adhim</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              A passionate Web Developer building modern and responsive web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Buttontest href='/#projects'>My Projects</Buttontest>
              <a
                href="#contact"
                className="border border-sky-400 text-sky-400 hover:bg-sky-400/10 font-bold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-14 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 to-gray-900/50 rounded-xl -z-10" />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                About Me
              </span>
              <div className="w-20 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-3 rounded-full" />
            </h2>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 md:p-8 space-y-4">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I'm an experienced <span className="text-sky-400 font-medium">Full-stack Developer</span> building innovative digital solutions. Proficient in <span className="text-sky-400">React</span>, <span className="text-sky-400">Next.js</span>, and <span className="text-sky-400">Node.js</span>.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Focused on writing <span className="text-sky-400">well-structured</span> and <span className="text-sky-400">high-performance</span> code with strong emphasis on optimal user experience.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Active in <span className="text-sky-400">open-source</span> and continuously developing skills to stay relevant in the dynamic industry.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              {['React', 'Next.js', 'TypeScript', 'Node.js'].map((tech) => (
                <div
                  key={tech}
                  className="bg-gray-800/70 border border-gray-700 rounded-md py-2 px-3 text-center hover:bg-sky-900/20 transition-colors"
                >
                  <span className="text-sky-400 text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
              My Projects
              </span>
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {projectsData.length === 0 && (
            <p className="text-center text-gray-400">
              Projects will be added soon.
            </p>
          )}
        </div>
      </section>

      {/* Skills Section - Using the Skills Component */}
      <Skills 
        skills={skillsData}
        className="bg-gray-800/30 backdrop-blur-sm"
      />

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-sky-400">Contact Me</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Interested in collaboration or have questions? Feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:ahmadadhim01@gmail.com"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/usernameanda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 border border-sky-500 hover:border-sky-400 py-3 px-6 rounded-lg transition duration-300 flex items-center"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Adhimz1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 border border-gray-600 hover:border-gray-500 py-3 px-6 rounded-lg transition duration-300 flex items-center"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}