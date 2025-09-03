import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ExternalLink, 
  Github, 
  Users, 
  Zap, 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Cpu, 
  Smartphone,
  BarChart3,
  Settings,
  MapPin
} from 'lucide-react';

// Import technology brand logos
import reactLogo from '@/assets/tech-logos/react.png';
import nodejsLogo from '@/assets/tech-logos/nodejs.png';
import mongodbLogo from '@/assets/tech-logos/mongodb.png';
import javascriptLogo from '@/assets/tech-logos/javascript.png';
import pythonLogo from '@/assets/tech-logos/python.png';
import cppLogo from '@/assets/tech-logos/cpp.png';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Technology mapping with real brand logos
  const techIcons: Record<string, { logo?: string; icon: JSX.Element; color: string }> = {
    "React": { logo: reactLogo, icon: <Code2 className="w-4 h-4" />, color: "text-blue-400" },
    "Node.js": { logo: nodejsLogo, icon: <Server className="w-4 h-4" />, color: "text-green-400" },
    "Express.js": { icon: <Server className="w-4 h-4" />, color: "text-gray-400" },
    "MongoDB": { logo: mongodbLogo, icon: <Database className="w-4 h-4" />, color: "text-green-500" },
    "Chart.js": { icon: <BarChart3 className="w-4 h-4" />, color: "text-orange-400" },
    "C++": { logo: cppLogo, icon: <Code2 className="w-4 h-4" />, color: "text-blue-500" },
    "GSM Module": { icon: <Smartphone className="w-4 h-4" />, color: "text-purple-400" },
    "GPS": { icon: <MapPin className="w-4 h-4" />, color: "text-red-400" },
    "Arduino": { icon: <Cpu className="w-4 h-4" />, color: "text-teal-400" },
    "Embedded Systems": { icon: <Settings className="w-4 h-4" />, color: "text-indigo-400" },
    "JavaScript": { logo: javascriptLogo, icon: <Code2 className="w-4 h-4" />, color: "text-yellow-400" },
    "TypeScript": { icon: <Code2 className="w-4 h-4" />, color: "text-blue-400" },
    "Python": { logo: pythonLogo, icon: <Code2 className="w-4 h-4" />, color: "text-green-400" },
    "MySQL": { icon: <Database className="w-4 h-4" />, color: "text-blue-500" },
    "HTML5": { icon: <Globe className="w-4 h-4" />, color: "text-orange-500" },
    "CSS3": { icon: <Globe className="w-4 h-4" />, color: "text-blue-500" }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Student Attendance Report System",
      description: "A comprehensive web application built with MERN stack for automated attendance tracking and reporting. Features real-time data processing, interactive dashboards, and automated report generation.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js"],
      features: [
        "Real-time attendance tracking",
        "Interactive data visualization",
        "Automated report generation",
        "Role-based access control"
      ],
      icon: <Users className="w-8 h-8" />,
      category: "Full-Stack Development"
    },
    {
      title: "Lifeline Dialer - GSM Emergency Device",
      description: "An innovative hardware-software solution utilizing GSM technology for emergency communication. Designed for critical situations with GPS tracking and automated alert systems.",
      tech: ["C++", "GSM Module", "GPS", "Arduino", "Embedded Systems"],
      features: [
        "Emergency alert system",
        "GPS location tracking",
        "Automated dialing",
        "Low power consumption"
      ],
      icon: <Zap className="w-8 h-8" />,
      category: "IoT & Hardware"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="project-card section-title">Featured Projects</h2>
          <p className="project-card text-lg text-muted-dark max-w-3xl mx-auto">
            Showcasing innovative solutions that combine technical expertise with real-world problem-solving, 
            from web applications to hardware innovations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card portfolio-card p-8 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-background flex-shrink-0">
                  {project.icon}
                </div>
                <div>
                  <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold glow-text">{project.title}</h3>
                </div>
              </div>

              <p className="text-muted-dark mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-muted-dark">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Technologies Used
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                        {techIcons[tech]?.logo ? (
                          <img 
                            src={techIcons[tech].logo} 
                            alt={`${tech} logo`}
                            className="w-6 h-6 object-contain"
                          />
                        ) : (
                          <div className={`${techIcons[tech]?.color || 'text-primary'}`}>
                            {techIcons[tech]?.icon || <Code2 className="w-4 h-4" />}
                          </div>
                        )}
                      </div>
                      <span className="text-sm font-medium text-foreground truncate">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                <button className="btn-primary flex items-center gap-2">
                  <Github size={18} />
                  View Code
                </button>
                <button className="btn-outline flex items-center gap-2">
                  <ExternalLink size={18} />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="project-card portfolio-card p-8 mt-12">
          <h3 className="text-2xl font-semibold mb-8 glow-text text-center">Project Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;