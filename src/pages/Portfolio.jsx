import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Menu, X, Briefcase, Code, GraduationCap, Award } from 'lucide-react';
import myimage from "../Profile/arshid.jpeg"
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const skills = {
    "Front-End": ["React.js", "Redux", "Next.js", "HTML", "CSS", "Bootstrap", "Framer Motion"],
    "Back-End": ["Node.js", "Express", "JavaScript"],
    "Database": ["MongoDB"],
    "Tools": ["Git", "Github Actions", "VS Code", "Postman", "Nodemailer", "Vercel", "Render"]
  };

  const projects = [
    {
      name: "TradeLog",
      link: "https://www.linkedin.com/posts/mohammed-arshid-20940a2b4_mernstack-reactjs-nodejs-activity-7378747417015468032-9lCC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuF9KkBKibl5Z2rd0ELWkkDS0HciWdFqJo",
      description: "Full-stack trading journal application with JWT authentication, role-based access control, and admin dashboard",
      highlights: [
        "Secure JWT-based authentication with HTTP-only cookies",
        "Real-time validation and MongoDB filtering",
        "Admin dashboard with user management and moderation",
        "Responsive UI with full CRUD operations"
      ],
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"]
    },
    {
      name: "CineScope",
      link: "https://www.linkedin.com/posts/mohammed-arshid-20940a2b4_built-cinescope-a-mini-movie-review-app-activity-7379877756223881216-Cc42?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuF9KkBKibl5Z2rd0ELWkkDS0HciWdFqJo",
      description: "Front-end movie review application with client-side role-based access control",
      highlights: [
        "Redux state management with localStorage",
        "Formik + Yup validation",
        "Admin dashboard for content moderation",
        "Responsive design with React-Bootstrap"
      ],
      tech: ["React", "Redux", "Formik", "React-Bootstrap"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
           
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === item ? 'text-purple-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize hover:text-purple-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl">
          <div className="mb-6 animate-fade-in">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-50"></div>
                <img 
                  src={myimage}
                  alt="Mohammed Arshid K" 
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-purple-400/50 shadow-2xl"
                />
              </div>
            </div>
            <p className="text-purple-400 text-lg mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Mohammed Arshid K
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">Full Stack Developer</p>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Crafting accessible, scalable, and secure web applications with modern technologies and best practices
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:mohammedarshid2688@gmail.com" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all hover:scale-105">
              <Mail size={20} />
              Get In Touch
            </a>
            <button onClick={() => scrollToSection('projects')} className="flex items-center gap-2 border border-purple-400 hover:bg-purple-400/10 px-6 py-3 rounded-full transition-all hover:scale-105">
              <Code size={20} />
              View Projects
            </button>
          </div>

          <div className="flex justify-center gap-6">
     <a
  href="https://www.linkedin.com/in/mohammed-arshid-20940a2b4/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-purple-400 transition-colors"
>
  <Linkedin size={24} />
</a>
            <a href="tel:+971543362205" className="hover:text-purple-400 transition-colors">
              <Phone size={24} />
            </a>
            <a href="mailto:mohammedarshid2688@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Full-stack web developer with expertise in designing and developing accessible, scalable, and secure web applications. Skilled across front-end and back-end technologies, I'm committed to continuous learning and best practices for delivering reliable, efficient solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Experienced in modern frameworks, databases, version control, and deployment tools to build high-performing, maintainable applications aligned with industry standards.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                <MapPin className="text-purple-400 mb-2" size={24} />
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold">Fujairah, UAE</p>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                <Award className="text-purple-400 mb-2" size={24} />
                <p className="text-sm text-gray-400">Visa Status</p>
                <p className="font-semibold">Valid UAE Employment Visa</p>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                <GraduationCap className="text-purple-400 mb-2" size={24} />
                <p className="text-sm text-gray-400">Languages</p>
                <p className="font-semibold">English, Malayalam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="relative border-l-2 border-purple-500/30 pl-8 ml-4">
            <div className="mb-12">
              <div className="absolute -left-3 mt-1.5 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900"></div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">Full Stack Developer (MERN) Intern</h3>
                    <p className="text-gray-400">Futura Labs</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">Jan 2025 — Jul 2025</p>
                    <p className="text-gray-500 text-sm">Kozhikode, India</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>Designed and optimized user interfaces and backend functionality using the MERN stack, improving performance through efficient code optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>Implemented responsive, scalable designs, enhancing user experience based on feedback and usability testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>Provided technical mentorship, boosting team productivity through coding standards and peer reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>Led a project as Project lead, overseeing workflows and managing version control to ensure smooth collaboration and execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>Integrated third-party APIs and services to extend application functionality, ensuring seamless data flow and high system reliability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>Implemented robust authentication and authorization mechanisms using JWT and middleware, strengthening application security and protecting user data</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <div className="absolute -left-3 mt-1.5 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900"></div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">Education</h3>
                    <p className="text-gray-400">B.Tech in Computer Science and Engineering</p>
                    <p className="text-gray-500">Royal College of Engineering and Technology</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">2020 — 2024</p>
                    <p className="text-gray-500 text-sm">Thrissur, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-purple-400">{project.name}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-purple-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-800/50 text-gray-300 rounded-lg text-sm border border-purple-500/20 hover:border-purple-500/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            I'm currently available for freelance work and full-time opportunities. Feel free to reach out!
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              <a href="mailto:mohammedarshid2688@gmail.com" className="flex items-center justify-center gap-3 text-lg hover:text-purple-400 transition-colors">
                <Mail size={24} />
                <span>mohammedarshid2688@gmail.com</span>
              </a>
              <a href="tel:+971543362205" className="flex items-center justify-center gap-3 text-lg hover:text-purple-400 transition-colors">
                <Phone size={24} />
                <span>+971 54 336 2205</span>
              </a>
              <div className="flex items-center justify-center gap-3 text-lg text-gray-400">
                <MapPin size={24} />
                <span>Fujairah, United Arab Emirates</span>
              </div>
              <a   href="https://www.linkedin.com/in/mohammed-arshid-20940a2b4/"
  target="_blank"
  rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-lg hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
  
    </div>
  );
}
