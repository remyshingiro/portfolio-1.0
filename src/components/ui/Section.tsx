import { cn } from "../../lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  children: React.ReactNode;
}

export const Section = ({ id, title, children, className, ...props }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn("py-16 md:py-24 scroll-mt-16", className)} 
      aria-label={title || id}
      {...props}
    >
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-fg-default mb-8 md:mb-12">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};