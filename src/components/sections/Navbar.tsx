import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../../lib/utils';

const NAV_LINKS = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Activity', href: '#activity' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="h-16 border-b border-border-default bg-canvas-default/90 backdrop-blur-md sticky top-0 z-50 px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <span 
          className="font-bold text-lg tracking-tight hover:text-accent transition-colors cursor-pointer z-50" 
          onClick={() => { window.scrollTo(0, 0); closeMenu(); }}
        >
          remy.dev
        </span>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-fg-muted">
          <div className="flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="hover:text-fg-default text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="w-px h-4 bg-border-default mx-2"></div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/remyshingiro" target="_blank" rel="noreferrer" className="hover:text-fg-default transition-colors">
              <Github size={20} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-fg-default transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-fg-default transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-50 text-fg-default p-2 -mr-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-canvas-default/95 backdrop-blur-lg z-40 flex flex-col pt-24 px-6 transition-all duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <div className="flex flex-col gap-6 text-xl font-semibold text-fg-default">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={closeMenu}
              className="border-b border-border-default pb-4 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-auto pb-12 flex justify-center gap-8 text-fg-muted">
          <a href="https://github.com/remyshingiro" target="_blank" rel="noreferrer" className="hover:text-fg-default">
            <Github size={28} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-fg-default">
            <Linkedin size={28} />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-fg-default">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </>
  );
};