import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowRight, Star, Github, ExternalLink, Clock, TrendingUp, X, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock data for projects
const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A comprehensive full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    type: "Software",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    rating: 4.8,
    reviews: 45,
    featured: true
  },
  {
    id: 2,
    title: "AI Chat Assistant",
    description: "Intelligent conversational AI with natural language processing, context awareness, and multi-language support.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    type: "AI Agent",
    techStack: ["Python", "OpenAI API", "FastAPI", "React", "Redis"],
    rating: 4.9,
    reviews: 78,
    featured: true
  },
  {
    id: 3,
    title: "DevOps Pipeline Manager",
    description: "Automated CI/CD pipeline orchestration with monitoring, deployment strategies, and rollback capabilities.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
    type: "DevOps Tool",
    techStack: ["Kubernetes", "Docker", "GitHub Actions", "Terraform", "Prometheus"],
    rating: 4.7,
    reviews: 32,
    featured: true
  },
  {
    id: 4,
    title: "Mobile Finance App",
    description: "Cross-platform financial management app with budgeting, expense tracking, and investment portfolio management.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=450&fit=crop",
    type: "Mobile App",
    techStack: ["React Native", "Node.js", "MongoDB", "Stripe", "Chart.js"],
    rating: 4.6,
    reviews: 89,
    featured: true
  }
];

const trendingProjects = [
  {
    id: 5,
    title: "Real-time Analytics Dashboard",
    description: "Beautiful data visualization platform with real-time updates and customizable widgets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
    type: "Software",
    techStack: ["Vue.js", "D3.js", "WebSocket", "MongoDB"],
    rating: 4.5,
    reviews: 67
  },
  {
    id: 6,
    title: "Machine Learning API",
    description: "RESTful API for common ML tasks including image recognition, text analysis, and prediction models.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop",
    type: "API",
    techStack: ["Python", "TensorFlow", "Flask", "Docker"],
    rating: 4.7,
    reviews: 23
  },
  {
    id: 7,
    title: "Blockchain Voting System",
    description: "Secure, transparent voting platform built on blockchain technology with smart contracts.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=225&fit=crop",
    type: "Software",
    techStack: ["Solidity", "Web3.js", "React", "IPFS"],
    rating: 4.4,
    reviews: 15
  },
  {
    id: 8,
    title: "IoT Device Manager",
    description: "Centralized platform for managing and monitoring IoT devices with real-time data collection.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop",
    type: "Software",
    techStack: ["React", "MQTT", "InfluxDB", "Grafana"],
    rating: 4.6,
    reviews: 41
  }
];

const categories = [
  { name: "Web Development", icon: "🌐", count: 156 },
  { name: "Mobile Apps", icon: "📱", count: 89 },
  { name: "AI/ML", icon: "🤖", count: 72 },
  { name: "DevOps", icon: "⚙️", count: 45 },
  { name: "APIs", icon: "🔌", count: 67 },
  { name: "Data Science", icon: "📊", count: 38 },
  { name: "Blockchain", icon: "🔗", count: 29 },
  { name: "IoT", icon: "📡", count: 24 }
];

const collections = [
  {
    id: 1,
    title: "Beginner-Friendly Projects",
    description: "Perfect starting points for developers new to the field",
    projectCount: 24,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Enterprise Solutions",
    description: "Production-ready applications for business use",
    projectCount: 18,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Open Source Gems",
    description: "Outstanding open-source projects making a difference",
    projectCount: 31,
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=200&fit=crop"
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Cutting-edge AI projects and ML implementations",
    projectCount: 42,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop"
  }
];

