const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-800 rounded-lg shadow-xl my-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-sky-400">Tentang Saya</h2>
        <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed space-y-4">
          <p>
            Saya adalah seorang pengembang web dengan pengalaman dalam menciptakan solusi digital yang inovatif dan efisien.
            Saya memiliki keahlian dalam teknologi front-end seperti React dan Next.js, serta back-end dengan Node.js dan Express.
          </p>
          <p>
            Saya selalu antusias untuk mempelajari teknologi baru dan menerapkannya dalam proyek-proyek yang menantang.
            Fokus utama saya adalah menghasilkan kode yang bersih, terstruktur, dan mudah dipelihara, sambil memastikan pengalaman pengguna yang optimal.
          </p>
          <p>
            Di luar coding, saya menikmati membaca buku tentang teknologi, berkontribusi pada proyek open-source, dan menjelajahi tren desain terbaru.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;