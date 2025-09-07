import { motion } from 'motion/react';

export const Header = () => {
  const navItems = ['services', 'experience', 'projects', 'contact'];
  
  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top handler
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-[#00d4ff]/30"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Terminal-style logo */}
          <motion.button 
            className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-3 h-3 rounded-full bg-[#ff0080] animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-[#00ffff] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-[#00d4ff] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <span className="ml-4 text-[#00d4ff] font-mono">portfolio.exe</span>
          </motion.button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-[#00d4ff] transition-colors duration-300 font-mono relative group"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  onClick={e => handleNavClick(e, item)}
                >
                  <span className="relative z-10">{'>'} {item}</span>
                  <motion.div
                    className="absolute inset-0 bg-[#00d4ff]/10 rounded blur-sm -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
          </nav>

          {/* Terminal clock */}
          <motion.div 
            className="font-mono text-sm text-[#00ffff]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {/* [{currentTime.toLocaleTimeString()}] */}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};