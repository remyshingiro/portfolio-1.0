import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion'; // <-- EXPLICIT TYPE IMPORT
import { Section } from '../ui/Section';
import { FeatureCard } from '../ui/FeatureCard';

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const PROJECTS_DATA: Project[] = [
  {
    title: "StreamIt Platform",
    description: "A high-performance streaming website optimized for fast content delivery. Engineered the frontend architecture and managed deployment via Cloudflare edge networks.",
    tags: ["React", "Tailwind CSS", "Cloudflare", "Video Streaming"],
    liveUrl: "https://agasobanuyefilime.com"
  },
  {
    title: "Agri-Health Tracker",
    description: "A management dashboard designed to modernize the tracking and maintenance of agricultural machinery for local cooperatives, ensuring maximum uptime.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Dashboard"],
    repoUrl: "https://github.com/remyshingiro"
  },
  {
    title: "KigaliSwimShop E-commerce",
    description: "A modern e-commerce storefront for swimming equipment. Built with a focus on responsive layout, fast load times, and a clean user interface.",
    tags: ["E-commerce", "React", "Tailwind CSS", "UI/UX"],
    liveUrl: "https://www.kigaliswimshop.online/"
  }
];

export const Projects = () => {
  // <-- APPLIED VARIANTS TYPE HERE
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // <-- APPLIED VARIANTS TYPE HERE
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <Section id="projects" title="Selected Engineering Work">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {PROJECTS_DATA.map((project, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <FeatureCard 
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              className="h-full" 
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};