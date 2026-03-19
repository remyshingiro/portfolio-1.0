import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { GithubActivity } from './components/sections/GithubActivity';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas-default text-fg-default font-sans selection:bg-accent/30 selection:text-white">
      
      {/* Minimalist Top Navigation */}
      <nav className="h-16 border-b border-border-default bg-canvas-default/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6 lg:px-12">
        <span className="font-bold text-lg tracking-tight">remy.dev</span>
        
        <div className="flex items-center gap-4 text-fg-muted">
          <a 
            href="https://github.com/remyshingiro" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-fg-default transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-fg-default transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="hover:text-fg-default transition-colors"
            aria-label="Email Me"
          >
            <Mail size={20} />
          </a>
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Hero />
        <Skills />
        <Projects />
        <GithubActivity />
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-border-default mt-24 py-8 text-center text-sm text-fg-muted">
        <p>© {new Date().getFullYear()} Remy Shingiro. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}