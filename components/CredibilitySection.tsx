import React from 'react';
import { Briefcase, Rocket, Target, GitBranch, Award, Github, Linkedin, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, GITHUB_URL, LINKEDIN_URL, KAGGLE_URL } from '../constants';
import { Certification } from '../types';

// Custom Kaggle SVG icon
const KaggleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="20"
    height="20"
  >
    <path d="M12.29 22.35l-.89-3.08-1.28-4.46h-2.7v7.54H3.59V1.65h3.83v10.15h2.52l3.22-4.9h4.37l-4.22 6.07 4.69 9.38h-5.71z" />
  </svg>
);

interface StatCard {
  icon: React.FC<{ className?: string }>;
  value: string;
  label: string;
  color: string;
}

const STAT_CARDS: StatCard[] = [
  {
    icon: Briefcase,
    value: '3+',
    label: 'Years Experience',
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: Rocket,
    value: '5+',
    label: 'Production Apps',
    color: 'from-purple-500/20 to-purple-600/10',
  },
  {
    icon: Target,
    value: '98%',
    label: 'Model Accuracy',
    color: 'from-cyan-500/20 to-cyan-600/10',
  },
  {
    icon: GitBranch,
    value: '15+',
    label: 'GitHub Repos',
    color: 'from-emerald-500/20 to-emerald-600/10',
  },
];

const ICON_COLORS = [
  'text-blue-400',
  'text-purple-400',
  'text-cyan-400',
  'text-emerald-400',
];

const CredibilitySection: React.FC = () => {
  return (
    <section id="credentials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 opacity-0 animate-fade-up">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3">
            Trust & Credibility
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            Numbers, certifications, and recognition that back up the work.
          </p>
        </div>

        {/* Top row: Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STAT_CARDS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="opacity-0 animate-fade-up glass-card rounded-2xl p-6 text-center"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`w-7 h-7 ${ICON_COLORS[i]}`} />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row: Certification cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert: Certification, i: number) => (
            <div
              key={cert.id}
              className="opacity-0 animate-fade-up glass-card-hover rounded-2xl p-6 flex flex-col"
              style={{ animationDelay: `${(i + 5) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2.5 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>
              <h3 className="text-base font-display font-bold text-white mb-1 leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-primary/80 font-medium mb-3">
                {cert.issuer}
              </p>
              {cert.description && (
                <p className="text-sm text-gray-500 leading-relaxed mt-auto">
                  {cert.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Social proof links */}
        <div
          className="opacity-0 animate-fade-up mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '900ms' }}
        >
          <span className="text-sm text-gray-500 font-mono uppercase tracking-wider mr-2">
            Verify on
          </span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            GitHub Profile
            <ExternalLink className="w-3 h-3 text-gray-500" />
          </a>
          <a
            href={KAGGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <KaggleIcon className="w-4 h-4" />
            Kaggle Profile
            <ExternalLink className="w-3 h-3 text-gray-500" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
            <ExternalLink className="w-3 h-3 text-gray-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
