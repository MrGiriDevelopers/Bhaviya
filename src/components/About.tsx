import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Code, Database, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-card',
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

  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Enthusiast",
      description: "Passionate about machine learning, neural networks, and cutting-edge AI technologies."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Developer",
      description: "Proficient in MERN stack with experience in building scalable web applications."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science Expert",
      description: "Skilled in data analysis, visualization, and extracting insights from complex datasets."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Driven",
      description: "Always exploring new technologies and innovative solutions to real-world problems."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="about-card section-title">About Me</h2>
          <p className="about-card text-lg text-muted-dark max-w-3xl mx-auto">
            Dedicated AI & Data Science student with a passion for innovation and technology. 
            I combine theoretical knowledge with practical experience to create intelligent solutions 
            that make a real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="about-card portfolio-card p-6 text-center">
              <div className="text-primary mb-4 flex justify-center">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
              <p className="text-muted-dark">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="about-card portfolio-card p-8">
          <h3 className="text-2xl font-semibold mb-6 glow-text">My Journey</h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-dark leading-relaxed mb-6">
              As a B.Tech student pursuing Artificial Intelligence & Data Science at Nandha Engineering College, 
              I've maintained a strong academic record with a CGPA of 8.74. My journey in technology began with 
              a fascination for how data can be transformed into meaningful insights and intelligent solutions.
            </p>
            <p className="text-lg text-muted-dark leading-relaxed mb-6">
              Through hands-on projects and internships, I've developed expertise in various programming languages 
              including Python, Java, and C, along with powerful frameworks like TensorFlow and Scikit-learn. 
              My experience spans from building full-stack web applications using the MERN stack to developing 
              innovative hardware solutions.
            </p>
            <p className="text-lg text-muted-dark leading-relaxed">
              I'm particularly interested in the intersection of AI and real-world applications, having worked on 
              projects ranging from attendance management systems to audio feature extraction research. My goal is 
              to contribute to the advancement of AI technology while solving meaningful problems that impact society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;