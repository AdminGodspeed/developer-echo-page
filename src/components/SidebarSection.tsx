
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Github, Twitter } from 'lucide-react';

const hobbies = ['Photography', 'Rock Climbing', 'Cooking', 'Travel', 'Gaming', 'Reading'];

export const SidebarSection = () => {
  return (
    <div className="space-y-6">
      {/* Social Links */}
      <Card className="bg-white shadow-sm border-0 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-900">
            Connect With Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start border-slate-300 hover:bg-slate-50">
            <Linkedin className="w-4 h-4 mr-3 text-blue-600" />
            LinkedIn
          </Button>
          <Button variant="outline" className="w-full justify-start border-slate-300 hover:bg-slate-50">
            <Github className="w-4 h-4 mr-3 text-slate-700" />
            GitHub
          </Button>
          <Button variant="outline" className="w-full justify-start border-slate-300 hover:bg-slate-50">
            <Twitter className="w-4 h-4 mr-3 text-blue-400" />
            Twitter
          </Button>
        </CardContent>
      </Card>

      {/* Hobbies & Interests */}
      <Card className="bg-white shadow-sm border-0 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-900">
            Hobbies & Interests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-slate-300 text-slate-600 hover:bg-slate-50 transition-colors"
              >
                {hobby}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
