
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Share2, Shield } from 'lucide-react';

export const Footer = () => {
  const [privacyEnabled, setPrivacyEnabled] = useState(true);

  return (
    <Card className="bg-gray-800 shadow-sm border-0 rounded-2xl">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Privacy Settings */}
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 font-medium">Privacy Mode</span>
            <Switch
              checked={privacyEnabled}
              onCheckedChange={setPrivacyEnabled}
              className="data-[state=checked]:bg-primary"
            />
          </div>

          {/* Generate Share Link */}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Share2 className="w-4 h-4 mr-2" />
            Generate Share Link
          </Button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-200 text-sm">
            © 2024 Alex Johnson. Built with React & Tailwind CSS.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
