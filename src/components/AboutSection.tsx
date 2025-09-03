import { motion } from 'motion/react';
import { Code, BarChart3, Zap, Target, Database, Cpu } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Expert in building scalable mobile and web applications from the ground up, covering both frontend and backend development.",
    color: "#00d4ff"
  },
  {
    icon: BarChart3,
    title: "Product Analytics Mindset",
    description: "Integrating A/B testing, event tracking, and data-driven decision-making to improve user experience and business outcomes.",
    color: "#8a2be2"
  },
  {
    icon: Target,
    title: "Business Value Focus",
    description: "Mission-driven approach to ensure applications deliver measurable value to users and businesses, not just technical solutions.",
    color: "#00ffff"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Specialized in frontend performance optimization and design systems for enhanced user experiences.",
    color: "#ff0080"
  }
];

const expertise = [
  "Design Systems & Frontend Performance",
  "Secure & Scalable API Development",
  "Product Data Analytics & Insights",
  "A/B Testing & User Experience",
  "Full Lifecycle Development",
  "Mobile & Web Applications"
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            <span className="text-white ml-2">about.me</span>
          </h2>
          <p className="text-gray-400 font-mono">product-focused engineer building measurable value</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-xl p-8 border border-[#00d4ff]/30 relative"
          >
            {/* Terminal header */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#ff0080]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00ffff]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00d4ff]"></div>
              <span className="ml-4 text-gray-400 font-mono text-sm">profile.overview</span>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="font-mono text-sm"
              >
                <div className="text-[#00d4ff] mb-2">$ cat professional_summary.txt</div>
                <div className="text-gray-300 leading-relaxed">
                  <span className="text-[#8a2be2]">Expert Software Engineer</span> & 
                  <span className="text-[#00ffff]"> Product-Focused Builder</span> with extensive experience 
                  developing scalable applications from concept to deployment.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="font-mono text-sm"
              >
                <div className="text-[#00d4ff] mb-2">$ ./analyze_approach.sh</div>
                <div className="text-gray-300 leading-relaxed">
                  Beyond engineering, I bring a <span className="text-[#ff0080]">product analytics mindset</span> — 
                  integrating A/B testing, event tracking, and data-driven decision-making to 
                  improve user experience and business outcomes.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                viewport={{ once: true }}
                className="font-mono text-sm"
              >
                <div className="text-[#00d4ff] mb-2">$ echo $MISSION</div>
                <div className="text-gray-300 leading-relaxed">
                  My mission: <span className="text-[#00ffff]">build applications that deliver measurable value</span> to 
                  users and businesses, not just technical solutions.
                </div>
              </motion.div>

              {/* Terminal prompt */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 pt-4"
              >
                <span className="text-[#8a2be2]">$</span>
                <span className="text-gray-400">ready_to_collaborate</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-[#00d4ff]"
                >
                  █
                </motion.span>
              </motion.div>
            </div>

            {/* Glowing corner */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#00d4ff]/20 to-transparent rounded-bl-full"></div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-xl p-8 border border-[#8a2be2]/30"
          >
            <h3 className="text-2xl text-white mb-6 font-mono">
              <span className="text-[#8a2be2]">{'>'}</span> core_expertise[]
            </h3>

            <div className="space-y-4">
              {expertise.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#1a1a2e]/30 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-[#00ffff] animate-pulse"></div>
                  <span className="text-gray-300 font-mono text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>

            {/* Terminal output */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="mt-6 p-4 bg-[#0a0a0f] rounded-lg border border-[#8a2be2]/20"
            >
              <div className="font-mono text-xs text-gray-400">
                <div className="text-[#8a2be2]">$ wc -l expertise.list</div>
                <div className="text-green-400">{expertise.length} areas of expertise</div>
                <div className="text-[#00ffff]">Status: <span className="text-[#00d4ff]">actively_growing</span></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Key Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glassmorphism rounded-xl p-6 border border-gray-700 hover:border-opacity-60 transition-all duration-300 group relative overflow-hidden"
              style={{ borderColor: `${highlight.color}40` }}
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${highlight.color}20` }}
              >
                <highlight.icon size={24} style={{ color: highlight.color }} />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h4 className="text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: `radial-gradient(circle at center, ${highlight.color}10 0%, transparent 70%)`
                }}
              />

              {/* Corner accent */}
              <div 
                className="absolute bottom-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${highlight.color} 50%)`
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glassmorphism rounded-xl p-8 border border-[#00ffff]/30 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-6 font-mono">
              <span className="text-[#00ffff]">Ready to collaborate?</span> Let's build something that makes a difference.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-[#00d4ff] to-[#00ffff] text-black rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 font-mono"
            >
              <span>./initiate_contact.sh</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};