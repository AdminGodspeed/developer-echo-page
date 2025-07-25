
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Task Management App",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    description: "Collaborative task management tool with real-time updates and team features.",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    description: "Data visualization dashboard with interactive charts and real-time metrics.",
    techStack: ["React", "D3.js", "Python", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Mobile Banking App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    description: "Secure mobile banking application with biometric authentication.",
    techStack: ["React Native", "Node.js", "AWS"],
    link: "#"
  },
];

export const ProjectsSection = () => {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">My Projects</h2>
        <p className="text-gray-300 text-lg">A showcase of my recent work and technical expertise</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link key={index} to={`/project/${index + 1}`} className="block">
            <Card className="bg-gray-800 shadow-sm border-0 rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300 h-full cursor-pointer hover:border-none">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-primary text-dark text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
