import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Search, ArrowLeft, ArrowRight } from 'lucide-react';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import FeaturedProjects from './components/FeaturedProjects';
import AIShowcase from './components/AIShowcase';
import OpenSourceSection from './components/OpenSourceSection';
import TestimonialsSection from './components/TestimonialsSection';
import JourneySection from './components/JourneySection';
import CredibilitySection from './components/CredibilitySection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/Footer';
import ProjectCard from './components/ProjectCard';
import Modal from './components/Modal';
import AIChat from './components/AIChat';
import { PROJECTS, GITHUB_URL, LINKEDIN_URL } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  // Navigation State
  const [view, setView] = useState<'home' | 'works'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Interaction State
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // AI Chat State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInitialQuestion, setChatInitialQuestion] = useState<string | undefined>(undefined);

  // Project Filtering (Works page)
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Mobile', 'Data Science', 'Web', 'Python', 'Flutter'];

  // Global mouse follower
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const getProjectCategories = (p: Project) => {
    const cats = ['All'];
    const stack = p.techStack.join(' ').toLowerCase();
    if (stack.includes('flutter') || stack.includes('kotlin') || stack.includes('ios') || stack.includes('android')) cats.push('Mobile');
    if (stack.includes('python') || stack.includes('tensorflow') || stack.includes('pytorch') || stack.includes('panda') || stack.includes('r')) cats.push('Data Science');
    if (stack.includes('react') || stack.includes('web') || stack.includes('html') || stack.includes('typescript')) cats.push('Web');
    if (stack.includes('python')) cats.push('Python');
    if (stack.includes('flutter')) cats.push('Flutter');
    return cats;
  };

  const filteredProjects = PROJECTS.filter(project => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const projectCats = getProjectCategories(project);
    const matchesFilter = activeFilter === 'All' || projectCats.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const handleNavClick = (targetView: 'home' | 'works', sectionId?: string) => {
    setView(targetView);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleOpenChat = (question?: string) => {
    setChatInitialQuestion(question);
    setChatOpen(true);
  };

  const handleChatToggle = (isOpen: boolean) => {
    setChatOpen(isOpen);
    if (!isOpen) {
      setChatInitialQuestion(undefined);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-gray-200 font-sans overflow-x-hidden relative">
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Mouse Follower Gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
        }}
      />

      {/* ═══════════════════════════════════════════════════ */}
      {/* NAVBAR                                             */}
      {/* ═══════════════════════════════════════════════════ */}
      <nav className="fixed top-0 w-full z-40 bg-[#020617]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavClick('home', 'hero')}
            >
              <span className="text-2xl font-display font-bold text-white tracking-tighter">
                SM<span className="text-primary">.</span>dev
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { label: 'About', view: 'home' as const, section: 'hero' },
                { label: 'Skills', view: 'home' as const, section: 'skills' },
                { label: 'Projects', view: 'home' as const, section: 'projects' },
                { label: 'Journey', view: 'home' as const, section: 'experience' },
                { label: 'Contact', view: 'home' as const, section: 'contact' },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view, item.section)}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('works')}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/5 ${view === 'works' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                All Works
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                className="ml-4 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-lg border border-white/10 transition-all hover:border-white/30 backdrop-blur-md flex items-center gap-2"
              >
                <Download size={14} /> Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-4 pb-6 space-y-1">
            {[
              { label: 'About', section: 'hero' },
              { label: 'Skills', section: 'skills' },
              { label: 'Projects', section: 'projects' },
              { label: 'Journey', section: 'experience' },
              { label: 'Contact', section: 'contact' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick('home', item.section)}
                className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('works')}
              className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-400 hover:text-white hover:bg-white/5"
            >
              All Works
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              className="block px-3 py-3 text-primary font-bold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════ */}
      {/* VIEW: HOME                                         */}
      {/* ═══════════════════════════════════════════════════ */}
      {view === 'home' && (
        <main>
          {/* 1. Hero Section */}
          <HeroSection
            onViewProjects={() => handleNavClick('home', 'projects')}
            onHireMe={() => handleNavClick('home', 'contact')}
            onOpenChat={() => handleOpenChat()}
          />

          {/* Divider */}
          <div className="section-divider" />

          {/* 2. Skills & Technologies */}
          <SkillsSection />

          {/* Divider */}
          <div className="section-divider" />

          {/* 3. Featured Projects */}
          <FeaturedProjects
            onSelectProject={setSelectedProject}
            onViewAll={() => setView('works')}
            limit={3}
          />

          {/* Divider */}
          <div className="section-divider" />

          {/* 4. AI Assistant Showcase */}
          <AIShowcase onOpenChat={handleOpenChat} />

          {/* Divider */}
          <div className="section-divider" />

          {/* 5. Testimonials */}
          <TestimonialsSection />

          {/* Divider */}
          <div className="section-divider" />

          {/* 6. Career Journey */}
          <JourneySection />

          {/* Divider */}
          <div className="section-divider" />

          {/* 7. Open Source */}
          <OpenSourceSection />

          {/* Divider */}
          <div className="section-divider" />

          {/* 8. Credibility Dashboard */}
          <CredibilitySection />

          {/* Divider */}
          <div className="section-divider" />

          {/* 9. Contact & Conversion */}
          <ContactSection />

          {/* 10. Footer */}
          <FooterSection onNavigate={(sectionId) => handleNavClick('home', sectionId)} />
        </main>
      )}

      {/* ═══════════════════════════════════════════════════ */}
      {/* VIEW: WORKS (ALL PROJECTS)                         */}
      {/* ═══════════════════════════════════════════════════ */}
      {view === 'works' && (
        <main className="pt-32 pb-20 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-fade-up">
              <div>
                <button
                  onClick={() => setView('home')}
                  className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft size={20} /> Back to Home
                </button>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
                  All Works
                </h1>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-96 mt-6 md:mt-0">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                  placeholder="Search technology, title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-16 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${
                    activeFilter === cat
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Full Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    className="opacity-0 animate-fade-up"
                    style={{ animationDelay: `${0.1 * (idx % 3)}s` }}
                  >
                    <ProjectCard
                      project={project}
                      onClick={setSelectedProject}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-gray-500 text-xl">No projects found matching your criteria.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            {/* Works Footer */}
            <div className="mt-32 pt-12 border-t border-white/5 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
              <p className="text-gray-400 mb-8">Check out my code contributions directly on GitHub.</p>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all"
              >
                <Github size={20} /> Visit GitHub Profile
              </a>
            </div>
          </div>
        </main>
      )}

      {/* ═══════════════════════════════════════════════════ */}
      {/* GLOBAL ELEMENTS                                    */}
      {/* ═══════════════════════════════════════════════════ */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
      <AIChat
        externalOpen={chatOpen}
        onToggle={handleChatToggle}
        initialQuestion={chatInitialQuestion}
      />
    </div>
  );
};

export default App;