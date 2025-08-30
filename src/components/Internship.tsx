import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Internship = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.internship-content',
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const responsibilities = [
    "Developed responsive web applications using React.js and Node.js",
    "Implemented RESTful APIs and database integration with MongoDB",
    "Collaborated with senior developers on full-stack projects",
    "Participated in code reviews and agile development processes",
    "Created user interfaces with modern CSS frameworks",
    "Optimized application performance and user experience"
  ];

  const skillsGained = [
    "Advanced React.js development",
    "Backend API development",
    "Database design and optimization",
    "Version control with Git",
    "Agile methodology",
    "Team collaboration"
  ];

  return (
    <section id="internship" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="internship-content section-title">Professional Experience</h2>
          <p className="internship-content text-lg text-muted-dark max-w-3xl mx-auto">
            Hands-on industry experience that bridged the gap between academic learning 
            and professional software development.
          </p>
        </div>

        <div className="internship-content portfolio-card p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            {/* Company Info */}
            <div className="lg:w-1/3">
              <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center text-background mb-6">
                <Briefcase className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold glow-text mb-2">Full Stack Web Development Internship</h3>
              <p className="text-xl text-foreground mb-4">Accent Techno Soft</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Coimbatore, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-3 text-muted">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>14-day Intensive Program</span>
                </div>
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 glow-text">About the Experience</h4>
                <p className="text-muted-dark leading-relaxed mb-6">
                  Completed an intensive 14-day full-stack web development internship at Accent Techno Soft, 
                  a leading software development company in Coimbatore. This hands-on experience provided 
                  deep insights into professional software development practices and modern web technologies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-dark">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Skills Developed
                  </h4>
                  <div className="space-y-3">
                    {skillsGained.map((skill, index) => (
                      <div key={index} className="skill-tag">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Learning */}
        <div className="internship-content portfolio-card p-8">
          <h3 className="text-2xl font-semibold mb-6 glow-text text-center">Key Takeaways</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Professional Environment</h4>
              <p className="text-muted-dark">Experienced real-world software development practices and industry standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Team Collaboration</h4>
              <p className="text-muted-dark">Learned effective teamwork and communication in agile development environment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Technical Growth</h4>
              <p className="text-muted-dark">Enhanced full-stack development skills with hands-on project experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;