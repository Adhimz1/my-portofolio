// Anda bisa menggunakan library seperti react-icons untuk ikon
// npm install react-icons
// import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-sky-400">Hubungi Saya</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="mailto:emailanda@example.com"
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center"
          >
            {/* <FaEnvelope className="mr-2" /> */}
            Kirim Email
          </a>
          <a
            href="https://linkedin.com/in/usernameanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 border border-sky-500 hover:border-sky-400 py-3 px-6 rounded-lg transition duration-300 flex items-center"
          >
            {/* <FaLinkedin className="mr-2" /> */}
            LinkedIn
          </a>
          <a
            href="https://github.com/usernameanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 border border-gray-600 hover:border-gray-500 py-3 px-6 rounded-lg transition duration-300 flex items-center"
          >
            {/* <FaGithub className="mr-2" /> */}
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;