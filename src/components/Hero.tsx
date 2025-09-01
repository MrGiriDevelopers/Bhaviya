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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="hero-subtitle inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Available for Projects
            </div>
            
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              A Creative
              <br />
              <span className="glow-text">AI/Data Science</span>
              <br />
              <span className="text-foreground">Innovator</span>
            </h1>
            
            <p className="hero-description text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Passionate B.Tech student specializing in Artificial Intelligence & Data Science, 
              creating intelligent solutions that transform data into meaningful insights and 
              drive innovation in the digital landscape.
            </p>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="/assets/BHAVIYASHREEM.pdf"
                download="BHAVIYASHREE-M.pdf"
                className="btn-primary flex items-center gap-3 text-base"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="btn-outline flex items-center gap-3 text-base"
              >
                <Mail size={20} />
                Get In Touch
              </a>
            </div>
            
            {/* Stats */}
            <div className="hero-buttons grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8.74</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="hero-buttons flex gap-4 justify-center lg:justify-start mt-8">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Professional Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="hero-avatar relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
                <div className="w-full h-full rounded-2xl bg-surface border border-border/50 overflow-hidden flex items-center justify-center">
                  {/* Professional Photo Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-surface-elevated to-card flex items-center justify-center text-6xl">
                    👩‍💻
                  </div>
                </div>
                
                {/* Floating Tech Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">🧠</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-primary-glow rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-500">
                  <span className="text-xl">⚡</span>
                </div>
                <div className="absolute top-1/2 -left-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-lg">💡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
