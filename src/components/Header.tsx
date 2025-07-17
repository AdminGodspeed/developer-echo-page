
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Linkedin, Mail, Globe } from 'lucide-react';

export const Header = () => {
  return (
    <Card className="p-8 mb-8 bg-white shadow-sm border-0 rounded-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-slate-100"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Alex Johnson
            </h1>
            <p className="text-xl text-slate-600 mb-4">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="default" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              Open for Work
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Freelancing
            </Badge>
            <Badge variant="outline" className="border-slate-300">
              Study
            </Badge>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" className="border-slate-300 hover:bg-slate-50">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" className="border-slate-300 hover:bg-slate-50">
              <Globe className="w-4 h-4 mr-2" />
              Website
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
