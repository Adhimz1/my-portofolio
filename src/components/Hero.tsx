import Image from 'next/image';
import React from 'react';
import { BackgroundBeams } from './ui/background-beams';

const Hero = () => {
  return (
    <section id="hero" className="py-20 text-center">
      <div className="container mx-auto px-6 relative overflow-hidden">
        {/* BackgroundBeams as background */}
        <div className="absolute inset-0 -z-10">
          <BackgroundBeams />
        </div>
        <Image
          src="/me.png"
          alt="Foto Profil Nama Anda"
          width={300}
          height={300}
          className="mx-auto mb-5"
          priority
        />
        <h1 className="text-5xl font-extrabold mb-4">
          Halo, saya <span className="text-sky-400">Adhim</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Seorang Web Developer yang bersemangat membangun aplikasi web modern dan responsif.
        </p>
        <a
          href="#projects"
          className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
        >
          Lihat Proyek Saya
        </a>
      </div>
    </section>
  );
};

export default Hero;