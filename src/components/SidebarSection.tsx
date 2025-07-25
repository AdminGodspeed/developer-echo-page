
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { SkillsSection } from './SkillsSection';
import SocialLinks, { SocialLink } from './SocialLinks';
import Hobbies from './Hobbies';
import { TestimonialsSection } from './TestimonialsSection';


interface SidebarSectionProps {
  links: SocialLink[];
  hobbies?: string[];
  skills?: any[];
}

// Default hobbies if none are provided
const defaultHobbies = ['Photography', 'Rock Climbing', 'Cooking', 'Travel', 'Gaming', 'Reading'];

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  links,
  hobbies = defaultHobbies,
  skills
}) => {
  return (
    <div className="space-y-6">
      <SkillsSection skills={skills} />
      {/* Social Links */}
      <SocialLinks links={links} />
      {/* Hobbies & Interests */}
      <Hobbies/>
      <TestimonialsSection />
    </div>
  );
};
