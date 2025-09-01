import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Technical Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#internship', label: 'Internship' },
    { href: '#contact', label: 'Contact Me' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate navbar on mount
    gsap.fromTo('.navbar-item', 
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      gsap.to(window, { 
        duration: 1, 
        scrollTo: { y: target.offsetTop, autoKill: false }, 
        ease: 'power2.inOut' 
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="navbar-item">
            <span className="glow-text text-2xl font-bold tracking-tight">
              BhaviyaShree<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className="navbar-item relative text-foreground hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide uppercase group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block navbar-item">
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, '#contact')}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-item text-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-surface"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-background/95 backdrop-blur-xl border-t border-border/50 rounded-b-2xl">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-surface/50 rounded-lg transition-all duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => smoothScroll(e, '#contact')}
                className="block mt-4 btn-primary text-center"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;