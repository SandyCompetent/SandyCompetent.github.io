import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Activity, Layers, Code, GitBranch, Cpu, ArrowUpRight, Target } from 'lucide-react';
import { Project } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Simple syntax highlighter helper
  const highlightCode = (code: string) => {
    return code.split('\n').map((line, i) => {
      const highlightedLine = line
        .replace(/class|def|return|import|from|if|else|await|async|const|let|var|function/g, '<span class="token-keyword">$&</span>')
        .replace(/('.*?')/g, '<span class="token-string">$&</span>')
        .replace(/(".*?")/g, '<span class="token-string">$&</span>')
        .replace(/\b(\d+)\b/g, '<span class="token-number">$&</span>')
        .replace(/#.*/g, '<span class="token-comment">$&</span>')
        .replace(/\/\/.*/g, '<span class="token-comment">$&</span>')
        .replace(/([a-zA-Z0-9_]+)\(/g, '<span class="token-func">$1</span>(');

      return (
        <div key={i} className="table-row">
          <span className="table-cell text-right pr-4 text-gray-600 select-none text-xs">{i + 1}</span>
          <span
            className="table-cell text-gray-300 whitespace-pre"
            dangerouslySetInnerHTML={{ __html: highlightedLine }}
          />
        </div>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#020617] overflow-y-auto animate-fade-up">
      {/* Dynamic Background Gradient */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[100px]" />
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-[60] flex justify-between items-center px-6 py-4 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest">Case Study / {project.id.padStart(3, '0')}</h2>
        <button
          onClick={onClose}
          className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all border border-white/10 hover:border-white/30"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 py-12 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 animate-fade-up">
            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-mono border border-white/10 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-[0.9]">
              {project.title}
            </h2>

            {/* Value Proposition */}
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-8">
              {project.valueProposition}
            </p>

            {/* Metrics Row */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-8">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="glass-card rounded-xl px-5 py-3 flex items-center gap-3">
                    <Target size={16} className="text-primary" />
                    <div>
                      <p className="text-xl font-bold text-white">{metric.value}</p>
                      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{metric.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2">
                  <ExternalLink size={18} /> Live Demo <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2">
                  <Github size={18} /> Source Code
                </a>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="lg:col-span-5 relative h-[350px] lg:h-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl lg:rotate-2 hover:rotate-0 transition-all duration-500">
              <img src={project.imageUrl} alt={`${project.title} preview`} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full border border-amber-500/30 backdrop-blur-md">
                  ★ Featured
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Tech Specs Sidebar */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-8 p-6 glass-card rounded-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2 mb-4">Engineering Specs</h3>
              
              <div className="space-y-6">
                {/* Complexity */}
                <div>
                  <div className="flex items-center gap-2 text-white mb-1">
                    <Activity size={16} className="text-primary" />
                    <span className="font-semibold text-sm">Complexity</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
                    <div
                      className={`h-full rounded-full ${
                        project.complexity === 'Research Grade' ? 'bg-purple-500 w-full' :
                        project.complexity === 'Very High' ? 'bg-red-500 w-[85%]' :
                        project.complexity === 'High' ? 'bg-orange-500 w-[70%]' :
                        'bg-blue-500 w-[50%]'
                      }`}
                    />
                  </div>
                  <span className="text-xs text-gray-400 mt-1 block">{project.complexity || 'Standard'}</span>
                </div>

                {/* Scale */}
                <div>
                  <div className="flex items-center gap-2 text-white mb-1">
                    <Code size={16} className="text-green-400" />
                    <span className="font-semibold text-sm">Scale</span>
                  </div>
                  <p className="text-2xl font-mono text-gray-300">{project.linesOfCode || 'N/A'}</p>
                </div>

                {/* Architecture */}
                <div>
                  <div className="flex items-center gap-2 text-white mb-1">
                    <Layers size={16} className="text-orange-400" />
                    <span className="font-semibold text-sm">Architecture</span>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1 mt-2">
                    {project.architecture?.map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-500 rounded-full" /> {item}
                      </li>
                    )) || <li>Monolithic</li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Dive Narrative */}
          <div className="lg:col-span-9 space-y-20">
            
            {/* Problem / Challenges Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-2xl font-display font-bold text-white mb-4">The Challenge</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{project.problem || project.description}</p>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-display font-bold text-white mb-4">The Engineering</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{project.challenges || project.details}</p>
              </div>
            </div>

            {/* Code Portal */}
            {project.codeSnippet && (
              <div className="w-full animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                    <GitBranch className="text-purple-400" />
                    Core Algorithm
                  </h3>
                  <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                    {project.codeSnippet.language}
                  </span>
                </div>

                <div className="rounded-xl overflow-hidden bg-[#1e222a] border border-white/10 shadow-2xl relative group">
                  {/* Mac Window Controls */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#282c34] border-b border-black/20">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>

                  <div className="p-6 overflow-x-auto font-mono text-sm leading-relaxed">
                    {highlightCode(project.codeSnippet.code)}
                  </div>

                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
                </div>
              </div>
            )}

            {/* System Architecture */}
            <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <Cpu className="text-cyan-400" />
                System Architecture
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">{project.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;