import { Section } from '../ui/Section';
import { SkillPill } from '../ui/SkillPill';

// Grouping skills shows architectural thinking
const SKILL_CATEGORIES = [
  {
    title: "Core Frontend",
    skills: [
      { name: "React.js", level: "expert" as const },
      { name: "JavaScript / ES6+", level: "expert" as const },
      { name: "TypeScript", level: "proficient" as const },
      { name: "Tailwind CSS", level: "expert" as const },
      { name: "Next.js", level: "learning" as const }
    ]
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Node.js", level: "proficient" as const },
      { name: "Cloudflare Pages/Workers", level: "proficient" as const },
      { name: "REST APIs", level: "expert" as const },
      { name: "GraphQL", level: "learning" as const }
    ]
  },
  {
    title: "Tools & Practices",
    skills: [
      { name: "Git & GitHub Actions", level: "proficient" as const },
      { name: "Vite", level: "expert" as const },
      { name: "Figma (UI/UX)", level: "proficient" as const },
      { name: "WCAG Accessibility", level: "learning" as const }
    ]
  }
];

export const Skills = () => {
  return (
    <Section id="skills" title="Technical Arsenal">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="flex flex-col gap-4 p-6 rounded-2xl border border-border-default bg-canvas-overlay/30">
            <h3 className="text-sm font-semibold text-fg-default uppercase tracking-wider mb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillPill key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};