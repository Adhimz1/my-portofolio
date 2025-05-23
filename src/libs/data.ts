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
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'; // Opsional
  icon?: string; // Nama ikon jika menggunakan library ikon
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Aplikasi Pemesanan Makanan',
    description: 'Sebuah aplikasi web untuk memesan makanan secara online.',
    imageUrl: '/mangoman.png', // Pastikan gambar ada di public/images/
    liveUrl: '#',
    repoUrl: '#',
    tags: ['PHP Native', 'CSS', 'Javascript',],
  },
  
  // Tambahkan lebih banyak proyek di sini
];

export const skillsData: Skill[] = [
  { id: 1, name: 'HTML5', level: 'Expert' },
  { id: 2, name: 'CSS3 & Tailwind CSS', level: 'Expert' },
  { id: 3, name: 'JavaScript (ES6+)', level: 'Advanced' },
  { id: 4, name: 'TypeScript', level: 'Advanced' },
  { id: 5, name: 'React', level: 'Advanced' },
  { id: 6, name: 'Next.js', level: 'Advanced' },
  { id: 7, name: 'Node.js & Express', level: 'Intermediate' },
  { id: 8, name: 'Git & GitHub', level: 'Advanced' },
  { id: 9, name: 'REST APIs', level: 'Advanced' },
  // Tambahkan keahlian lainnya
];