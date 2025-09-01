import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import imageSrc from 'src/assets/Bhaviya.png';

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.Home-title', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.Home-subtitle',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo('.Home-description',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo('.Home-buttons',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.2'
    )
    .fromTo('.Home-avatar',
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
            <div className="Home-subtitle inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Available for Projects
            </div>
            
            <h1 className="Home-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              A Creative
              <br />
              <span className="glow-text">AI/Data Science</span>
              <br />
              <span className="text-foreground">Innovator</span>
            </h1>
            
            <p className="Home-description text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Passionate B.Tech student specializing in Artificial Intelligence & Data Science, 
              creating intelligent solutions that transform data into meaningful insights and 
              drive innovation in the digital landscape.
            </p>
            
            <div className="Home-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
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
            <div className="Home-buttons grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <AnimatedCounter 
                  end={2} 
                  duration={2000} 
                  suffix="+" 
                  className="text-2xl font-bold text-primary" 
                />
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  end={8.74} 
                  duration={2500} 
                  decimals={2} 
                  className="text-2xl font-bold text-primary" 
                />
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  end={5} 
                  duration={1500} 
                  suffix="+" 
                  className="text-2xl font-bold text-primary" 
                />
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="Home-buttons flex gap-4 justify-center lg:justify-start mt-8">
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
        <div className="Home-avatar relative">
          {/* Main Image Container */}
          <div className="relative w-700px h-700px sm:w-64 sm:h-64 lg:w-80 lg:h-80">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              {/* Professional Photo */}
              <img 
                src="src/assets/Bhaviya.png" 
                alt="BhaviyaShree" 
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
