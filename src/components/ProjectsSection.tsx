import { motion } from 'motion/react';
import { ExternalLink, Github, Code } from 'lucide-react';

import cardImage from '/img/car-showcase.webp';
import dreamBilll from '/img/dreambill.webp';
import jewelry from '/img/jewelry.webp';
import nuiq from '/img/nuiq.webp';
import shoestore from '/img/shoestore.webp';

const projects = [
  {
    id: 2,
    title: "Dreambill",
    description: "With DreamBill, you can easily create and manage your invoices, track your payments, and get a clear overview of your expenses.",
    tech: ["Next.js", "TypeScript", "WebSockets", "Tailwind CSS", 'ANT Design'],
    image: dreamBilll,
    github: "https://github.com/moha-osama/DreamBill",
    live: "https://www.dreambill.io/",
    status: "completed"
  },
  {
    id: 4,
    title: "Nuiq",
    description: "automatic therapy notes writer.",
    tech: ["PHP", "Javascript", "XAMPP", "Bootstrap", "jQuery", "MySQL", "HTML", "CSS", "Rest APIs"],
    image: nuiq,
    github: "#",
    live: "https://nuiq.com/",
    status: "in-progress"
  },
  {
    id: 6,
    title: "Shoe Store",
    description: "automatic therapy notes writer.",
    tech: ["React JS","React Router","Redux","Tailwind CSS"],
    image: shoestore,
    github: "https://github.com/moha-osama/Shoe-Store",
    live: "https://shoe-store-moha-osama.vercel.app/",
    status: "completed"
  },
  {
    id: 1,
    title: "Cars Showcase",
    description: "The Next.js Cars Showcase is a frontend application that displays a collection of cars and their details. This application is built using Next.js for server-side rendering.",
    tech: ["Next.js","HeadlessUI", "Tailwind CSS", "TypeScript"],
    image: cardImage,
    github: "https://github.com/moha-osama/car_showcase",
    live: "https://car-showcase-jade.vercel.app/",
    status: "completed"
  },
  {
    id: 3,
    title: "Jewelry Store",
    description: "Responsive online jewelry store built in reactJs, The goal of this project was to create an easy-to-use and visually appealing e-commerce website for buying jewelry.",
    tech: ["React JS","React Router","Redux","React Slick library","REST APIs"],
    image: jewelry,
    github: "https://github.com/moha-osama/Jewelry-Store",
    live: "https://jewelry-store-demo-app.netlify.app/",
    status: "completed"
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">
            <span className="text-[#00d4ff] font-mono">{'>'}</span>
            <span className="text-white ml-2 text-3xl font-normal sm:text-4xl">projects.json</span>
          </h2>
          <p className="text-gray-400 font-mono">showcasing innovative solutions and cutting-edge technologies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#00ffff';
      case 'in-progress': return '#00d4ff';
      case 'planning': return '#8a2be2';
      default: return '#ff0080';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="glassmorphism rounded-xl p-6 h-full border border-[#00d4ff]/30 hover:border-[#00d4ff]/60 transition-all duration-300 overflow-hidden">
        {/* Status indicator */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: getStatusColor(project.status) }}
            ></div>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              {project.status.replace('-', ' ')}
            </span>
          </div>
          <Code size={20} className="text-[#8a2be2]" />
        </div>

        {/* Project image with overlay */}
        <div className="relative mb-6 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#00d4ff]/20">
          {/* Display actual image if available, otherwise show placeholder */}
          {typeof project.image === 'string' && !project.image.startsWith('/') && !project.image.includes('.') ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-transparent to-[#8a2be2]/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 border-2 border-[#00ffff] rounded-lg flex items-center justify-center">
                    <Code size={32} className="text-[#00ffff]" />
                  </div>
                  <p className="text-xs text-gray-400 font-mono">{project.image}</p>
                </div>
              </div>
            </>
          ) : (
            // Actual image display
            <>
              <img loading="lazy" 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-top transform scale-105 group-hover:scale-100 transition-transform duration-300"
              />
              {/* Base overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Colorful tech overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 via-transparent to-[#8a2be2]/20 opacity-60"></div>
            </>
          )}
          
          {/* Default overlay - shown by default, hidden on card hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00d4ff]/40 via-[#00d4ff]/20 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl text-white group-hover:text-[#00d4ff] transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-mono bg-[#1a1a2e] border border-[#8a2be2]/30 rounded-full text-[#8a2be2] hover:border-[#8a2be2]/60 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex space-x-4 pt-4">
            <motion.a
              href={project.github}
              className="flex items-center space-x-2 text-[#00ffff] hover:text-white transition-colors duration-300"
            >
              <Github size={18} />
              <span className="text-sm font-mono">code</span>
            </motion.a>
            
            <motion.a
              href={project.live}
              className="flex items-center space-x-2 text-[#00d4ff] hover:text-white transition-colors duration-300"
            >
              <ExternalLink size={18} />
              <span className="text-sm font-mono">demo</span>
            </motion.a>
          </div>
        </div>

        {/* Glowing corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#00d4ff]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};