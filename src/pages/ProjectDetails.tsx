
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Download, 
  Star, 
  GitFork, 
  Eye, 
  Calendar,
  User,
  MessageCircle,
  Share2,
  Play
} from 'lucide-react';

// Mock project data - in a real app this would come from an API
const projectData = {
  id: 1,
  title: "E-Commerce Platform",
  type: "Software",
  description: "A comprehensive full-stack e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe integration, order management, and admin dashboard. The platform is designed to be scalable, secure, and user-friendly.",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
  techStack: [
    { name: "React", category: "Frontend", color: "bg-blue-100 text-blue-800" },
    { name: "Node.js", category: "Backend", color: "bg-green-100 text-green-800" },
    { name: "MongoDB", category: "Backend", color: "bg-green-100 text-green-800" },
    { name: "Stripe", category: "Backend", color: "bg-green-100 text-green-800" },
    { name: "Jest", category: "Tests", color: "bg-red-100 text-red-800" }
  ],
  stats: {
    stars: 124,
    forks: 32,
    downloads: 2500,
    watchers: 15
  },
  license: "MIT",
  commercialModel: "Free",
  version: "2.1.0",
  lastUpdated: "2024-01-15",
  owner: {
    name: "John Developer",
    contribution: "Lead Developer & Maintainer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  liveDemo: "https://demo.example.com",
  repository: "https://github.com/example/ecommerce",
  readme: `# E-Commerce Platform

## Features
- User authentication and authorization
- Product catalog with search and filtering
- Shopping cart functionality
- Stripe payment integration
- Order management system
- Admin dashboard
- Responsive design

## Installation
\`\`\`bash
npm install
npm start
\`\`\`

## Usage
1. Clone the repository
2. Install dependencies
3. Set up environment variables
4. Run the development server`,
  team: [
    {
      name: "John Developer",
      role: "Lead Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Designer",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    }
  ],
  reviews: [
    {
      user: "Alice Johnson",
      rating: 5,
      comment: "Excellent project! Clean code and great documentation.",
      date: "2024-01-10"
    },
    {
      user: "Bob Smith",
      rating: 4,
      comment: "Very useful platform. Could use more customization options.",
      date: "2024-01-05"
    }
  ]
};

const ProjectDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [reviewText, setReviewText] = useState("");
  const [userRating, setUserRating] = useState(0);

  const renderStars = (rating: number, interactive: boolean = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={interactive ? () => setUserRating(i + 1) : undefined}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Projects</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{projectData.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="relative rounded-2xl overflow-hidden mb-6">
            <img
              src={projectData.image}
              alt={projectData.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge className="mb-3 bg-blue-600 hover:bg-blue-700">
                {projectData.type}
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {projectData.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {projectData.techStack.map((tech, index) => (
                  <Badge key={index} className={tech.color}>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              View Repository
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="demo">Demo</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {projectData.description}
                    </p>
                    
                    <div className="prose max-w-none">
                      <h3 className="text-lg font-semibold mb-3">README</h3>
                      <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{projectData.readme}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="demo" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Demo Videos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-100 rounded-lg aspect-video flex items-center justify-center">
                        <Play className="w-12 h-12 text-slate-400" />
                      </div>
                      <div className="bg-slate-100 rounded-lg aspect-video flex items-center justify-center">
                        <Play className="w-12 h-12 text-slate-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="code" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Repository Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Tech Stack Breakdown</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-slate-700 mb-2">Frontend</p>
                            <div className="space-y-1">
                              {projectData.techStack.filter(tech => tech.category === 'Frontend').map((tech, index) => (
                                <Badge key={index} className={tech.color}>{tech.name}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-700 mb-2">Backend</p>
                            <div className="space-y-1">
                              {projectData.techStack.filter(tech => tech.category === 'Backend').map((tech, index) => (
                                <Badge key={index} className={tech.color}>{tech.name}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {/* Leave Review Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Leave a Review</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Rating</label>
                          <div className="flex gap-1">
                            {renderStars(userRating, true)}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Comment</label>
                          <Textarea
                            placeholder="Share your thoughts about this project..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                          />
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Submit Review
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {projectData.reviews.map((review, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="font-medium">{review.user}</p>
                              <div className="flex gap-1 my-1">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                            <p className="text-sm text-slate-500">{review.date}</p>
                          </div>
                          <p className="text-slate-600">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Project Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Project Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Stars</span>
                  </div>
                  <span className="font-medium">{projectData.stats.stars}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitFork className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">Forks</span>
                  </div>
                  <span className="font-medium">{projectData.stats.forks}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">Downloads</span>
                  </div>
                  <span className="font-medium">{projectData.stats.downloads}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">Watchers</span>
                  </div>
                  <span className="font-medium">{projectData.stats.watchers}</span>
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-slate-700">License</p>
                  <p className="text-sm text-slate-600">{projectData.license}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Commercial Model</p>
                  <Badge variant="secondary">{projectData.commercialModel}</Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Version</p>
                  <p className="text-sm text-slate-600">{projectData.version}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Last Updated</p>
                  <p className="text-sm text-slate-600">{projectData.lastUpdated}</p>
                </div>
              </CardContent>
            </Card>

            {/* Owner Information */}
            <Card>
              <CardHeader>
                <CardTitle>Project Owner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3 mb-4">
                  <img
                    src={projectData.owner.avatar}
                    alt={projectData.owner.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{projectData.owner.name}</p>
                    <p className="text-sm text-slate-600">{projectData.owner.contribution}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Owner
                </Button>
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {projectData.team.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="text-xs text-slate-600">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
