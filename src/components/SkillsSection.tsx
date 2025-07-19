
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker',
  'GraphQL', 'PostgreSQL', 'MongoDB', 'Figma', 'Tailwind CSS',
  'Next.js', 'Express.js', 'Git', 'Jest', 'Redux'
];

export const SkillsSection = () => {
  return (
    <Card className="bg-gray-800 shadow-sm border-0 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">
          Professional Skills
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-pointer px-3 py-1"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
