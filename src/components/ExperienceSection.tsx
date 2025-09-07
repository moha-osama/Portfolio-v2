import { motion } from 'motion/react';
import { Calendar, MapPin, Building, Play } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "gamp.ai",
    role: "Frontend Developer",
    period: "October 2023 - Present",
    location: "Remote",
    description: "Contributed to the development of the SaaS platform Nuiq. Designed and developed UI components, increasing target audience engagement by 12%, and implemented effective web solutions to manage over 2000 transcriptions per day. Developed a highly interactive video player and editor Mogul.",
    technologies: ["React", "TypeScript", "Video Processing", "SaaS"],
    color: "#00d4ff",
    isCurrentPosition: true
  },
  {
    id: 2,
    company: "Egyptian General Petroleum Corporation",
    role: "IT Training",
    period: "July 2023 - August 2023",
    location: "Egypt",
    description: "Gained a deep understanding of multi-layered security systems, network security, and firewall configuration. Learned about designing and maintaining network infrastructures for real-time data needs, improving disaster recovery planning, and business continuity strategies.",
    technologies: ["Network Security", "Firewall Configuration", "Infrastructure", "Security Systems"],
    color: "#8a2be2",
    isCurrentPosition: false
  },
  {
    id: 3,
    company: "skyscanner",
    role: "Frontend Developer",
    period: "February 2023 - March 2023",
    location: "Remote",
    description: "Developed a Datepicker component in Backpack, a collection of design resources, reusable components, and guidelines for creating Skyscanner's products.",
    technologies: ["React", "Component Library", "Design Systems", "JavaScript"],
    color: "#00ffff",
    isCurrentPosition: false
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-background opacity-5"></div>
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
            <span className="text-white ml-2 text-3xl font-normal sm:text-4xl">work_experience.log</span>
          </h2>
          <p className="text-gray-400 font-mono">my professional journey and contributions</p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <ExperienceCard key={experience.id} experience={experience} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Career Summary */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto glassmorphism rounded-xl p-8 border border-[#00d4ff]/30"
        >
          <div className="font-mono text-sm space-y-2">
            <div className="text-[#00d4ff]">$ ./career_summary.sh</div>
            <div className="text-gray-300 mt-4">
              <span className="text-[#00ffff]">Total Experience:</span> 2+ years in web development
            </div>
            <div className="text-gray-300">
              <span className="text-[#8a2be2]">Specialization:</span> Frontend development, UI components, and system security
            </div>
            <div className="text-gray-300">
              <span className="text-[#ff0080]">Impact:</span> 12% engagement increase, 2000+ daily transcriptions processed
            </div>
            <div className="text-gray-400 mt-4 pt-2 border-t border-gray-700">
              <span className="text-green-400">Status:</span> Currently contributing at gamp.ai
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative flex items-start space-x-8"
    >

      {/* Content card */}
      <motion.div
        whileHover={{ y: -5 }}
        className="flex-1 glassmorphism rounded-xl p-6 border border-gray-700 hover:border-opacity-60 transition-all duration-300 group"
        style={{ borderColor: `${experience.color}30` }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Building size={20} style={{ color: experience.color }} />
              <h3 className="text-xl text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                {experience.company}
              </h3>
            </div>
            <p className="text-lg" style={{ color: experience.color }}>
              {experience.role}
            </p>
          </div>
          
          <div className="text-sm text-gray-400 font-mono mt-2 md:mt-0 md:text-right">
            <div className="flex items-center space-x-2 mb-1">
              <Calendar size={14} />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="space-y-2">
          <div className="text-sm text-gray-400 font-mono">
            <span style={{ color: experience.color }}>$</span> tech_stack.list()
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech:any, i:any) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                viewport={{ once: true }}
                className="px-3 py-1 text-xs font-mono rounded-full border transition-colors duration-300"
                style={{ 
                  borderColor: `${experience.color}40`,
                  backgroundColor: `${experience.color}10`,
                  color: experience.color
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, ${experience.color}, transparent)`
          }}
        />

        {/* Corner glow */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            background: `linear-gradient(225deg, ${experience.color}40 0%, transparent 70%)`
          }}
        />
      </motion.div>
    </motion.div>
  );
};