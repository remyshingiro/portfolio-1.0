import { Mail, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <Section id="contact" className="py-24">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto p-8 md:p-12 rounded-2xl border border-border-default bg-canvas-overlay/30">
        <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
          <Mail size={32} />
        </div>
        
        <h2 className="text-3xl font-bold text-fg-default mb-4">
          Let's build something scalable.
        </h2>
        
        <p className="text-fg-muted mb-8 text-lg">
          I am currently open for roles in frontend engineering and full-stack development. 
          Whether you have a question or just want to say hi, my inbox is open.
        </p>
        
        <a href="mailto:your.email@example.com?subject=Engineering%20Opportunity%20-%20Remy%20Shingiro">
          <Button icon={ArrowRight} className="px-8 py-4 text-base">
            Say Hello
          </Button>
        </a>
      </div>
    </Section>
  );
};