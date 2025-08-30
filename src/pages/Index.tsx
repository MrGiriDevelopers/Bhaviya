import { useEffect } from 'react';
import { gsap } from 'gsap';
import Hero from '@/components/Hero';

const Index = () => {
  useEffect(() => {
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
      <Hero />
    </div>
  );
};

export default Index;
