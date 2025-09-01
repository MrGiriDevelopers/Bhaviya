import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-item',
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

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Data Science",
      excerpt: "Exploring how artificial intelligence is revolutionizing data science and creating new possibilities for innovation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      date: "Dec 15, 2024",
      author: "BhaviyaShree M",
      category: "AI & Machine Learning",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications",
      excerpt: "Best practices for developing robust and scalable web applications using modern frameworks and cloud technologies.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop",
      date: "Dec 10, 2024",
      author: "BhaviyaShree M",
      category: "Web Development",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Machine Learning in Real-World Applications",
      excerpt: "Case studies and practical examples of how machine learning is being applied to solve complex real-world problems.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop",
      date: "Dec 5, 2024",
      author: "BhaviyaShree M",
      category: "Data Science",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="blog-item section-title">See My Latest Blog and News</h2>
          <p className="blog-item text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts on AI, data science, and technology trends 
            to help others learn and grow in these exciting fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-item blog-card group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all duration-300">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="blog-item text-center mt-12">
          <button className="btn-outline inline-flex items-center gap-2 text-base">
            View All Articles
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;