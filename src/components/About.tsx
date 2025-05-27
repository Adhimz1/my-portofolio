import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-14 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 to-gray-900/50 rounded-xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
              Tentang Saya
            </span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-3 rounded-full" />
          </h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 md:p-8 space-y-4">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Saya seorang <span className="text-sky-400 font-medium">Full-stack Developer</span> berpengalaman dalam membangun solusi digital inovatif. Menguasai <span className="text-sky-400">React</span>, <span className="text-sky-400">Next.js</span>, dan <span className="text-sky-400">Node.js</span>.
            </p>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Fokus saya pada kode yang <span className="text-sky-400">terstruktur</span> dan <span className="text-sky-400">berkinerja tinggi</span>, dengan penekanan kuat pada pengalaman pengguna yang optimal.
            </p>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Aktif dalam <span className="text-sky-400">open-source</span> dan terus mengembangkan skill untuk tetap relevan di industri yang dinamis.
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
  );
};

export default About;