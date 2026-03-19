import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <div className="flex items-center gap-2 text-accent mb-6">
        <MapPin size={16} />
        <span className="text-sm font-mono tracking-tight uppercase">Kigali, Rwanda</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-fg-default mb-6 max-w-4xl leading-tight">
        Building scalable web applications and exploring AI for local impact.
      </h1>
      
      <p className="text-lg md:text-xl text-fg-muted mb-10 max-w-2xl leading-relaxed">
        I'm Remy Shingiro, a Software Engineer specializing in the React ecosystem. 
        I engineer high-performance, accessible digital products—from resilient streaming platforms 
        to agricultural tech solutions.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button icon={ArrowRight}>
          View My Work
        </Button>
        <Button variant="outline" icon={FileText}>
          Download Resume
        </Button>
      </div>
    </section>
  );
};