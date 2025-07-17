
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Share2, Shield } from 'lucide-react';

export const Footer = () => {
  const [privacyEnabled, setPrivacyEnabled] = useState(true);

  return (
    <Card className="bg-white shadow-sm border-0 rounded-2xl">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Privacy Settings */}
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-slate-600" />
            <span className="text-slate-700 font-medium">Privacy Mode</span>
            <Switch
              checked={privacyEnabled}
              onCheckedChange={setPrivacyEnabled}
              className="data-[state=checked]:bg-blue-600"
            />
          </div>

          {/* Generate Share Link */}
          <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
            <Share2 className="w-4 h-4 mr-2" />
            Generate Share Link
          </Button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 Alex Johnson. Built with React & Tailwind CSS.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
