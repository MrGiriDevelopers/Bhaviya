import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo('.hero-description',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo('.hero-buttons',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.2'
    )
    .fromTo('.hero-avatar',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.4'
    );
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="hero-title section-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              AI & Data Science
              <br />
              <span className="glow-text">Innovator</span>
            </h1>
            
            <p className="hero-subtitle text-xl sm:text-2xl text-muted mb-4">
              Transforming Data into Intelligence
            </p>
            
            <p className="hero-description text-lg text-muted-dark max-w-2xl mb-8">
              Passionate B.Tech student specializing in Artificial Intelligence & Data Science, 
              with expertise in machine learning, full-stack development, and innovative problem-solving. 
              Building the future with intelligent solutions.
            </p>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
{/*               <button className="btn-primary flex items-center gap-2"> */}
                <a
                    href="/Sapthagiri-Resume.pdf" // make sure this file is inside public/ folder
                    download="Sapthagiri-Resume.pdf"
                    className="btn-primary flex items-center gap-2"
  >                <Download size={20} 
                />
                Download Resume
{/*               </button> */}
              <button className="btn-outline flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mt-8">
              <a href="#" className="text-muted hover:text-primary transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Avatar/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="hero-avatar relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-surface-elevated flex items-center justify-center">
                  <div className="text-8xl">🤖</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
