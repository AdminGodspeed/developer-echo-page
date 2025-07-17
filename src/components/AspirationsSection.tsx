
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export const AspirationsSection = () => {
  return (
    <Card className="bg-white shadow-sm border-0 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-slate-900">
          Professional Aspirations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed text-lg">
            I'm passionate about creating innovative digital solutions that bridge the gap between 
            design and functionality. My goal is to work with forward-thinking teams where I can 
            contribute to meaningful projects while continuously learning and growing.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            I'm particularly interested in roles that involve full-stack development, user experience 
            design, and emerging technologies. I believe in writing clean, maintainable code and 
            creating user-centered designs that solve real-world problems.
          </p>
        </div>
        
        <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </Button>
      </CardContent>
    </Card>
  );
};
