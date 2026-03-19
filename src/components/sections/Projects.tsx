import { Section } from '../ui/Section';
import { FeatureCard } from '../ui/FeatureCard';

// TypeScript interface for our data structure
interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

// Data is separated from the UI component
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
    title: "SwimShop E-commerce",
    description: "A modern e-commerce storefront for swimming equipment. Built with a focus on responsive layout, fast load times, and a clean user interface.",
    tags: ["E-commerce", "React", "Tailwind CSS", "UI/UX"],
  }
];

export const Projects = () => {
  return (
    <Section id="projects" title="Selected Engineering Work">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <FeatureCard 
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            liveUrl={project.liveUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </Section>
  );
};