
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { MainContent } from '@/components/MainContent';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <MainContent />
        
        {/* Marketplace CTA */}
        <div className="my-12 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Discover Amazing Projects
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore our marketplace to find innovative projects, cutting-edge technologies, and inspiring creators from around the world.
            </p>
            <Link to="/marketplace">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Search className="w-4 h-4 mr-2" />
                Browse Marketplace
              </Button>
            </Link>
          </div>
        </div>
        
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
