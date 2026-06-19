import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAll: () => void;
  limit?: number;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject, onViewAll, limit }) => {
  const visibleProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 animate-fade-up">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3">
              Selected Case Studies
            </h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl">
              Highlights from my engineering journey — each project tells a story of problem-solving and impact.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="mt-6 sm:mt-0 group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-primary transition-colors duration-300 shrink-0"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => {
            const isFeatured = project.featured === true;
            // First featured project spans 2 columns on large screens
            const isFirstFeatured =
              isFeatured && visibleProjects.findIndex((p) => p.featured) === index;

            return (
              <div
                key={project.id}
                className={`opacity-0 animate-fade-up ${
                  isFirstFeatured ? 'md:col-span-2' : ''
                } ${isFeatured ? 'gradient-border rounded-3xl' : ''}`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ProjectCard
                  project={project}
                  onClick={onSelectProject}
                  className="h-full"
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA when limited */}
        {limit && PROJECTS.length > limit && (
          <div
            className="mt-12 text-center opacity-0 animate-fade-up"
            style={{ animationDelay: `${visibleProjects.length * 100 + 100}ms`, animationFillMode: 'forwards' }}
          >
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full backdrop-blur-md transition-all duration-300"
            >
              See all {PROJECTS.length} projects
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
