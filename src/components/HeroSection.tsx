import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import trackEvent from '../../utils/analytics';

// Custom Resume Icon (simple SVG)
const ResumeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <rect x="4" y="2" width="12" height="16" rx="2" stroke="#8a2be2" strokeWidth="2"/>
    <line x1="7" y1="6" x2="13" y2="6" stroke="#8a2be2" strokeWidth="1.5"/>
    <line x1="7" y1="10" x2="13" y2="10" stroke="#8a2be2" strokeWidth="1.5"/>
    <line x1="7" y1="14" x2="11" y2="14" stroke="#8a2be2" strokeWidth="1.5"/>
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => <Github size={20} color="#00d4ff" {...props} />;
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => <Linkedin size={20} color="#00ffff" {...props} />;
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => <Mail size={20} color="#ff0080" {...props} />;

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Mohamed Osama";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const links = [
    {
      label: "github",
      icon: <GitHubIcon />,
      link: "https://github.com/moha-osama",
      color: "#00d4ff",
    },
    {
      label: "linkedin",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/mohamed-osama-4a38a0206/",
      color: "#00ffff",
    },
    {
      label: "resume",
      icon: <ResumeIcon />,
      link: "https://drive.google.com/file/d/1pQoI4FPvK6Jr5SKrKt1fl2JP50Df8glX/view?usp=drive_link",
      color: "#8a2be2",
    },
    {
      label: "mail",
      icon: <MailIcon />,
      link: "mailto:zmuhamedosama@gmail.com",
      color: "#ff0080",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16 sm:mt-0">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>

      <div className="container mx-auto max-w-fit px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Main content - left aligned */}
          <div className="max-w-6xl mx-auto text-left space-y-8">
            {/* Terminal-style content */}
            <div className="glassmorphism rounded-xl p-8 border border-[#00d4ff]/30 max-w-4xl">
              {/* Terminal header */}
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#ff0080]"></div>
                <div className="w-3 h-3 rounded-full bg-[#00ffff]"></div>
                <div className="w-3 h-3 rounded-full bg-[#00d4ff]"></div>
                <span className="ml-4 text-gray-400 font-mono text-sm">terminal://portfolio</span>
              </div>

              {/* Terminal content */}
              <div className="font-mono space-y-6">
                <div className="text-[#00d4ff]">$ whoami</div>
                
                <motion.h1 
                  className="text-3xl md:text-5xl lg:text-6xl text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-[#00d4ff]"
                  >
                    |
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="space-y-2"
                >
                  {/* <div className="text-[#00d4ff]">$ cat role.txt</div>
                  <div className="text-2xl md:text-3xl text-[#00ffff] pl-4">
                    Full Stack Developer
                  </div> */}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.5 }}
                  className="space-y-2"
                >
                  <div className="text-[#00d4ff]">$ cat summary.md</div>
                  <div className="text-gray-300 leading-relaxed pl-4 max-w-2xl">
                    Expert Full Stack Developer & Product Focused Builder with extensive experience 
                    developing <span className="text-[#00ffff]">scalable applications</span> from the ground up.
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.5 }}
                  className="space-y-4"
                >
                  <div className="text-[#00d4ff]">$ ls social_links/</div>
                  <div className="flex space-x-6 pl-4">
                    {links.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 3.5 + index * 0.1 }}
                        whileHover={{ y: -2 }}
                        className="p-3 glassmorphism rounded-full border border-gray-700 hover:border-opacity-60 transition-all duration-300 group"
                        style={{ 
                          borderColor: `${item.color}40`,
                          backgroundColor: `${item.color}05`
                        }}
                      >
                        <span className="group-hover:animate-pulse">{item.icon}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 4.5 }}
                  className="flex items-center space-x-2 pt-4"
                >
                  <span className="text-[#8a2be2]">$</span>
                  <span className="text-gray-400">ready_to_collaborate</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              onClick={() => trackEvent("services_viewed", { service: "" })}
              href="#services"
              whileHover={{ y: -2 }}
              className="px-8 py-3 bg-gradient-to-r from-[#00d4ff] to-[#00ffff] text-black rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 font-mono"
            >
              View My Services
            </motion.a>
            
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              className="px-8 py-3 border border-[#8a2be2] text-[#8a2be2] rounded-lg hover:bg-[#8a2be2]/10 hover:shadow-lg hover:shadow-[#8a2be2]/50 transition-all duration-300 font-mono"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>     
      </div>
    </section>
  );
};