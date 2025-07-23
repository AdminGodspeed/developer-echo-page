
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Linkedin, Mail, Globe } from 'lucide-react';

// Define the UserProfile interface based on the Prisma schema
interface UserProfile {
  firstName: string;
  lastName: string;
  profilePic?: string;
  about?: string;
  currentStatuses: string[]; // Corresponds to CurrentStatus enum in Prisma
  socialLinks: Array<{
    platform: string; // Corresponds to SocialPlatform enum in Prisma
    url: string;
  }>;
  // Add other fields from the schema if needed in the future
  // For now, we'll focus on the ones relevant to the header
}

interface HeaderProps {
  user: UserProfile;
}

export const Header = ({ user }: HeaderProps) => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="w-4 h-4 mr-2" />;
      case 'personal_website':
        return <Globe className="w-4 h-4 mr-2" />;
      // Add more cases for other platforms like GitHub, Twitter, etc.
      default:
        return <Mail className="w-4 h-4 mr-2" />; // Default to mail icon for others
    }
  };

  return (
    <Card className="p-8 mb-8 bg-gray-800 shadow-sm border-0 rounded-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src={user.profilePic || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-700"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {user.firstName} {user.lastName}
            </h1>
            {user.about && (
              <p className="text-base text-gray-300 mb-4">
                {user.about}
              </p>
            )}
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {user.currentStatuses.map((status, index) => (
              <Badge
                key={index}
                variant={status === 'OPEN_FOR_WORK' ? 'default' : status === 'FREELANCING' ? 'secondary' : 'outline'}
                className={
                  status === 'OPEN_FOR_WORK'
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : status === 'FREELANCING'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-gray-300'
                }
              >
                {status.replace(/_/g, ' ')}
              </Badge>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-3">
            {user.socialLinks.map((link, index) => (
              <Button key={index} variant="outline" className="text-gray-300" onClick={() => window.open(link.url, '_blank')}>
                {getSocialIcon(link.platform)}
                {link.platform.replace(/_/g, ' ')}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
