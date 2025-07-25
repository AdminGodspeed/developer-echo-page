
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { MainContent } from '@/components/MainContent';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { SocialPlatform } from '@/components/SocialLinks';

const Index = () => {
  // Comprehensive user profile data
  const dummyUserProfile = {
    // User basic info
    id: 1,
    username: 'johndoe123',
    email: 'john.doe@example.com',
    displayName: 'Alex Morgan',
    firstName: 'Alex',
    lastName: 'Morgan',
    location: 'San Francisco, CA, United States',
    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // About section
    about: 'Passionate software developer with 3+ years of experience building scalable web applications. Love working with React, Node.js, and cloud technologies.',
    aspiration: 'My goal is to grow into a senior full-stack developer, mastering both front-end and back-end technologies. I am passionate about collaborating with the developer community and aim to contribute meaningfully to open-source projects that solve real-world problems.',
    hobbies: ['Photography', 'Hiking', 'Playing guitar', 'Reading tech blogs'],
    otherTalents: 'Fluent in Spanish and French, amateur photographer',
    
    // Status and links
    currentStatuses: ['OPEN_FOR_WORK', 'STUDYING'],
    resumeUrl: 'https://example.com/resumes/john-doe-resume.pdf',
    blogUrl: 'https://johndoe.dev',
    portfolioUrl: 'https://portfolio.johndoe.dev',
    introVideo: 'https://youtube.com/watch?v=abc123',
    
    // Social links using the SocialPlatform enum
    socialLinks: [
      { platform: SocialPlatform.GITHUB, url: 'https://github.com/johndoe' },
      { platform: SocialPlatform.LINKEDIN, url: 'https://linkedin.com/in/john-doe-123456' },
      { platform: SocialPlatform.PERSONAL_WEBSITE, url: 'https://johndoe.dev' }
    ],
    
    // Professional skills
  // Professional skills
professionalSkills: [
  { skill: { name: 'JavaScript', isPredefined: true } },
  { skill: { name: 'TypeScript', isPredefined: true } },
  { skill: { name: 'React', isPredefined: true } },
  { skill: { name: 'Next.js', isPredefined: true } },
  { skill: { name: 'Node.js', isPredefined: true } },
  { skill: { name: 'Express.js', isPredefined: true } },
  { skill: { name: 'MongoDB', isPredefined: true } },
  { skill: { name: 'PostgreSQL', isPredefined: true } },
  { skill: { name: 'Prisma', isPredefined: true } },
  { skill: { name: 'GraphQL', isPredefined: true } },
  { skill: { name: 'REST APIs', isPredefined: true } },
  { skill: { name: 'Git & GitHub', isPredefined: true } },
  { skill: { name: 'Docker', isPredefined: true } },
  { skill: { name: 'CI/CD', isPredefined: true } },
  { skill: { name: 'Jest', isPredefined: true } },
  { skill: { name: 'Cypress', isPredefined: true } },
  { skill: { name: 'HTML5', isPredefined: true } },
  { skill: { name: 'CSS3', isPredefined: true } },
  { skill: { name: 'Tailwind CSS', isPredefined: true } },
  { skill: { name: 'Redux Toolkit', isPredefined: true } }
],

    
    // Work experience
    workExperience: [
      {
        company: 'TechCorp Inc.',
        position: 'Senior Frontend Developer',
        description: 'Led the development of the company\'s main web application using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality user experiences.',
        skills: ['React', 'TypeScript', 'CSS', 'Jest'],
        isCurrent: true,
        location: 'San Francisco, CA',
        startDate: '2022-03-01T00:00:00Z',
        endDate: null,
        employmentType: 'FULL_TIME'
      },
      {
        company: 'StartupXYZ',
        position: 'Full Stack Developer',
        description: 'Built and maintained web applications using MERN stack. Implemented RESTful APIs and managed database operations.',
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        isCurrent: false,
        location: 'Remote',
        startDate: '2021-01-15T00:00:00Z',
        endDate: '2022-02-28T00:00:00Z',
        employmentType: 'FULL_TIME'
      }
    ],
    
    // Projects
    projects: [
      {
        name: 'Task Management App',
        description: 'A full-stack task management application with real-time collaboration features',
        liveDemoUrl: 'https://taskapp.johndoe.dev',
        repoUrl: 'https://github.com/johndoe/task-management',
        stackTags: ['React', 'Node.js', 'PostgreSQL'],
        projectTags: ['productivity', 'collaboration', 'real-time']
      }
    ],
    
    // Testimonials
    testimonials: [
      {
        authorName: 'Emily Rodriguez',
        relation: 'Former Manager at TechCorp',
        message: 'John is an exceptional developer with strong problem-solving skills. He consistently delivered high-quality work and was a great team player.'
      },
      {
        authorName: 'David Kim',
        relation: 'Colleague',
        videoUrl: 'https://youtube.com/watch?v=testimonial456'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header user={dummyUserProfile} />
        <MainContent
          links={dummyUserProfile.socialLinks}
          aspiration={dummyUserProfile.aspiration}
          introVideo={dummyUserProfile.introVideo}
          testimonials={dummyUserProfile.testimonials}
          hobbies={dummyUserProfile.hobbies}
          professionalSkills={dummyUserProfile.professionalSkills}
        />
        
        {/* Marketplace CTA */}
        {/* <div className="my-12 text-center">
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
        </div> */}        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
