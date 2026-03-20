import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion'; // <-- EXPLICIT TYPE IMPORT

export const Hero = () => {
  // <-- APPLIED VARIANTS TYPE HERE
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // <-- APPLIED VARIANTS TYPE HERE
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15 
      },
    },
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8 overflow-hidden">
      
      {/* Left Column: Text & Call to Actions */}
      <motion.div 
        className="flex-1 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 text-accent mb-6">
          <MapPin size={16} />
          <span className="text-sm font-mono tracking-tight uppercase">Kigali, Rwanda</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-fg-default mb-6 leading-tight">
          Building scalable web apps and exploring AI for local impact.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-fg-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          I'm Remy Shingiro, a Software Engineer specializing in the React ecosystem. 
          I engineer high-performance, accessible digital products—from resilient streaming platforms 
          to agricultural tech solutions.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a href="#projects" className="w-full sm:w-auto">
            <Button icon={ArrowRight} className="w-full">
              View My Work
            </Button>
          </a>
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" icon={FileText} className="w-full">
              Download Resume
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Right Column: The Avatar */}
      <motion.div 
        className="relative group shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated breathing glow effect */}
        <motion.div 
          className="absolute inset-0 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border border-border-default overflow-hidden bg-canvas-overlay p-2 shadow-2xl">
          <img 
            src="https://github.com/remyshingiro.png" 
            alt="Remy Shingiro" 
            className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
        </div>
      </motion.div>
      
    </section>
  );
};