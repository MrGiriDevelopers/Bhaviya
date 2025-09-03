import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Wrench, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-category',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

      gsap.fromTo('.skill-tag',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Java", "C", "SQL", "JavaScript", "TypeScript"],
      color: "primary"
    },
    {
      title: "AI/ML Frameworks",
      icon: <Zap className="w-6 h-6" />,
      skills: ["TensorFlow", "Scikit-learn", "PyTorch", "Keras", "NumPy", "Pandas"],
      color: "secondary"
    },
    {
      title: "Web Technologies",
      icon: <Database className="w-6 h-6" />,
      skills: ["React", "Node.js", "Express.js", "MongoDB", "HTML5", "CSS3"],
      color: "accent"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "Docker", "Jupyter", "VS Code", "MySQL", "Firebase"],
      color: "primary"
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-surface relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-surface-elevated"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridMove 25s linear infinite'
          }}></div>
        </div>
        
        {/* Code-themed floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-primary/20 animate-pulse font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 6}s`
              }}
            >
              {['</>', '{}', '[]', '()', '<AI>', 'ML', 'DB', '++'][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>
        
        {/* Tech-themed glowing orbs */}
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-secondary/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Binary pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 font-mono text-xs text-primary" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.1'%3E%3Ctext x='10' y='15' font-family='monospace' font-size='8'%3E1010%3C/text%3E%3Ctext x='10' y='30' font-family='monospace' font-size='8'%3E0101%3C/text%3E%3Ctext x='10' y='45' font-family='monospace' font-size='8'%3E1100%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'gridMove 30s linear infinite reverse'
          }}></div>
        </div>
        
        {/* Moving geometric shapes - tech themed */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-primary/15 rotate-45 animate-spin" style={{ animationDuration: '25s' }}>
          <div className="absolute inset-2 border border-primary/10 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border-2 border-secondary/20 rounded-lg animate-bounce" style={{ animationDuration: '4s' }}>
          <div className="absolute inset-1 bg-secondary/5 rounded"></div>
        </div>
        
        {/* Circuit-like connecting lines */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 10,30 L 90,30 M 30,10 L 30,90 M 70,10 L 70,90" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1"/>
                <circle cx="30" cy="30" r="2" fill="rgba(139, 92, 246, 0.2)"/>
                <circle cx="70" cy="70" r="2" fill="rgba(139, 92, 246, 0.2)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="skills-category section-title">Technical Skills</h2>
          <p className="skills-category text-lg text-muted-dark max-w-3xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies 
            that I use to build intelligent solutions and innovative applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category portfolio-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-background">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold glow-text">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress/Stats */}
        <div className="skills-category portfolio-card p-8 mt-12">
          <h3 className="text-2xl font-semibold mb-8 glow-text text-center">Proficiency Overview</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-border"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-primary"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="90, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-primary">
                  90%
                </div>
              </div>
              <div className="text-foreground font-semibold">Python</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-border"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-secondary"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="85, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-secondary">
                  85%
                </div>
              </div>
              <div className="text-foreground font-semibold">Machine Learning</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-border"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-accent"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="80, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-accent">
                  80%
                </div>
              </div>
              <div className="text-foreground font-semibold">MERN Stack</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-border"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-primary"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="75, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-primary">
                  75%
                </div>
              </div>
              <div className="text-foreground font-semibold">Data Science</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;