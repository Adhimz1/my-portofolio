import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-sky-400 hover:text-sky-300">
          Adhimz
        </Link>
        <div className="space-x-4">
          <Link href="/#about" className="text-gray-300 hover:text-sky-400">Tentang</Link>
          <Link href="/#projects" className="text-gray-300 hover:text-sky-400">Proyek</Link>
          <Link href="/#skills" className="text-gray-300 hover:text-sky-400">Keahlian</Link>
          <Link href="/#contact" className="text-gray-300 hover:text-sky-400">Kontak</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;