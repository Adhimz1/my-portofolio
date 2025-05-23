import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="py-20 text-center">
      <div className="container mx-auto px-6">
        {/* Ganti dengan path gambar profil Anda */}
        <Image
          src="/images/profile.jpg" // Pastikan ada gambar ini di public/images/
          alt="Foto Profil Nama Anda"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 border-4 border-sky-500"
          priority // Penting untuk LCP
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