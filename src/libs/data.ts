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
    title: 'Food Ordering Application',
    description: 'A web application for ordering food online.',
    imageUrl: '/mangoman.png', // Make sure the image exists in public/images/
    liveUrl: '#',
    repoUrl: '#',
    tags: ['PHP Native', 'CSS', 'Javascript'],
  },
  // Add more projects here
];

export const skillsData: Skill[] = [
    { id: 1, icon: '/icons/photoshop.png', name: '' },
  // Tambahkan skill lainnya dengan path icon sesuai nama file di public/icons/
];
