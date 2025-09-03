import { motion } from 'motion/react';
import { useState } from 'react';
import { Code2, Database, Globe, Cpu, Shield, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "#00d4ff",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Three.js", level: 75 }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "#8a2be2",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 78 }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cpu,
    color: "#00ffff",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 82 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 88 },
      { name: "Terraform", level: 70 }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Zap,
    color: "#ff0080",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "OpenAI API", level: 85 },
      { name: "Computer Vision", level: 70 },
      { name: "NLP", level: 78 }
    ]
  }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-background opacity-10"></div>
      
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
            <span className="text-white ml-2">skills.matrix</span>
          </h2>
          <p className="text-gray-400 font-mono">expertise across the full technology stack</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Category Navigation */}
          <div className="space-y-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeCategory === index 
                    ? 'glassmorphism border-2' 
                    : 'bg-[#1a1a2e]/30 border border-gray-700 hover:border-gray-600'
                }`}
                style={{ 
                  borderColor: activeCategory === index ? category.color : undefined,
                  boxShadow: activeCategory === index ? `0 0 20px ${category.color}30` : undefined
                }}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <category.icon size={24} style={{ color: category.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg text-white">{category.title}</h3>
                    <p className="text-sm text-gray-400 font-mono">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glassmorphism rounded-xl p-8 border"
            style={{ borderColor: `${skillCategories[activeCategory].color}40` }}
          >
            <div className="flex items-center space-x-3 mb-8">
              {(() => {
                const IconComponent = skillCategories[activeCategory].icon;
                return (
                  <IconComponent 
                    size={28} 
                    style={{ color: skillCategories[activeCategory].color }}
                  />
                );
              })()}
              <h3 className="text-2xl text-white">
                {skillCategories[activeCategory].title}
              </h3>
            </div>

            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-mono">{skill.name}</span>
                    <span 
                      className="text-sm font-mono"
                      style={{ color: skillCategories[activeCategory].color }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className="h-full rounded-full relative"
                        style={{ 
                          background: `linear-gradient(90deg, ${skillCategories[activeCategory].color}, ${skillCategories[activeCategory].color}80)`,
                          boxShadow: `0 0 10px ${skillCategories[activeCategory].color}50`
                        }}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: [-100, 200] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatDelay: 3,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Terminal-style footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-8 pt-6 border-t border-gray-700"
            >
              <div className="font-mono text-sm text-gray-400">
                <span style={{ color: skillCategories[activeCategory].color }}>$</span> 
                <span className="ml-2">./analyze_skills.sh --category={skillCategories[activeCategory].title.toLowerCase().replace(/\s+/g, '_')}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-2"
                  style={{ color: skillCategories[activeCategory].color }}
                >
                  █
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};