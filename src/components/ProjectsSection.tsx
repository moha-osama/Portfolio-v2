import { motion } from 'motion/react';
import { ExternalLink, Github, Linkedin, Mail, FileText, Code } from 'lucide-react';
// Social links for use in socials
const socialLinks = [
  {
    label: "github",
    icon: Github,
    link: "https://github.com/moha-osama",
  },
  {
    label: "linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/mohamed-osama-4a38a0206/",
  },
  {
    label: "resume",
    icon: FileText,
    link: "https://drive.google.com/file/d/1pQoI4FPvK6Jr5SKrKt1fl2JP50Df8glX/view?usp=drive_link",
  },
  {
    label: "mail",
    icon: Mail,
    link: "mailto:zmuhamedosama@gmail.com",
  },
];

const projects = [
  {
    id: 1,
    title: "Neural Network Visualizer",
    description: "Interactive web application for visualizing neural network architectures and training processes in real-time.",
    tech: ["React", "Three.js", "TensorFlow.js", "WebGL"],
    image: "ai neural network",
    github: "#",
    live: "#",
    status: "completed"
  },
  {
    id: 2,
    title: "Quantum Dashboard",
    description: "Real-time monitoring dashboard for quantum computing systems with cyberpunk-inspired design.",
    tech: ["Next.js", "D3.js", "WebSockets", "Redis"],
    image: "quantum computing dashboard",
    github: "#",
    live: "#",
    status: "in-progress"
  },
  {
    id: 3,
    title: "Blockchain Explorer",
    description: "Decentralized application for exploring blockchain transactions with advanced analytics.",
    tech: ["Vue.js", "Web3.js", "Ethereum", "GraphQL"],
    image: "blockchain technology",
    github: "#",
    live: "#",
    status: "completed"
  },
  {
    id: 4,
    title: "Cybersecurity Hub",
    description: "Comprehensive security monitoring platform with threat detection and visualization.",
    tech: ["Python", "Django", "Docker", "Elasticsearch"],
    image: "cybersecurity monitoring",
    github: "#",
    live: "#",
    status: "planning"
  }
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
            <span className="text-white ml-2">projects.json</span>
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

        {/* Project image placeholder with neon effect */}
        <div className="relative mb-6 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#00d4ff]/20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-transparent to-[#8a2be2]/10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 border-2 border-[#00ffff] rounded-lg flex items-center justify-center">
                <Code size={32} className="text-[#00ffff]" />
              </div>
              <p className="text-xs text-gray-400 font-mono">{project.image}</p>
            </div>
          </div>
          
          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-[#00d4ff]/20 to-transparent"
          />
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