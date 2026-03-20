import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <Section id="contact" title="Get in Touch" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        
        {/* Left Column: Contact Information */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-bold text-fg-default mb-2">Let's build something scalable.</h3>
            <p className="text-fg-muted leading-relaxed">
              I am currently open to new opportunities in frontend and full-stack engineering. 
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'd love to hear from you.
            </p>
          </div>
          
          <div className="space-y-6 mt-4">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-canvas-overlay border border-border-default rounded-lg text-accent group-hover:border-accent/50 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-fg-muted font-medium mb-1">Email</p>
                <a href="mailto:your.email@example.com" className="text-fg-default hover:text-accent transition-colors">
                  shingiroremy303@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-canvas-overlay border border-border-default rounded-lg text-accent group-hover:border-accent/50 transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-fg-muted font-medium mb-1">Phone</p>
                <a href="tel:+250123456789" className="text-fg-default hover:text-accent transition-colors">
                  +250 784 154 697
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-canvas-overlay border border-border-default rounded-lg text-accent group-hover:border-accent/50 transition-colors">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-fg-muted font-medium mb-1">Location</p>
                <p className="text-fg-default">Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: The Working Form */}
        <div className="bg-canvas-overlay/30 border border-border-default rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-5">
            
            {/* INJECTING THE ENV VARIABLE HERE */}
            <input 
              type="hidden" 
              name="access_key" 
              value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} 
            />
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-fg-default">Full Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                className="bg-canvas-default border border-border-default rounded-lg px-4 py-3 text-fg-default placeholder:text-border-default focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="Mike Cyubahiro"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-fg-default">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                className="bg-canvas-default border border-border-default rounded-lg px-4 py-3 text-fg-default placeholder:text-border-default focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="yourName@gmail.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-fg-default">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={4}
                required 
                className="bg-canvas-default border border-border-default rounded-lg px-4 py-3 text-fg-default placeholder:text-border-default focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <Button type="submit" icon={Send} className="w-full py-3 mt-2">
              Send Message
            </Button>
          </form>
        </div>
        
      </div>
    </Section>
  );
};