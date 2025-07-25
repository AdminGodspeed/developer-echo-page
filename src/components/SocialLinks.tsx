import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Linkedin, Github, Twitter, Globe, Youtube, User } from 'lucide-react';

export enum SocialPlatform {
  LINKEDIN = 'LINKEDIN',
  GITHUB = 'GITHUB',
  TWITTER = 'TWITTER',
  FACEBOOK = 'FACEBOOK',
  PERSONAL_WEBSITE = 'PERSONAL_WEBSITE',
  HACKERRANK = 'HACKERRANK',
  LEETCODE = 'LEETCODE',
  YOUTUBE = 'YOUTUBE',
  OTHER = 'OTHER',
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  const getIcon = (platform: SocialPlatform) => {
    switch (platform) {
      case SocialPlatform.LINKEDIN:
        return <Linkedin className="w-4 h-4 mr-2 text-blue-400" />;
      case SocialPlatform.GITHUB:
        return <Github className="w-4 h-4 mr-2 text-gray-300" />;
      case SocialPlatform.TWITTER:
        return <Twitter className="w-4 h-4 mr-2 text-blue-400" />;
      case SocialPlatform.PERSONAL_WEBSITE:
        return <Globe className="w-4 h-4 mr-2 text-green-400" />;
      case SocialPlatform.YOUTUBE:
        return <Youtube className="w-4 h-4 mr-2 text-red-400" />;
      default:
        return <User className="w-4 h-4 mr-2 text-primary" />;
    }
  };

  return (
    <Card className="bg-gray-800 shadow-sm border-0 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">
          Connect With Me
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {links.map((link, index) => (
          <div key={index} className="text-gray-300 flex items-center">
            {getIcon(link.platform)}
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.platform}
            </a>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SocialLinks;
