import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectModal } from './ProjectModal';

import makatiImage from '@/assets/makati1.png';
import makatiImage2 from '@/assets/makati2.png';
import makatiImage3 from '@/assets/makati3.png';
import makatiImage4 from '@/assets/makati4.png';

import furvyImage from '@/assets/furvy1.png';
import furvyImage2 from '@/assets/furvy2.png';
import furvyImage3 from '@/assets/furvy3.png';
import furvyImage4 from '@/assets/furvy4.png';

import awosImage from '@/assets/abomar-thesis.png';
import awosImage2 from '@/assets/abomar-thesis-2.png';
import awosImage3 from '@/assets/abomar-thesis-3.png';
import awosImage4 from '@/assets/abomar-thesis-4.png';

import paradiseImage from '@/assets/paradise.png';
import paradiseImage2 from '@/assets/paradise1.png';
import paradiseImage3 from '@/assets/paradise2.png';
import paradiseImage4 from '@/assets/paradise3.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tech: string[];
  demoUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Makati AIS',
    description: "Makati City Hall Accounting Department's Accounting Information System",
    fullDescription: 'Accounting Information System (AIS): A robust financial management solution built on the Laravel/PHP, MySQL, and Vue.js stack, designed to streamline all core accounting processes. It is deployed on an Ubuntu server environment.',
    image: makatiImage,
    images: [
      makatiImage2,
      makatiImage3,
      makatiImage4,
    ],
    tech: ['Vue JS', 'Laravel', 'HTML5', 'TailwindCSS', 'MySQL'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Furvy',
    description: 'Furvy, Software-as-a-Service for Veterinary Clinics',
    fullDescription: 'Furvy is a comprehensive, full-stack web and mobile application developed during my freelance career to streamline veterinary management. It provides clinics with a complete toolkit, including POS integration, appointment scheduling, user and inventory management, detailed reporting, and a centralized inbox, ensuring an efficient and user-friendly experience. Built with PHP (Laravel), JavaScript, Tailwind CSS, HTML, and CSS, Furvy is reliably hosted on Hostinger.',
    image: furvyImage,
    images: [
      furvyImage2,
      furvyImage3,
      furvyImage4,
    ],
    tech: ['Laravel', 'HTML5', 'TailwindCSS', 'Javascript', 'MySQL'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Paradise Connect',
    description: 'Paradise Connect, Hotel and Resort Management System',
    fullDescription: 'Paradise Connect is a complete Hotel and Resort Management System designed to streamline all aspects of hospitality operations. Developed during my freelance work, the system facilitates efficient guest management, reservation processing, billing, and housekeeping organization. It is built on a reliable stack featuring Laravel (PHP), JavaScript, and MySQL for the backend, with a clean interface styled using HTML5 and Tailwind CSS. The entire solution is reliably hosted on Hostinger.',
    image: paradiseImage,
    images: [
      paradiseImage2,
      paradiseImage3,
      paradiseImage4,
    ],
    tech: ['Laravel', 'HTML5', 'MySQL', 'Javascript', 'TailwindCSS'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'AWOS',
    description: 'Abomar Work Order System',
    fullDescription: 'Abomar Work Order System (AWOS) is a specialized application designed to streamline and automate the entire work order lifecycle. It enables efficient creation, assignment, tracking, and completion of tasks for field service or internal maintenance teams. Built with CodeIgniter (PHP), HTML5, and MySQL for robust functionality, and utilizing Firebase for real-time capabilities or user management, the system is hosted securely on the Google Cloud Platform (GCP).',
    image: awosImage3,
    images: [
      awosImage2,
      awosImage,
      awosImage4,
    ],
    tech: ['HTML5', 'CodeIgniter', 'MySQL', 'Firebase'],
    demoUrl: '#',
    repoUrl: '#',
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A selection of my recent work showcasing various skills and technologies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-glow"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
