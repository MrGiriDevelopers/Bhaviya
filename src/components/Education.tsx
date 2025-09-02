import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.education-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
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

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Nandha Engineering College",
      period: "2021 - 2025",
      grade: "CGPA: 8.74",
      description: "Specializing in machine learning, deep learning, data analytics, and AI applications. Completed coursework in advanced algorithms, neural networks, and big data technologies.",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Reliance Matric Higher Secondary School",
      period: "2019 - 2021",
      grade: "78%",
      description: "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science, laying the foundation for engineering studies.",
      icon: <Award className="w-8 h-8" />
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Reliance Matric Higher Secondary School",
      period: "2018 - 2019",
      grade: "73%",
      description: "Completed secondary education with strong performance across all subjects, developing analytical and problem-solving skills.",
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="education-item section-title">Education</h2>
          <p className="education-item text-lg text-muted-dark max-w-3xl mx-auto">
            My academic journey in technology and engineering, building a strong foundation 
            in artificial intelligence and data science.
          </p>

        </div>
        
        <div className="testimonial-item portfolio-card p-8 mt-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Happy Collaborators</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Project Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Commitment</div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="education-item portfolio-card p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-background">
                    {edu.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 glow-text">{edu.degree}</h3>
                      <p className="text-lg text-foreground">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col lg:items-end">
                      <div className="flex items-center gap-2 text-muted mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="text-primary font-semibold text-lg">{edu.grade}</div>
                    </div>
                  </div>
                  <p className="text-muted-dark leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="education-item portfolio-card p-8 mt-12">
          <h3 className="text-2xl font-semibold mb-6 glow-text text-center">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8.74</div>
              <div className="text-muted">Current CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted">Years of Education</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Top 10%</div>
              <div className="text-muted">Class Ranking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;