import { forwardRef } from 'react';
import { LucideIcon, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  variant?: 'primary' | 'outline' | 'ghost';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon: Icon, variant = 'primary', isLoading, className, disabled, ...props }, ref) => {
    
    const variants = {
      primary: "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20 border border-transparent",
      outline: "border border-border-default bg-transparent hover:bg-canvas-overlay text-fg-default",
      ghost: "bg-transparent hover:bg-canvas-overlay border-transparent text-fg-muted hover:text-fg-default"
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none text-sm",
          variants[variant],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="animate-spin" size={16} />}
        {!isLoading && Icon && <Icon size={16} />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';