import { GitHubCalendar } from 'react-github-calendar';
import { Section } from '../ui/Section';

export const GithubActivity = () => {
  // We explicitly define the theme to match our Tailwind v4 CSS variables
  const explicitTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <Section id="activity" title="Engineering Consistency">
      <p className="text-fg-muted mb-8 max-w-2xl">
        I believe in writing code every day. Here is a live feed of my open-source and private contributions fetched directly from the GitHub API.
      </p>
      
      <div className="p-6 md:p-8 rounded-2xl border border-border-default bg-canvas-overlay/30 overflow-x-auto no-scrollbar">
        <div className="min-w-[800px]"> {/* Ensures it doesn't crush on mobile */}
          <GitHubCalendar 
            username="remyshingiro" 
            theme={explicitTheme}
            colorScheme="dark"
            fontSize={12}
            blockSize={12}
            blockMargin={4}
          />
        </div>
      </div>
    </Section>
  );
};