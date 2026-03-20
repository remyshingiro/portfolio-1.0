import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
      
      {/* Left Column: Text & Call to Actions */}
      <div className="flex-1 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-2 text-accent mb-6">
          <MapPin size={16} />
          <span className="text-sm font-mono tracking-tight uppercase">Kigali, Rwanda</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-fg-default mb-6 leading-tight">
          Building scalable web apps and exploring AI for local impact.
        </h1>
        
        <p className="text-lg md:text-xl text-fg-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          I'm Remy Shingiro, a Software Engineer specializing in the React ecosystem. 
          I engineer high-performance, accessible digital products—from resilient streaming platforms 
          to agricultural tech solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          {/* Functional "View My Work" Button */}
          <a href="#projects" className="w-full sm:w-auto">
            <Button icon={ArrowRight} className="w-full">
              View My Work
            </Button>
          </a>
          
          {/* Functional "Download Resume" Button */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" icon={FileText} className="w-full">
              Download Resume
            </Button>
          </a>
        </div>
      </div>

      {/* Right Column: The Avatar */}
      <div className="relative group flex-shrink-0">
        {/* Subtle glowing background effect */}
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-700"></div>
        
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border border-border-default overflow-hidden bg-canvas-overlay p-2 shadow-2xl">
          <img 
            src="https://github.com/remyshingiro.png" 
            alt="Remy Shingiro" 
            className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      
    </section>
  );
};