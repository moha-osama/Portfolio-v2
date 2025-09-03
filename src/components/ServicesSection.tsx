import { motion } from 'motion/react';
import { Code, BarChart3, Database, Palette } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Full-Stack Development",
    icon: Code,
    description: "End-to-end web & mobile applications built with modern frameworks. From React frontends to scalable backend APIs.",
    features: ["React/Next.js", "Node.js APIs", "Mobile Apps", "Database Design"],
    color: "#00d4ff",
    gradient: "from-[#00d4ff] to-[#0099cc]"
  },
  {
    id: 2,
    title: "Product Analytics",
    icon: BarChart3,
    description: "Data-driven insights & tracking implementation. A/B testing, user behavior analysis, and performance metrics.",
    features: ["A/B Testing", "Event Tracking", "User Analytics", "Conversion Optimization"],
    color: "#8a2be2",
    gradient: "from-[#8a2be2] to-[#6a1b9a]"
  },
  {
    id: 3,
    title: "Scalable Architecture",
    icon: Database,
    description: "Redis caching, Azure cloud solutions, and robust API design for applications that grow with your business.",
    features: ["Cloud Infrastructure", "API Architecture", "Database Optimization", "Performance Scaling"],
    color: "#00ffff",
    gradient: "from-[#00ffff] to-[#00cccc]"
  },
  {
    id: 4,
    title: "UI/UX Engineering",
    icon: Palette,
    description: "Modern, accessible, user-focused interfaces. Design systems, responsive layouts, and exceptional user experiences.",
    features: ["Design Systems", "Responsive Design", "Accessibility", "User Experience"],
    color: "#ff0080",
    gradient: "from-[#ff0080] to-[#cc0066]"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-background opacity-5"></div>

      <motion.div
        className="absolute bottom-32 right-16 w-12 h-12 border border-[#8a2be2]/30 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

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
            <span className="text-white ml-2">my_services.json</span>
          </h2>
          <p className="text-gray-400 font-mono">comprehensive solutions for modern digital challenges</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="glassmorphism rounded-xl p-8 h-full border border-gray-700 hover:border-opacity-60 transition-all duration-500 overflow-hidden relative">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${service.color}20 0%, transparent 70%)`
          }}
        />

        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <motion.div 
            className="p-4 rounded-lg relative"
            style={{ backgroundColor: `${service.color}20` }}
          >
            <service.icon size={32} style={{ color: service.color }} />
            
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: `0 0 20px ${service.color}40`
              }}
            />
          </motion.div>
          
          <div>
            <h3 className="text-xl text-white group-hover:text-[#00d4ff] transition-colors duration-300">
              {service.title}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: service.color }}
              />
              <span className="text-xs text-gray-400 font-mono">
                service_active
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          <div className="text-sm text-gray-400 font-mono">
            <span style={{ color: service.color }}>$</span> features.list()
          </div>
          <div className="grid grid-cols-2 gap-2">
              {service.features.map((feature: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-sm"
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: service.color }}
                />
                <span className="text-gray-300 font-mono">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive hover effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, ${service.color}, transparent)`
          }}
        />

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `linear-gradient(225deg, ${service.color}40 0%, transparent 70%)`
          }}
        />

        {/* Neon glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1px ${service.color}30, 0 0 20px ${service.color}10`
          }}
        />
      </div>
    </motion.div>
  );
};