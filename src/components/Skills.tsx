import { skillsData } from '@/libs/data'; // Impor data keahlian

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-800 rounded-lg shadow-xl my-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-sky-400">Keahlian Saya</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-700 text-sky-300 py-2 px-5 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300"
            >
              <span className="font-medium">{skill.name}</span>
              {/* {skill.level && <span className="text-xs text-gray-400 ml-2">({skill.level})</span>} */}
            </div>
          ))}
        </div>
        {skillsData.length === 0 && (
            <p className="text-center text-gray-400">
                Daftar keahlian akan segera diperbarui.
            </p>
        )}
      </div>
    </section>
  );
};

export default Skills;