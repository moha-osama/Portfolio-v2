export const HERO_NAME = "Mohamed Osama";

export const HERO_LINKS = [
  {
    label: "github",
    link: "https://github.com/moha-osama",
    color: "#00d4ff",
  },
  {
    label: "linkedin",
    link: "https://www.linkedin.com/in/mohamed-osama-4a38a0206/",
    color: "#00ffff",
  },
  {
    label: "resume",
    link: "https://drive.google.com/file/d/1pQoI4FPvK6Jr5SKrKt1fl2JP50Df8glX/view?usp=drive_link",
    color: "#8a2be2",
  },
  {
    label: "mail",
    link: "mailto:zmuhamedosama@gmail.com",
    color: "#ff0080",
  },
];

// About Section
export const ABOUT_HIGHLIGHTS = [
  {
    title: "Full Stack Development",
    description: "Expert in building scalable mobile and web applications from the ground up, covering both frontend and backend development.",
    color: "#00d4ff"
  },
  {
    title: "Product Analytics Mindset",
    description: "Integrating A/B testing, event tracking, and data-driven decision-making to improve user experience and business outcomes.",
    color: "#8a2be2"
  },
  {
    title: "Business Value Focus",
    description: "Mission-driven approach to ensure applications deliver measurable value to users and businesses, not just technical solutions.",
    color: "#00ffff"
  },
  {
    title: "Performance Optimization",
    description: "Specialized in frontend performance optimization and design systems for enhanced user experiences.",
    color: "#ff0080"
  }
];

export const ABOUT_EXPERTISE = [
  "Design Systems & Frontend Performance",
  "Secure & Scalable API Development",
  "Product Data Analytics & Insights",
  "A/B Testing & User Experience",
  "Full Lifecycle Development",
  "Mobile & Web Applications"
];

// Experience Section
export const EXPERIENCES = [
  {
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

// Projects Section
export const PROJECTS = [
  {
    title: "Neural Network Visualizer",
    description: "Interactive web application for visualizing neural network architectures and training processes in real-time.",
    tech: ["React", "Three.js", "TensorFlow.js", "WebGL"],
    image: "ai neural network",
    github: "#",
    live: "#",
    status: "completed"
  },
  {
    title: "Quantum Dashboard",
    description: "Real-time monitoring dashboard for quantum computing systems with cyberpunk-inspired design.",
    tech: ["Next.js", "D3.js", "WebSockets", "Redis"],
    image: "quantum computing dashboard",
    github: "#",
    live: "#",
    status: "in-progress"
  },
  {
    title: "Blockchain Explorer",
    description: "Decentralized application for exploring blockchain transactions with advanced analytics.",
    tech: ["Vue.js", "Web3.js", "Ethereum", "GraphQL"],
    image: "blockchain technology",
    github: "#",
    live: "#",
    status: "completed"
  },
  {
    title: "Cybersecurity Hub",
    description: "Centralized platform for monitoring and responding to cybersecurity threats in real-time.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "cybersecurity dashboard",
    github: "#",
    live: "#",
    status: "completed"
  }
];

// Services Section
export const SERVICES = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web & mobile applications built with modern frameworks. From React frontends to scalable backend APIs.",
    features: ["React/Next.js", "Node.js APIs", "Mobile Apps", "Database Design"],
    color: "#00d4ff",
    gradient: "from-[#00d4ff] to-[#0099cc]"
  },
  {
    title: "Product Analytics",
    description: "Data-driven insights & tracking implementation. A/B testing, user behavior analysis, and performance metrics.",
    features: ["A/B Testing", "Event Tracking", "User Analytics", "Conversion Optimization"],
    color: "#8a2be2",
    gradient: "from-[#8a2be2] to-[#6a1b9a]"
  },
  {
    title: "Scalable Architecture",
    description: "Redis caching, Azure cloud solutions, and robust API design for applications that grow with your business.",
    features: ["Cloud Infrastructure", "API Architecture", "Database Optimization", "Performance Scaling"],
    color: "#00ffff",
    gradient: "from-[#00ffff] to-[#00cccc]"
  },
  {
    title: "UI/UX Engineering",
    description: "Modern, accessible, user-focused interfaces. Design systems, responsive layouts, and exceptional user experiences.",
    features: ["Design Systems", "Responsive Design", "Accessibility", "User Experience"],
    color: "#ff0080",
    gradient: "from-[#ff0080] to-[#cc0066]"
  }
];

// Skills Section
export const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
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

// Contact Section
export const CONTACT_SOCIAL_LINKS = [
  { label: 'GitHub', color: '#00d4ff', href: '#' },
  { label: 'LinkedIn', color: '#00ffff', href: '#' },
  { label: 'Twitter', color: '#8a2be2', href: '#' },
  { label: 'Email', color: '#ff0080', href: 'mailto:john@example.com' }
];

export const CONTACT_INFO = [
  { label: 'john.doe@example.com', color: '#00d4ff' },
  { label: '+1 (555) 123-4567', color: '#00ffff' },
  { label: 'San Francisco, CA', color: '#8a2be2' }
];

// export const projects = [
//   {
//     id: "p2",
//     title: "Cars Showcase",
//     href: "https://car-showcase-jade.vercel.app/",
//     img: "/projects/carshowcase.png",
//   },
//   {
//     id: "p3",
//     title: "Dreambill",
//     href: "https://www.dreambill.io/",
//     img: "/projects/dreambill.png",
//   },
//   {
//     id: "p9",
//     title: "Shoe Store",
//     href: "https://shoe-store-moha-osama.vercel.app/",
//     img: "/projects/shoestore.png",
//   },
//   {
//     id: "p5",
//     title: "Jewelry Store",
//     href: "http://jewelry-store-demo-app.netlify.app/",
//     img: "/projects/jewelrystore.png",
//   },
//   {
//     id: "p1",
//     title: "Airbnb Clone",
//     href: "https://airbnb-clone-one-nu.vercel.app/",
//     img: "/projects/airbnb.png",
//   },
//   {
//     id: "p7",
//     title: "Nuiq",
//     href: "https://nuiq.com/",
//     img: "/projects/nuiq.png",
//   },
//   {
//     id: "p6",
//     title: "Notes App",
//     href: "https://markdown-note-demo-app.netlify.app/",
//     img: "/projects/notes.png",
//   },
//   {
//     id: "p8",
//     title: "Quiz App",
//     href: "https://magenta-pegasus-09e79c.netlify.app/",
//     img: "/projects/quiz.png",
//   },
//   {
//     id: "p4",
//     title: "Forecast App",
//     href: "https://forecast-demo-app.netlify.app/",
//     img: "/projects/forecastapp.png",
//   },
// ];