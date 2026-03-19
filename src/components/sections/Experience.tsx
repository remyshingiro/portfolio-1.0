import { Section } from '../ui/Section';

const EXPERIENCE_DATA = [
  {
    role: "Full-Stack Developer",
    company: "Freelance / Independent",
    date: "Jan 2026 - Present",
    description: "Architected and deployed StreamIt, a high-traffic media platform. Implemented edge caching with Cloudflare to reduce latency by 40%. Built a real-time agricultural health tracker using React and Tailwind.",
  },
  {
    role: "Software Engineering Student",
    company: "RP-Gishari College",
    date: "2024 - Present",
    description: "Currently in my second year. Specializing in JavaScript ecosystems, algorithm design, and modern web architectures. Actively mentoring peers in React fundamentals.",
  },
  {
    role: "Frontend Web Developer (Trainee)",
    company: "The Gym Rwanda",
    date: "2025",
    description: "Intensive training in modern web development. Mastered responsive design, Git workflows, and component-driven architecture. Contributed to various open-source team projects.",
  }
];

export const Experience = () => {
  return (
    <Section id="experience" title="Experience & Trajectory">
      <div className="max-w-3xl border-l border-border-default ml-3 md:ml-4 space-y-12">
        {EXPERIENCE_DATA.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* The Timeline Dot */}
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-canvas-default" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-lg font-bold text-fg-default">{item.role}</h3>
              <time className="text-sm text-fg-muted font-mono mt-1 sm:mt-0">
                {item.date}
              </time>
            </div>
            
            <h4 className="text-sm font-medium text-accent mb-4">
              {item.company}
            </h4>
            
            <p className="text-fg-muted leading-relaxed text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};