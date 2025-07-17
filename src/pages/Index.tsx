
import React from 'react';
import { Header } from '@/components/Header';
import { MainContent } from '@/components/MainContent';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <MainContent />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
