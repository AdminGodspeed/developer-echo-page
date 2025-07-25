
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Play } from 'lucide-react';

// Default testimonials if none are provided
const defaultTestimonials = [
  {
    type: 'text',
    content: "Alex delivered exceptional work on our e-commerce platform. Their attention to detail and problem-solving skills are outstanding.",
    author: "Sarah Chen",
    role: "Product Manager at TechCorp",
    rating: 5
  },
  {
    type: 'video',
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=300&h=200&fit=crop&crop=face",
    author: "Michael Rodriguez",
    role: "CTO at StartupXYZ",
    videoUrl: "https://www.youtube.com/watch?v=example"
  },
  {
    type: 'text',
    content: "Working with Alex was a game-changer for our team. They brought fresh ideas and technical expertise that elevated our entire project.",
    author: "Emma Thompson",
    role: "Design Lead at CreativeStudio",
    rating: 4
  },
];

interface Testimonial {
  type: 'text' | 'video';
  content?: string;
  author?: string;
  authorName?: string;
  role?: string;
  relation?: string;
  rating?: number;
  thumbnail?: string;
  videoUrl?: string;
  message?: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials: propTestimonials }) => {
  // Use provided testimonials or fall back to defaults
  const displayTestimonials = propTestimonials?.length ?
    propTestimonials.map(t => ({
      type: t.videoUrl ? 'video' : 'text',
      content: t.message || t.content,
      author: t.authorName || t.author,
      role: t.relation || t.role,
      rating: t.rating || 5, // Default rating
      thumbnail: t.thumbnail || "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=300&h=200&fit=crop&crop=face", // Default thumbnail
      videoUrl: t.videoUrl
    })) :
    defaultTestimonials;
  return (
    <Card className="bg-gray-800 shadow-sm border-0 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">
          Testimonials
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6">
          {displayTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-700 rounded-xl p-6">
              {testimonial.type === 'text' ? (
                <>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary hover:fill-primary/80 hover:text-primary/80 transition-colors"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-200">{testimonial.role}</p>
                  </div>
                </>
              ) : (
                <div
                  className="relative aspect-video bg-gray-600 rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => {
                    if (testimonial.videoUrl) {
                      window.open(testimonial.videoUrl, '_blank');
                    }
                  }}
                >
                  {testimonial.thumbnail && (
                    <img
                      src={testimonial.thumbnail}
                      alt={`${testimonial.author} video testimonial`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=300&h=200&fit=crop";
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
                    <div className="bg-primary bg-opacity-90 rounded-full p-3 group-hover:scale-110 group-hover:bg-primary/80 transition-all">
                      <Play className="w-6 h-6 text-gray-900 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