const ProjectCard = ({ project, featured = false }: { project: any, featured?: boolean }) => {
  const cardSize = featured ? "w-full" : "w-full";
  
  return (
    <Card className={`${cardSize} bg-card hover:bg-accent/10 transition-all duration-300 group cursor-pointer border-border/50`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? 'h-48' : 'h-40'
          }`}
        />
        {project.featured && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
          {project.type}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className={`font-semibold text-foreground mb-2 line-clamp-2 ${
          featured ? 'text-lg' : 'text-base'
        }`}>
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {project.techStack.slice(0, 5).map((tech: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="outline" className="text-xs">
              +{project.techStack.length - 5}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{project.rating}</span>
            <span className="text-xs text-muted-foreground">({project.reviews})</span>
          </div>
          <Link to={`/project/${project.id}`}>
            <Button size="sm" className="text-xs">
              View Project
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

const Marketplace = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('trending');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allProjects = [...featuredProjects, ...trendingProjects];
  
  const filteredProjects = useMemo(() => {
    let filtered = allProjects;
    
    if (searchQuery) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech: string) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(project => 
        selectedCategories.includes(project.type)
      );
    }
    
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(project => 
        selectedTypes.includes(project.type)
      );
    }
    
    if (selectedTechStack.length > 0) {
      filtered = filtered.filter(project => 
        project.techStack.some((tech: string) => selectedTechStack.includes(tech))
      );
    }
    
    // Sort projects
    switch (sortBy) {
      case 'newest':
        return [...filtered].reverse();
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'trending':
      default:
        return filtered;
    }
  }, [searchQuery, selectedCategories, selectedTypes, selectedTechStack, sortBy]);

  const isFiltered = searchQuery || selectedCategories.length > 0 || selectedTypes.length > 0 || selectedTechStack.length > 0;

  const handleSearch = () => {
    if (searchQuery) {
      setSearchParams({ q: searchQuery });
    } else {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedTypes([]);
    setSelectedTechStack([]);
    setSearchParams({});
  };

  const handleCategoryClick = (categoryName: string) => {
    const formattedCategory = categoryName.includes('AI') ? 'AI Agent' : 
                             categoryName.includes('Mobile') ? 'Mobile App' : 
                             categoryName.includes('DevOps') ? 'DevOps Tool' : 
                             'Software';
    if (!selectedCategories.includes(formattedCategory)) {
      setSelectedCategories([...selectedCategories, formattedCategory]);
    }
  };

  const allTechStack = Array.from(new Set(allProjects.flatMap(p => p.techStack)));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-foreground">Pradarshan</span>
              </Link>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search projects, technologies, creators..."
                  className="pl-10 pr-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 mr-1" />
                  Filters
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Button>Sign In</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Filters</h3>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="w-4 h-4 mr-1" />
                Clear All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Categories */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Categories</h4>
                <div className="space-y-2">
                  {['Software', 'AI Agent', 'DevOps Tool', 'Mobile App', 'API'].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([...selectedCategories, category]);
                          } else {
                            setSelectedCategories(selectedCategories.filter(c => c !== category));
                          }
                        }}
                      />
                      <label className="text-sm text-muted-foreground">{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tech Stack */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Tech Stack</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {allTechStack.slice(0, 10).map((tech) => (
                    <div key={tech} className="flex items-center space-x-2">
                      <Checkbox
                        checked={selectedTechStack.includes(tech)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedTechStack([...selectedTechStack, tech]);
                          } else {
                            setSelectedTechStack(selectedTechStack.filter(t => t !== tech));
                          }
                        }}
                      />
                      <label className="text-sm text-muted-foreground">{tech}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sort */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Sort By</h4>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trending">Trending</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* View Mode */}
              <div>
                <h4 className="font-medium text-foreground mb-3">View</h4>
                <div className="flex gap-2">
                  <Button 
                    variant={viewMode === 'grid' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant={viewMode === 'list' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Active Filters */}
            {(selectedCategories.length > 0 || selectedTechStack.length > 0) && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {selectedCategories.map((category) => (
                    <Badge key={category} variant="secondary" className="flex items-center gap-1">
                      {category}
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => setSelectedCategories(selectedCategories.filter(c => c !== category))}
                      />
                    </Badge>
                  ))}
                  {selectedTechStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="flex items-center gap-1">
                      {tech}
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => setSelectedTechStack(selectedTechStack.filter(t => t !== tech))}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Search Results */}
        {isFiltered && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Search Results ({filteredProjects.length})
              </h2>
            </div>
            
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found matching your criteria.</p>
                <Button variant="ghost" onClick={clearFilters} className="mt-2">
                  Clear filters to see all projects
                </Button>
              </div>
            )}
          </section>
        )}

        {/* Featured Projects Carousel */}
        {!isFiltered && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Featured Projects</h2>
            <Link to="/search?featured=true">
              <Button variant="ghost" className="group">
                View all <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProjects.map((project) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <ProjectCard project={project} featured />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          </section>
        )}

        {/* Categories Navigation */}
        {!isFiltered && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories.map((category) => (
                <Card 
                  key={category.name} 
                  className="hover:bg-accent/50 transition-colors cursor-pointer text-center p-4"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-sm text-foreground mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} projects</p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Trending Projects */}
        {!isFiltered && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Trending Projects</h2>
            </div>
            <Link to="/search?sort=trending">
              <Button variant="ghost" className="group">
                View all <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          </section>
        )}

        {/* Recently Added */}
        {!isFiltered && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Recently Added</h2>
            </div>
            <Link to="/search?sort=newest">
              <Button variant="ghost" className="group">
                View all <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProjects.slice().reverse().map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          </section>
        )}

        {/* Top Rated */}
        {!isFiltered && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-primary fill-primary" />
              <h2 className="text-2xl font-bold text-foreground">Top Rated</h2>
            </div>
            <Link to="/search?sort=rating">
              <Button variant="ghost" className="group">
                View all <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...trendingProjects].sort((a, b) => b.rating - a.rating).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          </section>
        )}

        {/* Collections */}
        {!isFiltered && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Curated Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <Link key={collection.id} to={`/collection/${collection.id}`}>
                <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <Badge className="bg-white/20 text-white">
                        {collection.projectCount} projects
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{collection.title}</h3>
                    <p className="text-sm text-muted-foreground">{collection.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Marketplace;