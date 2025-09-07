import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { ContactForm } from './ContactForm';

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

export const ContactSection = () => {
  const socialLinks = [
    {
      label: "github",
      icon: <GitHubIcon />,
      href: "https://github.com/moha-osama",
      color: "#00d4ff",
    },
    {
      label: "linkedin",
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/mohamed-osama-4a38a0206/",
      color: "#00ffff",
    },
    {
      label: "resume",
      icon: <ResumeIcon />,
      href: "https://drive.google.com/file/d/1pQoI4FPvK6Jr5SKrKt1fl2JP50Df8glX/view?usp=drive_link",
      color: "#8a2be2",
    },
    {
      label: "mail",
      icon: <MailIcon />,
      href: "mailto:zmuhamedosama@gmail.com",
      color: "#ff0080",
    },
  ];


  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background effects */}
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
            <span className="text-white ml-2">contact.init()</span>
          </h2>
          <p className="text-gray-400 font-mono">let's build something extraordinary together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info & Social Links */}
          <div className="">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-8 border border-[#00ffff]/30"
            >
              <h3 className="text-2xl text-white mb-6 font-mono">
                <span className="text-[#00ffff]">{'>'}</span> social_links[]
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center justify-center gap-2 p-4 rounded-lg border border-gray-700 hover:border-opacity-60 transition-all duration-300 group"
                    style={{ 
                      borderColor: `${social.color}40`,
                      backgroundColor: `${social.color}05`
                    }}
                  >
                    <span className="group-hover:animate-pulse">{social.icon}</span>
                    <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors duration-300">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};