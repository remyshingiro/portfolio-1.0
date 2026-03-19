import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  className?: string;
}

export const FeatureCard = ({ title, description, tags, repoUrl, liveUrl, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "group relative flex flex-col justify-between p-6 rounded-2xl border border-border-default bg-canvas-overlay/30 transition-all hover:border-accent/50 hover:bg-canvas-overlay",
      className
    )}>
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-fg-default group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="flex gap-3 text-fg-muted">
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noreferrer" className="hover:text-fg-default transition-colors" aria-label="View Source">
                <Github size={18} />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="View Live Site">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-fg-muted leading-relaxed mb-6">
          {description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-medium text-fg-muted bg-canvas-default px-2 py-1 rounded-md border border-border-default">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};