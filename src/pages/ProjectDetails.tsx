
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
  techStack: {
    Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"], 
    DevOps: ["Docker", "AWS", "Vercel", "GitHub Actions"],
    Testing: ["Jest", "Cypress", "React Testing Library"]
  },
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
      name: "John Doe",
      role: "Lead Developer",
      contribution: "Built the core API and database architecture",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Jane Smith", 
      role: "Frontend Developer",
      contribution: "Implemented the user interface and responsive design",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mike Johnson",
      role: "DevOps Engineer", 
      contribution: "Set up deployment pipeline and monitoring",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ],
  myContribution: "Led the architectural design and implemented the core authentication system. Collaborated with the team on API design and database optimization strategies.",
  releases: [
    { version: "v2.1.0", date: "2024-01-15", notes: "Added Stripe payment integration and improved performance" },
    { version: "v2.0.0", date: "2023-12-01", notes: "Major UI overhaul and mobile responsiveness" },
    { version: "v1.1.0", date: "2023-10-15", notes: "Added user dashboard and order tracking" },
    { version: "v1.0.0", date: "2023-08-01", notes: "Initial release with core e-commerce features" }
  ],
  videos: [
    { title: "Platform Demo", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Admin Features", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  ],
  testimonials: [
    { name: "Sarah Wilson", role: "Product Manager", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "David Chen", role: "Tech Lead", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
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
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-gray-300 hover:text-white">
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-500" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-200">Projects</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-500" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-200">{projectData.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" asChild className="text-gray-300 hover:text-white hover:bg-gray-800">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
          
          <div className="flex gap-2">
            <Button variant="outline" className="text-gray-300">
              Edit Project
            </Button>
            <Button variant="outline" className="text-gray-300">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Project Header Info */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {projectData.title}
            </h1>
            <Badge className="bg-primary text-primary-foreground">
              {projectData.type}
            </Badge>
            <Badge variant="secondary">
              {projectData.commercialModel}
            </Badge>
          </div>
        </div>

        {/* Cover Media Section */}
        <div className="mb-8">
          <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video">
            <img
              src={projectData.image}
              alt={projectData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
            <Button variant="outline" className="text-gray-300">
              <Github className="w-4 h-4 mr-2" />
              Repository
            </Button>
            <Button variant="outline" className="text-gray-300">
              <ExternalLink className="w-4 h-4 mr-2" />
              Documentation
            </Button>
            <Button variant="outline" className="text-gray-300">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="releases">Releases</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  {/* Description */}
                  <Card className="bg-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">Project Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {projectData.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Tech Stack */}
                  <Card className="bg-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">Tech Stack</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(projectData.techStack).map(([category, techs]) => (
                          <div key={category}>
                            <h4 className="font-medium mb-3 text-white">{category}</h4>
                            <div className="space-y-2">
                              {techs.map((tech, index) => (
                                <Badge key={index} variant={
                                  category === 'Frontend' ? 'secondary' : 
                                  category === 'Backend' ? 'tertiary' : 'default'
                                }>
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* README */}
                  <Card className="bg-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">README</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-invert max-w-none">
                        <div className="text-gray-300 whitespace-pre-wrap">
                          {projectData.readme}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* My Contribution */}
                  <Card className="bg-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">My Contribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed">
                        {projectData.myContribution}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="team" className="mt-6">
                <Card className="bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Team Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projectData.team.map((member, index) => (
                        <Card key={index} className="bg-gray-700">
                          <CardContent className="pt-6">
                            <div className="text-center">
                              <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                              />
                              <h4 className="font-medium text-white mb-1">{member.name}</h4>
                              <p className="text-sm text-gray-300 mb-3">{member.role}</p>
                              <p className="text-xs text-gray-200 italic">
                                "{member.contribution}"
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="videos" className="mt-6">
                <Card className="bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Project Videos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {projectData.videos.map((video, index) => (
                        <div key={index} className="space-y-2">
                          <h4 className="font-medium text-white">{video.title}</h4>
                          <div className="aspect-video rounded-lg overflow-hidden bg-gray-700">
                            <iframe
                              src={video.url}
                              title={video.title}
                              className="w-full h-full"
                              frameBorder="0"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="releases" className="mt-6">
                <Card className="bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Releases & Versioning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projectData.releases.map((release, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{release.version}</Badge>
                            <span className="text-sm text-gray-300">{release.date}</span>
                          </div>
                          <p className="text-gray-200 text-sm">{release.notes}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="testimonials" className="mt-6">
                <Card className="bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Video Testimonials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {projectData.testimonials.map((testimonial, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium text-white">{testimonial.name}</h4>
                            <span className="text-sm text-gray-300">- {testimonial.role}</span>
                          </div>
                          <div className="aspect-video rounded-lg overflow-hidden bg-gray-700">
                            <iframe
                              src={testimonial.video}
                              title={`${testimonial.name} testimonial`}
                              className="w-full h-full"
                              frameBorder="0"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>


              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {/* Leave Review Card */}
                  <Card className="bg-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">Leave a Review</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-300">Rating</label>
                          <div className="flex gap-1">
                            {renderStars(userRating, true)}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-300">Comment</label>
                          <Textarea
                            placeholder="Share your thoughts about this project..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            className="bg-gray-700 border-gray-600 text-gray-200"
                          />
                        </div>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Submit Review
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {projectData.reviews.map((review, index) => (
                      <Card key={index} className="bg-gray-800">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="font-medium text-white">{review.user}</p>
                              <div className="flex gap-1 my-1">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                            <p className="text-sm text-gray-200">{review.date}</p>
                          </div>
                          <p className="text-gray-300">{review.comment}</p>
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
            <Card className="bg-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Project Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-300">Stars</span>
                  </div>
                  <span className="font-medium text-white">{projectData.stats.stars}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitFork className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Forks</span>
                  </div>
                  <span className="font-medium text-white">{projectData.stats.forks}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Downloads</span>
                  </div>
                  <span className="font-medium text-white">{projectData.stats.downloads}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Watchers</span>
                  </div>
                  <span className="font-medium text-white">{projectData.stats.watchers}</span>
                </div>
              </CardContent>
          </Card>

          {/* Project Info */}
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Project Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-300">License</p>
                <p className="text-sm text-gray-200">{projectData.license}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Commercial Model</p>
                <Badge variant="secondary">{projectData.commercialModel}</Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Version</p>
                <p className="text-sm text-gray-200">{projectData.version}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Last Updated</p>
                <p className="text-sm text-gray-200">{projectData.lastUpdated}</p>
              </div>
            </CardContent>
          </Card>

          {/* Owner Information */}
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Project Owner</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={projectData.owner.avatar}
                  alt={projectData.owner.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-white">{projectData.owner.name}</p>
                  <p className="text-sm text-gray-300">{projectData.owner.contribution}</p>
                </div>
              </div>
              <Button variant="outline" className="w-full text-gray-300">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Owner
              </Button>
            </CardContent>
          </Card>

          {/* Team Members */}
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Team Members</CardTitle>
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
                      <p className="text-sm font-medium text-white">{member.name}</p>
                      <p className="text-xs text-gray-300">{member.role}</p>
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
