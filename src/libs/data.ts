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
  name: string;
  id: number;
  icon: string; // Path ke file gambar/icon di public/icons/
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Spareparts shop',
    description: 'A spare parts shop provides a variety of components and accessories needed to repair or maintain vehicles and machinery.',
    imageUrl: '/toko-sparepart.png', // Make sure the image exists in public/images/
    liveUrl: 'https://toko.adhimz.tech/',
    repoUrl: '#',
    tags: ['Laravel', 'Tailwind', 'Javascript','MySQL'],
  },
  {
    id: 2,
    title: 'Food Ordering Application',
    description: 'A web application for ordering food online.',
    imageUrl: '/mangoman.png', // Make sure the image exists in public/images/
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  // Add more projects here
];

export const skillsData: Skill[] = [
  { id: 1, icon: '/icons/photoshop.png', name: 'Photoshop' },
  { id: 2, icon: '/icons/Canva_Logo.svg.png', name: 'Canva' },
  { id: 3, icon: '/icons/figma-logo-logo.png', name: 'Figma' },
  { id: 4, icon: '/icons/corel.png', name: 'CorelDRAW' },
  { id: 5, icon: '/icons/HTML5_logo_and_wordmark.svg.png', name: 'HTML5' },
  { id: 6, icon: '/icons/Official_CSS_Logo.svg.png', name: 'CSS3' },
  { id: 7, icon: '/icons/JavaScript-logo.png', name: 'JavaScript' },
  { id: 8, icon: '/icons/MySQL_logo.svg.png', name: 'MySQL' },
  { id: 9, icon: '/icons/Laravel.svg.png', name: 'Laravel' },
  { id: 10, icon: '/icons/React-icon.svg', name: 'React' },
  { id: 11, icon: '/icons/nextjs.svg', name: 'Next.js' },
  { id: 12, icon: '/icons/Tailwind_CSS_Logo.svg', name: 'Tailwind CSS' },
  // Tambahkan skill lainnya dengan path icon sesuai nama file di public/icons/
];
