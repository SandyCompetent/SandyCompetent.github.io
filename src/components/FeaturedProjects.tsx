import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAll: () => void;
  limit?: number;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject, onViewAll, limit }) => {
  const visibleProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section id="projects" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 animate-fade-up">
          <div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Field Reports
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-3">
              How I build systems
            </h2>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl font-light">
              Real problems, architectural constraints, and the resulting systems.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="mt-6 sm:mt-0 group flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-primary transition-colors duration-300 shrink-0 border-b-2 border-transparent hover:border-primary pb-1"
          >
            View All Field Reports
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        <div className="space-y-8">
          {/* Flagship Project */}
          {visibleProjects.length > 0 && (
            <div className="opacity-0 animate-fade-up bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:shadow-lg hover:border-slate-300 transition-all duration-500"
              onClick={() => onSelectProject(visibleProjects[0])}
            >
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 rounded-full">
                      Flagship Report
                    </span>
                    <span className="text-sm font-mono text-slate-400">#001</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 group-hover:text-primary transition-colors">
                    {visibleProjects[0].title}
                  </h3>

                  <div className="space-y-6 mb-8 text-slate-600 font-light">
                    <div>
                      <strong className="block text-slate-900 text-xs uppercase tracking-widest mb-2 font-mono">The Problem</strong>
                      <p className="leading-relaxed">{visibleProjects[0].problem}</p>
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-xs uppercase tracking-widest mb-2 font-mono">The Constraint</strong>
                      <p className="leading-relaxed">{visibleProjects[0].challenges}</p>
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-xs uppercase tracking-widest mb-2 font-mono">The Result</strong>
                      <p className="leading-relaxed text-slate-900 font-medium">{visibleProjects[0].achievement}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                  {visibleProjects[0].techStack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 text-xs font-medium rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 bg-slate-950 relative min-h-[400px] lg:min-h-full">
                <img src={visibleProjects[0].imageUrl} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-60 transition-all duration-700" alt={visibleProjects[0].title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {visibleProjects[0].codeSnippet && (
                  <div className="absolute bottom-8 left-8 right-8 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-slate-800 shadow-2xl">
                    <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
                      <Code size={14} className="text-slate-400" />
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Architecture Snippet</span>
                    </div>
                    <pre className="font-mono text-xs text-slate-300 overflow-x-auto">
                      <code>{visibleProjects[0].codeSnippet.code.split('\n').slice(0, 6).join('\n')}
{visibleProjects[0].codeSnippet.code.split('\n').length > 6 ? '\n  ...' : ''}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleProjects.slice(1).map((project, index) => (
              <div
                key={project.id}
                className="opacity-0 animate-fade-up bg-white rounded-[2rem] border border-slate-200 p-8 flex flex-col group cursor-pointer hover:border-slate-300 hover:shadow-lg transition-all duration-500"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                onClick={() => onSelectProject(project)}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm font-mono text-slate-400">#{String(index + 2).padStart(3, '0')}</span>
                  {project.metrics && project.metrics[0] && (
                    <span className="text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
                      {project.metrics[0].value} {project.metrics[0].label}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-8 flex-grow font-light leading-relaxed">{project.valueProposition}</p>
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-100">
                  <div className="flex gap-3">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs text-slate-500 font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs text-slate-400 font-medium">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA when limited */}
        {limit && PROJECTS.length > limit && (
          <div
            className="mt-16 text-center opacity-0 animate-fade-up"
            style={{ animationDelay: `${visibleProjects.length * 100 + 100}ms`, animationFillMode: 'forwards' }}
          >
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-slate-900 bg-white border border-slate-200 hover:border-slate-400 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              See all {PROJECTS.length} reports
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
