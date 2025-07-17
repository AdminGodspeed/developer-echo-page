
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';

export const IntroVideoSection = () => {
  return (
    <Card className="bg-white shadow-sm border-0 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-slate-900">
          Introduction Video
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden group cursor-pointer hover:bg-slate-200 transition-colors">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=450&fit=crop"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
            <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-slate-800 ml-1" />
            </div>
          </div>
        </div>
        <p className="text-slate-600 mt-4">Get to know me better in this 2-minute introduction video.</p>
      </CardContent>
    </Card>
  );
};
