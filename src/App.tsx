import { Suspense, lazy } from 'react';
import { Navbar } from './components/sections/Navbar'; // Import the new Navbar
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Loader2 } from 'lucide-react';

// LAZY LOADING: Defer loading these until the browser is idle
const GithubActivity = lazy(() => import('./components/sections/GithubActivity').then(m => ({ default: m.GithubActivity })));
const Experience = lazy(() => import('./components/sections/Experience').then(m => ({ default: m.Experience })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));

export default function App() {
  return (
    <div className="min-h-screen bg-canvas-default text-fg-default font-sans selection:bg-accent/30 selection:text-white scroll-smooth">
      
      {/* The Dedicated, Responsive Navbar Component */}
      <Navbar />

      {/* Main Content Layout */}
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