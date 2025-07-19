
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Play } from 'lucide-react';

const testimonials = [
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
    role: "CTO at StartupXYZ"
  },
  {
    type: 'text',
    content: "Working with Alex was a game-changer for our team. They brought fresh ideas and technical expertise that elevated our entire project.",
    author: "Emma Thompson",
    role: "Design Lead at CreativeStudio",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <Card className="bg-gray-800 shadow-sm border-0 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">
          Testimonials
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-700 rounded-xl p-6">
              {testimonial.type === 'text' ? (
                <>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-200">{testimonial.role}</p>
                  </div>
                </>
              ) : (
                <div className="relative aspect-video bg-gray-600 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={testimonial.thumbnail}
                    alt="Video testimonial"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-gray-800 ml-0.5" />
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
