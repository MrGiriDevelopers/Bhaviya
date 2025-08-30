import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "bhaviyashreekavi@gmail.com",
      href: "mailto:bhaviyashreekavi@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/bhaviyashree-murugan",
      href: "https://www.linkedin.com/in/bhaviyashree-murugan",
      description: "Let's connect professionally"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Bhaviyashree",
      href: "https://github.com/Bhaviyashree",
      description: "Check out my projects"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      href: "",
      description: "Based in India"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="contact-item section-title">Let's Connect</h2>
          <p className="contact-item text-lg text-muted-dark max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            or simply connecting with fellow technology enthusiasts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="contact-item">
              <h3 className="text-2xl font-semibold mb-6 glow-text">Get In Touch</h3>
              <p className="text-muted-dark mb-8 leading-relaxed">
                Whether you're looking for a dedicated AI & Data Science professional, 
                want to collaborate on exciting projects, or just want to say hello, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="contact-item portfolio-card p-6 block hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-background flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{info.label}</h4>
                      <p className="text-primary font-medium mb-1">{info.value}</p>
                      <p className="text-muted-dark text-sm">{info.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-item portfolio-card p-8">
            <h3 className="text-2xl font-semibold mb-6 glow-text">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="YourMailId@mail.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-item portfolio-card p-8 mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 glow-text">Ready to Collaborate?</h3>
          <p className="text-muted-dark mb-6">
            Let's work together to bring innovative AI and data science solutions to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center gap-2">
              <Mail size={20} />
              Email Me
            </button>
            <button className="btn-outline flex items-center gap-2">
              <Phone size={20} />
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
