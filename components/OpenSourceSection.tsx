import React, { useEffect, useState } from 'react';
import { Star, GitFork, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { fetchGitHubRepos } from '../services/githubService';
import { GITHUB_URL } from '../constants';
import { Project } from '../types';

const formatRepoName = (name: string): string => {
  return name
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const OpenSourceSection: React.FC = () => {
  const [repos, setRepos] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadRepos = async () => {
      setLoading(true);
      const fetched = await fetchGitHubRepos();
      if (!cancelled) {
        setRepos(fetched.slice(0, 6));
        setLoading(false);
      }
    };

    loadRepos();

    return () => {
      cancelled = true;
    };
  }, []);

  const parseStats = (achievement: string): { stars: number; forks: number } => {
    const match = achievement.match(/(\d+)\s*Stars?\s*•\s*(\d+)\s*Forks?/i);
    return {
      stars: match ? parseInt(match[1], 10) : 0,
      forks: match ? parseInt(match[2], 10) : 0,
    };
  };

  return (
    <section id="open-source" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 animate-fade-up">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Open Source
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3">
            Open Source Contributions
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            Public repositories showcasing experiments, tools, and contributions to the developer community.
          </p>
        </div>

        {/* Loading Skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="h-5 w-32 bg-white/10 rounded-lg"></div>
                  <div className="h-4 w-4 bg-white/10 rounded"></div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="h-3 w-full bg-white/5 rounded"></div>
                  <div className="h-3 w-3/4 bg-white/5 rounded"></div>
                </div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-16 bg-white/5 rounded-lg"></div>
                  <div className="h-6 w-16 bg-white/5 rounded-lg"></div>
                </div>
                <div className="flex gap-4">
                  <div className="h-4 w-12 bg-white/5 rounded"></div>
                  <div className="h-4 w-12 bg-white/5 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Repos Grid */}
        {!loading && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => {
              const { stars, forks } = parseStats(repo.achievement);

              return (
                <a
                  key={repo.id}
                  href={repo.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col opacity-0 animate-fade-up group"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <Github size={16} className="text-gray-500 shrink-0" />
                      <h3 className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors leading-tight">
                        {formatRepoName(repo.title)}
                      </h3>
                    </div>
                    <ExternalLink
                      size={14}
                      className="text-gray-600 group-hover:text-primary transition-colors shrink-0 mt-1"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {repo.valueProposition}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-white/5 text-gray-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto pt-3 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <Star size={12} className={stars > 0 ? 'text-amber-400' : ''} />
                      {stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} />
                      {forks}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* Fallback */}
        {!loading && repos.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl">
            <Github size={40} className="text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              Couldn't load repositories right now. Check back soon!
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary hover:text-blue-400 transition-colors text-sm font-medium"
            >
              Visit GitHub Profile
              <ExternalLink size={14} />
            </a>
          </div>
        )}

        {/* GitHub Profile CTA */}
        {!loading && repos.length > 0 && (
          <div
            className="mt-12 text-center opacity-0 animate-fade-up"
            style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full backdrop-blur-md transition-all duration-300 group"
            >
              <Github size={16} />
              View GitHub Profile
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenSourceSection;
