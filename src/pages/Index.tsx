import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Internship from '@/components/Internship';
import Contact from '@/components/Contact';
import AIAssistant from '@/components/AIAssistant';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scrolling configuration
    gsap.config({
      nullTargetWarn: false,
    });

    // Custom scrollbar styling
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: hsl(var(--surface));
      }
      ::-webkit-scrollbar-thumb {
        background: hsl(var(--primary));
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: hsl(var(--primary-dark));
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Internship />
        <Contact />
      </main>
      <AIAssistant />
      
      {/* Footer */}
      <footer className="bg-surface-elevated border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-dark">
              © {new Date().getFullYear()} AI Portfolio. Built with passion for innovation and technology.
            </p>
            <p className="text-sm text-muted mt-2">
              Crafted with React, TypeScript, Tailwind CSS, and GSAP animations
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
