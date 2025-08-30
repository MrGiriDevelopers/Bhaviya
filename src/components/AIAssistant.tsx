import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { MessageCircle, X, Sparkles, Brain, Code, Database } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHighlight, setCurrentHighlight] = useState(0);

  const highlights = [
    { icon: <Brain className="w-5 h-5" />, text: "AI & ML Expert", color: "text-primary" },
    { icon: <Code className="w-5 h-5" />, text: "Full-Stack Developer", color: "text-secondary" },
    { icon: <Database className="w-5 h-5" />, text: "Data Scientist", color: "text-accent" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Innovation Driven", color: "text-primary" }
  ];

  useEffect(() => {
    // Animate widget on mount
    gsap.fromTo('.ai-widget',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 2 }
    );

    // Cycle through highlights
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.ai-panel',
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  const togglePanel = () => {
    if (isOpen) {
      gsap.to('.ai-panel',
        { 
          opacity: 0, 
          y: 20, 
          scale: 0.9, 
          duration: 0.2, 
          ease: 'power2.in',
          onComplete: () => setIsOpen(false)
        }
      );
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* AI Assistant Widget */}
      <div className="ai-widget floating-widget" onClick={togglePanel}>
        <div className="flex items-center justify-center">
          {isOpen ? (
            <X className="w-6 h-6 text-background" />
          ) : (
            <div className="text-2xl">🤖</div>
          )}
        </div>
      </div>

      {/* AI Assistant Panel */}
      {isOpen && (
        <div className="ai-panel fixed bottom-24 right-4 w-80 bg-surface-elevated border border-border rounded-2xl shadow-elevated p-6 z-50">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold glow-text mb-2">AI Portfolio Assistant</h3>
            <p className="text-sm text-muted-dark">
              Hi! I'm your AI guide through this portfolio. Let me highlight what makes this developer special!
            </p>
          </div>

          {/* Rotating Highlights */}
          <div className="portfolio-card p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className={`${highlights[currentHighlight].color}`}>
                {highlights[currentHighlight].icon}
              </div>
              <span className="font-semibold text-foreground">
                {highlights[currentHighlight].text}
              </span>
            </div>
            <div className="text-sm text-muted-dark">
              {currentHighlight === 0 && "Specializes in machine learning, neural networks, and cutting-edge AI technologies with proven academic excellence."}
              {currentHighlight === 1 && "Proficient in MERN stack with hands-on experience in building scalable, responsive web applications."}
              {currentHighlight === 2 && "Expert in data analysis, visualization, and extracting meaningful insights from complex datasets."}
              {currentHighlight === 3 && "Always exploring new technologies and innovative solutions to solve real-world problems effectively."}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8.74</div>
              <div className="text-xs text-muted">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">2+</div>
              <div className="text-xs text-muted">Projects</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              className="w-full btn-primary text-sm py-2"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  gsap.to(window, { duration: 1, scrollTo: element, ease: 'power2.inOut' });
                  setIsOpen(false);
                }
              }}
            >
              Get In Touch
            </button>
            <button 
              className="w-full btn-outline text-sm py-2"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  gsap.to(window, { duration: 1, scrollTo: element, ease: 'power2.inOut' });
                  setIsOpen(false);
                }
              }}
            >
              View Projects
            </button>
          </div>

          {/* Conversation Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {highlights.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentHighlight ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;