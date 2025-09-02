import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Brain, Smartphone, Palette, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
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

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Development",
      description: "Building intelligent systems using machine learning algorithms, neural networks, and deep learning frameworks.",
      features: ["Custom ML Models", "Neural Networks", "Data Analysis", "Predictive Analytics"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Creating responsive web applications using modern technologies like React, Node.js, and cloud services.",
      features: ["React Applications", "Backend APIs", "Database Design", "Cloud Deployment"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Extracting insights from complex datasets using statistical analysis and visualization techniques.",
      features: ["Data Visualization", "Statistical Analysis", "Big Data Processing", "Business Intelligence"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Solutions",
      description: "Developing cross-platform mobile applications with intuitive user interfaces and robust functionality.",
      features: ["Cross-Platform Apps", "Native Performance", "UI/UX Design", "API Integration"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Research & Innovation",
      description: "Conducting cutting-edge research in AI and data science to solve real-world challenges.",
      features: ["Academic Research", "Algorithm Development", "Innovation Projects", "Technical Writing"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing user-centered interfaces that combine aesthetic appeal with functional excellence.",
      features: ["User Interface Design", "User Experience Research", "Prototyping", "Design Systems"]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="service-card section-title">My Special Services</h2>
          
          <p className="service-card text-lg text-muted-foreground max-w-3xl mx-auto">
            Offering comprehensive solutions across AI, data science, and full-stack development 
            to bring your innovative ideas to life with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{service.title}</h3>
                  <div className="w-12 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="service-card portfolio-card p-8 mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 glow-text">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's collaborate to transform your ideas into reality using the latest in AI and technology.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 text-base"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;