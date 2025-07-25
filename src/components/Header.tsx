import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Linkedin, Mail, Globe, MapPin, Download, Github, Twitter, Youtube } from 'lucide-react';

// Define the UserProfile interface based on the comprehensive schema
interface UserProfile {
  firstName: string;
  lastName: string;
  profilePic?: string;
  about?: string;
  location?: string;
  title?: string;
  currentStatuses: string[];
  resumeUrl?: string;
  blogUrl?: string;
  portfolioUrl?: string;
  email?: string;
  // Add other fields as needed
}

interface HeaderProps {
  user: UserProfile;
  primaryColor?: string;
}

// Image component with fallback for error handling
function ImageWithFallback({ src, alt, className, ...rest }: React.ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }) {
  const [didError, setDidError] = useState(false);

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img 
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==" 
          alt="Error loading image" 
          {...rest} 
          data-original-url={src} 
        />
      </div>
    </div>
  ) : (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      {...rest} 
      onError={() => setDidError(true)} 
    />
  );
}

// Status badge component with color mapping
const StatusBadge = ({ status }: { status: string }) => {
  const statusConfig: Record<string, { variant: "default" | "secondary" | "outline" | "destructive" | "tertiary" | null, className: string }> = {
    "OPEN_FOR_WORK": {
      variant: "default",
      className: "bg-emerald-800 text-emerald-100 border-emerald-700"
    },
    "EMPLOYED": {
      variant: "secondary",
      className: "bg-blue-900 text-blue-100 border-blue-700"
    },
    "FREELANCING": {
      variant: "tertiary",
      className: "bg-purple-900 text-purple-100 border-purple-700"
    },
    "STUDYING": {
      variant: "outline",
      className: "bg-gray-700 text-white border-gray-700"
    },
    "INTERNING": {
      variant: "outline",
      className: "bg-indigo-900 text-indigo-100 border-indigo-700"
    }
  };

  const config = statusConfig[status] || {
    variant: "outline",
    className: "bg-gray-900 text-gray-100 border-gray-700"
  };

  return (
    <Badge
      variant={config.variant}
      className={cn("px-3 py-1 text-sm font-medium rounded-full border", config.className)}
    >
      {status.replace(/_/g, ' ')}
    </Badge>
  );
};

export const Header = ({ user, primaryColor = "hsl(39, 100%, 66%)" }: HeaderProps) => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      case 'personal_website':
        return <Globe className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />; // Default to mail icon for others
    }
  };

  const handleDownloadResume = () => {
    // If resumeUrl is available, navigate to it, otherwise show alert
    if (user.resumeUrl) {
      window.open(user.resumeUrl, '_blank');
    } else {
      alert("Downloading resume...");
    }
  };

  return (
    <header className="w-full bg-[#18212f] border-b border-gray-700 mb-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Picture with online indicator */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4" style={{ borderColor: primaryColor }}>
              <ImageWithFallback 
                src={user.profilePic || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-green-500 border-2 border-[#18212f]"></div>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-base text-gray-300 my-2">
              {user.about
                ? user.about.split('.')[0] + (user.about.includes('.') ? '.' : '')
                : "Developer"}
            </p>
            
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
              {/* Show maximum 2 status badges */}
              {user.currentStatuses.slice(0, 2).map((status, index) => (
                <StatusBadge key={index} status={status} />
              ))}
              
              {/* Location field next to status badges */}
              {user.location && (
                <span className="flex items-center gap-1 text-sm text-[#D9E7EB] ml-1 font-sans">
                  <MapPin size={14} />
                  {user.location}
                </span>
              )}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <Button 
              variant="default"
              className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-dark font-medium flex items-center gap-2"
              onClick={handleDownloadResume}
            >
              <Globe size={16} />
              Resume
            </Button>
            
            <Button
              variant="secondary"
              className="px-4 py-2 rounded-lg bg-secondary border-none hover:bg-gray-800 text-white font-medium flex items-center gap-2"
              asChild
            >
              <a href={`mailto:${user.email || user.firstName.toLowerCase() + '@example.com'}`}>
                <Mail size={16} />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
