import React from 'react';
import { Github, Linkedin, Sparkles, GraduationCap, Rocket, Brain, Globe } from 'lucide-react';
import {
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_STATS,
  TRUST_BADGES,
  GITHUB_URL,
  LINKEDIN_URL,
} from '../constants';



interface HeroSectionProps {
  onViewProjects: () => void;
  onHireMe: () => void;
  onOpenChat: () => void;
}

const BADGE_ICONS = [GraduationCap, Rocket, Brain, Globe];

const HeroSection: React.FC<HeroSectionProps> = ({ onViewProjects, onHireMe, onOpenChat }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background decorative gradient blob */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, #3b82f6 60%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content — col-span-7 */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Available badge */}
            <div
              className="opacity-0 animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/10 border border-slate-200 mb-8"
              style={{ animationDelay: '0ms' }}
            >
              <span className="available-dot" />
              <span className="text-sm text-slate-600 font-medium">Available for hire</span>
            </div>

            {/* Headline */}
            <h1
              className="opacity-0 animate-fade-up text-4xl md:text-7xl font-display font-bold text-slate-900 tracking-tight leading-[1.1]"
              style={{ animationDelay: '100ms' }}
            >
              {HERO_HEADLINE}
            </h1>

            {/* Subheadline */}
            <p
              className="opacity-0 animate-fade-up text-xl text-slate-600 max-w-2xl font-light leading-relaxed mt-6"
              style={{ animationDelay: '200ms' }}
            >
              {HERO_SUBHEADLINE}
            </p>

            {/* Trust badges */}
            <div
              className="opacity-0 animate-fade-up flex flex-wrap gap-3 mt-8"
              style={{ animationDelay: '300ms' }}
            >
              {TRUST_BADGES.map((badge, i) => {
                const Icon = BADGE_ICONS[i];
                return (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/[0.03] border border-slate-200 text-sm text-slate-500"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    {badge}
                  </span>
                );
              })}
            </div>

            {/* CTAs */}
            <div
              className="opacity-0 animate-fade-up flex flex-wrap gap-4 mt-10"
              style={{ animationDelay: '400ms' }}
            >
              <button
                onClick={onViewProjects}
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer"
              >
                View Projects
              </button>
              <button
                onClick={onHireMe}
                className="px-8 py-4 bg-slate-900/10 text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-slate-900/10 hover:border-slate-400 transition-all duration-300 cursor-pointer"
              >
                Hire Me
              </button>
              <button
                onClick={onOpenChat}
                className="px-8 py-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-slate-900 font-bold rounded-xl border border-primary/30 hover:border-primary/50 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5" />
                Chat With My AI Twin
              </button>
            </div>

            {/* Social links */}
            <div
              className="opacity-0 animate-fade-up flex items-center gap-5 mt-8"
              style={{ animationDelay: '500ms' }}
            >
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side — Avatar (col-span-5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="opacity-0 animate-scale-in relative"
              style={{ animationDelay: '300ms' }}
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-2xl scale-110" />
              {/* Avatar circle */}
              <div
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
                }}
              >
                <span className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 select-none">
                  SM
                </span>
              </div>
              {/* Decorative orbit ring */}
              <div className="absolute inset-0 rounded-full border border-slate-200 scale-125 animate-pulse-slow" />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="opacity-0 animate-fade-up border-t border-slate-200 pt-12 mt-20"
          style={{ animationDelay: '600ms' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-3xl md:text-3xl font-display font-bold text-slate-900">
                  {stat.value}
                  {stat.suffix && (
                    <span className="gradient-text">{stat.suffix}</span>
                  )}
                </div>
                <div className="text-sm text-slate-500 mt-1 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
