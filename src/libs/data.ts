// src/lib/data.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // path relatif dari /public
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
}

export interface Skill {
  id: number;
  name: string;
  icon: string; // Path ke file gambar/icon di public/icons/
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Aplikasi Pemesanan Makanan',
    description: 'Sebuah aplikasi web untuk memesan makanan secara online.',
    imageUrl: '/mangoman.png', // Pastikan gambar ada di public/images/
    liveUrl: '#',
    repoUrl: '#',
    tags: ['PHP Native', 'CSS', 'Javascript'],
  },
  // Tambahkan proyek lain di sini
];

export const skillsData: Skill[] = [
  { id: 1, name: 'PHOTOSHOP', icon: '/icons/photoshop.png' },
  // Tambahkan skill lainnya dengan path icon sesuai nama file di public/icons/
];
