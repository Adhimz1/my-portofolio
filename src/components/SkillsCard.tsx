// components/Skills.tsx
import Image from 'next/image';

interface Skill {
    id: number;
    name: string;
    icon: string;
}

interface SkillsProps {
    skills: Skill[];
    className?: string;
}

export default function Skills({ skills, className = '' }: SkillsProps) {
    return (
        <section
            id="skills"
            className={`py-16 bg-gray-800 rounded-lg shadow-xl my-12 ${className}`}
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-sky-400">
                    My Skills
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="group relative flex flex-col items-center"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-3 flex items-center justify-center transition-all duration-300 group-hover:bg-sky-900/20 group-hover:border-sky-500/50 group-hover:scale-105 shadow-md group-hover:shadow-sky-500/20">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={60}
                                    height={60}
                                    className="object-contain transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]"
                                />
                            </div>
                            <span className="text-sky-300/90 text-sm font-medium text-center tracking-wide transition-all duration-300 group-hover:text-sky-200 group-hover:font-semibold">
                                {skill.name}
                            </span>
                            <div className="absolute -top-2 -right-2 bg-sky-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                {skill.id}
                            </div>
                        </div>
                    ))}
                </div>
                {skills.length === 0 && (
                    <p className="text-center text-gray-400">
                        Daftar keahlian akan segera diperbarui.
                    </p>
                )}
            </div>
        </section>
    );
}