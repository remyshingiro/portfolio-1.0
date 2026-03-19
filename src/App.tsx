import { MapPin, Link as LinkIcon } from 'lucide-react';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-canvas-overlay border border-border-default p-6 rounded-xl max-w-sm w-full">
        <div className="w-24 h-24 rounded-full bg-accent mb-4 border-4 border-border-default" />
        <h1 className="text-2xl font-bold">Remy Shingiro</h1>
        <p className="text-fg-muted mb-4">Software Developer</p>
        
        <div className="space-y-2 text-sm text-fg-muted">
          <div className="flex items-center gap-2">
            <MapPin size={16} /> Kigali, Rwanda
          </div>
          <div className="flex items-center gap-2 text-accent">
            <LinkIcon size={16} /> <span className="hover:underline">remy.space</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App