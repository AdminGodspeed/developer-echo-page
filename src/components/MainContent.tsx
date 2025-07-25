
import React from 'react';
import { SkillsSection } from './SkillsSection';
import { AspirationsSection } from './AspirationsSection';
import { IntroVideoSection } from './IntroVideoSection';
import { TestimonialsSection } from './TestimonialsSection';
import { SidebarSection } from './SidebarSection';
import { SocialLink, SocialPlatform } from './SocialLinks';
import { ProjectsSection } from './ProjectsSection';

interface MainContentProps {
  links: SocialLink[];
  aspiration?: string;
  introVideo?: string;
  testimonials?: any[];
  hobbies?: string[];
  professionalSkills?: any[];
}

export const MainContent: React.FC<MainContentProps> = ({
  links,
  aspiration,
  introVideo,
  testimonials,
  hobbies,
  professionalSkills
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Main Content Area */}
      <div className="lg:col-span-2 space-y-8">
        <AspirationsSection aspiration={aspiration} />
        <IntroVideoSection videoUrl={introVideo} />
        <ProjectsSection/>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <SidebarSection
          links={links}
          hobbies={hobbies}
          skills={professionalSkills}
        />
      </div>
    </div>
  );
};
