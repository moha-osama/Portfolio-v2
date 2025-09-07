import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { useEffect, useState } from 'react';

export default function App() {
  useEffect(() => {
    
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id!);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  // State to control scroll-to-top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white relative overflow-x-hidden">
      {/* Global background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, #00d4ff22 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #8a2be222 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, #00ffff22 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00d4ff] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          <HeroSection />

          {/* Section divider with neon line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="container mx-auto px-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"></div>
            </div>
          </motion.div>

          <ServicesSection />
          
          {/* Section divider with neon line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="container mx-auto px-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"></div>
            </div>
          </motion.div>

          {/* Section divider with neon line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="container mx-auto px-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"></div>
            </div>
          </motion.div>

          {/* Section divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="container mx-auto px-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent"></div>
            </div>
          </motion.div>

          <ExperienceSection />
          
          {/* Section divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="container mx-auto px-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#ff0080] to-transparent"></div>
            </div>
          </motion.div>

          <ProjectsSection />
          
          {/* Section divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="container mx-auto px-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"></div>
            </div>
          </motion.div>

          <ContactSection />
        </main>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="py-3 px-5 bg-gradient-to-r from-[#00d4ff] to-[#00ffff] text-black rounded-full shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 z-50"
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          <span>
            ↑
          </span>
        </motion.button>
      )}
    </div>
  );
}