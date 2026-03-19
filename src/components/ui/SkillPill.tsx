import { cn } from "../../lib/utils";

type SkillLevel = 'expert' | 'proficient' | 'learning';

interface SkillPillProps {
  name: string;
  level?: SkillLevel;
}

export const SkillPill = ({ name, level = 'proficient' }: SkillPillProps) => {
  const styles = {
    expert: "border-accent/30 bg-accent/5 text-fg-default",
    proficient: "border-border-default bg-canvas-overlay text-fg-muted",
    learning: "border-orange-500/20 bg-orange-500/5 text-fg-muted"
  };

  const dotColors = {
    expert: "bg-accent",
    proficient: "bg-fg-muted",
    learning: "bg-orange-500"
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm transition-colors hover:border-fg-muted/50",
      styles[level]
    )}>
      <span className={cn("w-1.5 h-1.5 rounded-full", dotColors[level])} />
      {name}
    </div>
  );
};