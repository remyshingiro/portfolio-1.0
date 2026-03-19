import { Suspense, lazy } from 'react';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Github, Linkedin, Mail, Loader2 } from 'lucide-react';

// LAZY LOADING: Defer loading these until the browser is idle
// This is a senior-level performance optimization that FAANG recruiters look for.
const GithubActivity = lazy(() => import('./components/sections/GithubActivity').then(m => ({ default: m.GithubActivity })));
const Experience = lazy(() => import('./components/sections/Experience').then(m => ({ default: m.Experience })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));

export default function App() {
  return (
    <div className="min-h-screen bg-canvas-default text-fg-default font-sans selection:bg-accent/30 selection:text-white scroll-smooth">
      
      {/* Navigation */}
      <nav className="h-16 border-b border-border-default bg-canvas-default/90 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6 lg:px-12">
        <span 
          className="font-bold text-lg tracking-tight hover:text-accent transition-colors cursor-pointer" 
          onClick={() => window.scrollTo(0,0)}
        >
          remy.dev
        </span>
        
        <div className="flex items-center gap-5 text-fg-muted">
          {/* Desktop Anchor Links */}
          <a href="#experience" className="hidden md:block hover:text-fg-default text-sm font-medium transition-colors">Experience</a>
          <a href="#projects" className="hidden md:block hover:text-fg-default text-sm font-medium transition-colors">Projects</a>
          <div className="w-px h-4 bg-border-default hidden md:block mx-2"></div>
          
          {/* Social Links */}
          <a href="https://github.com/remyshingiro" target="_blank" rel="noreferrer" className="hover:text-fg-default transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-fg-default transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-fg-default transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </nav>

      {/* Main Content Layout */}
      {/* We constrain the max-width to 1000px here to make reading easier on ultrawide monitors */}
      <main className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <Hero />
        <Skills />
        <Projects />
        
        {/* Suspense handles the loading state of deferred components */}
        <Suspense fallback={
          <div className="py-24 flex justify-center text-accent">
            <Loader2 className="animate-spin" size={32} />
          </div>
        }>
          <Experience />
          <GithubActivity />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-default mt-12 py-8 text-center text-sm text-fg-muted flex flex-col items-center gap-2">
        <p>© {new Date().getFullYear()} Remy Shingiro. Crafted with React & Tailwind CSS.</p>
        <p className="text-xs opacity-60">Deployed via Cloudflare Edge Network.</p>
      </footer>
    </div>
  );
}