
import React from 'react';
import { SkillsSection } from './SkillsSection';
import { AspirationsSection } from './AspirationsSection';
import { IntroVideoSection } from './IntroVideoSection';
import { TestimonialsSection } from './TestimonialsSection';
import { SidebarSection } from './SidebarSection';

export const MainContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Main Content Area */}
      <div className="lg:col-span-2 space-y-8">
        <SkillsSection />
        <AspirationsSection />
        <IntroVideoSection />
        <TestimonialsSection />
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <SidebarSection />
      </div>
    </div>
  );
};
