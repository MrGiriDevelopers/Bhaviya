import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, BookOpen, FileText, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cert-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
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

  const certifications = [
    {
      title: "Python Basics Certification",
      issuer: "Digilabs",
      type: "Programming Fundamentals",
      description: "Comprehensive certification covering Python programming fundamentals, data structures, algorithms, and best practices.",
      icon: <BookOpen className="w-6 h-6" />,
      // badge: "🐍"
    },
    {
      title: "AI & Data Science Certification",
      issuer: "Infosys Springboard",
      type: "Industry Certification",
      description: "Advanced certification in artificial intelligence and data science covering machine learning, deep learning, and data analytics.",
      icon: <Trophy className="w-6 h-6" />,
      // badge: "🤖"
    }
  ];

  const achievements = [
    {
      title: "Journal Publication",
      description: "Audio Feature Extraction for Speech Recognition",
      details: "Published research paper in a peer-reviewed journal focusing on advanced audio processing techniques and feature extraction methods for speech recognition systems.",
      issn: "ISSN 0976-0997",
      icon: <FileText className="w-6 h-6" />,
      // badge: "📄"
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="cert-item section-title">Certifications & Achievements</h2>
          <p className="cert-item text-lg text-muted-dark max-w-3xl mx-auto">
            Professional certifications and academic achievements that demonstrate continuous learning 
            and expertise in cutting-edge technologies.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="cert-item text-2xl font-semibold mb-8 glow-text">Professional Certifications</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item portfolio-card p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-background">
                    {cert.icon}
                  </div>
                  <div className="flex-grow">
                    {/* <div className="text-4xl mb-2">{cert.badge}</div> */}
                    <div className="text-sm text-primary font-semibold mb-1">{cert.type}</div>
                    <h4 className="text-xl font-semibold glow-text">{cert.title}</h4>
                    <p className="text-muted">by {cert.issuer}</p>
                  </div>
                </div>
                <p className="text-muted-dark leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research & Publications */}
        <div>
          <h3 className="cert-item text-2xl font-semibold mb-8 glow-text">Research & Publications</h3>
          {achievements.map((achievement, index) => (
            <div key={index} className="cert-item portfolio-card p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center text-background">
                  {achievement.icon}
                </div>
                <div className="flex-grow">
                  {/* <div className="text-4xl mb-2">{achievement.badge}</div> */}
                  <h4 className="text-xl font-semibold glow-text mb-2">{achievement.title}</h4>
                  <p className="text-lg text-foreground mb-2">{achievement.description}</p>
                  <div className="text-sm text-primary font-semibold mb-2">
                    Journal ISSN: {achievement.issn}
                  </div>
                </div>
              </div>
              <p className="text-muted-dark leading-relaxed">{achievement.details}</p>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="cert-item portfolio-card p-8 mt-12">
          <h3 className="text-2xl font-semibold mb-8 glow-text text-center">Recognition Summary</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-background" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">2</div>
              <div className="text-muted">Certifications</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-background" />
              </div>
              <div className="text-2xl font-bold text-accent mb-2">1</div>
              <div className="text-muted">Publication</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-background" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">2</div>
              <div className="text-muted">Specializations</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-background" />
              </div>
              <div className="text-2xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;