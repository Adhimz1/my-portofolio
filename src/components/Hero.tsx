import Image from 'next/image';
import React from 'react';
import { BackgroundBeams } from './ui/background-beams';

const Hero = () => {
  return (
    <section id="hero" className="py-16 md:py-24 text-center relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* BackgroundBeams as background */}
        <div className="absolute inset-0 -z-10">
          <BackgroundBeams />
        </div>
        
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 group">
            <Image
              src="/me.png"
              alt="Foto Profil Adhim"
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
            Halo, saya <span className="text-sky-400">Adhim</span>
            </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Seorang Web Developer yang bersemangat membangun aplikasi web modern dan responsif.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-sky-500/30"
            >
              Lihat Proyek Saya
            </a>
            <a
              href="#contact"
              className="border border-sky-400 text-sky-400 hover:bg-sky-400/10 font-bold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:-translate-y-1"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;