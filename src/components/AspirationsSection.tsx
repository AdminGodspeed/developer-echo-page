
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface AspirationsProps {
  aspiration?: string;
}

export const AspirationsSection: React.FC<AspirationsProps> = ({ aspiration }) => {
  return (
    <Card className="bg-gray-800 shadow-sm border-0 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">
          Professional Aspirations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose prose-slate max-w-none">
          {aspiration ? (
            <p className="text-gray-300 leading-relaxed text-lg">
              {aspiration}
            </p>
          ) : (
            <>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm passionate about creating innovative digital solutions that bridge the gap between
                design and functionality. My goal is to work with forward-thinking teams where I can
                contribute to meaningful projects while continuously learning and growing.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm particularly interested in roles that involve full-stack development, user experience
                design, and emerging technologies. I believe in writing clean, maintainable code and
                creating user-centered designs that solve real-world problems.
              </p>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
