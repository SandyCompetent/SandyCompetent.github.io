import React from 'react';
import { Github, Linkedin, Sparkles, GraduationCap, Rocket, Brain, Globe, ArrowRight } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-200 text-sm text-slate-600 shadow-sm font-medium"
                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                    {badge}
                  </span>
                );
              })}
            </div>

            {/* CTAs */}
            <div
              className="opacity-0 animate-fade-up grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
              style={{ animationDelay: '400ms' }}
            >
              <button
                onClick={onHireMe}
                className="flex flex-col items-start p-4 bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg rounded-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="font-bold text-slate-900 group-hover:text-primary transition-colors">Hiring me</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <span className="text-xs text-slate-500 text-left">View resume & qualifications</span>
              </button>

              <button
                onClick={() => onOpenChat()}
                className="flex flex-col items-start p-4 bg-white border border-slate-200 hover:border-secondary/50 hover:shadow-lg rounded-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="font-bold text-slate-900 group-hover:text-secondary transition-colors">Exploring AI</span>
                  <Sparkles className="w-4 h-4 text-slate-400 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </div>
                <span className="text-xs text-slate-500 text-left">Chat with my AI Twin</span>
              </button>

              <button
                onClick={onViewProjects}
                className="flex flex-col items-start p-4 bg-slate-900 text-white border border-slate-900 hover:bg-slate-800 rounded-xl transition-all duration-300 group cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="font-bold">Looking for a builder</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <span className="text-xs text-slate-400 text-left">See my field reports</span>
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

          {/* Right side — System Artifact (col-span-5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="opacity-0 animate-scale-in relative w-full max-w-md"
              style={{ animationDelay: '300ms' }}
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-2xl scale-105" />

              {/* System Card */}
              <div className="relative bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-slate-400 text-xs">gesture_engine.py</span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  {/* Status */}
                  <div className="flex items-center gap-3 text-green-400">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span>System Active &bull; 98% Confidence</span>
                  </div>

                  {/* Code snippet */}
                  <div className="text-slate-300">
                    <span className="text-pink-400">def</span> <span className="text-blue-400">process_frame</span>(frame):<br/>
                    &nbsp;&nbsp;roi = segment_hand(frame)<br/>
                    &nbsp;&nbsp;tensor = normalize(roi)<br/>
                    &nbsp;&nbsp;<span className="text-pink-400">return</span> model.predict(tensor)
                  </div>

                  {/* Output Demo */}
                  <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-slate-500 text-xs mb-1">LIVE INFERENCE</div>
                      <div className="text-white">Detected: <span className="text-accent font-bold">"HELLO"</span></div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-500 text-xs mb-1">LATENCY</div>
                      <div className="text-white">12ms</div>
                    </div>
                  </div>
                </div>
              </div>
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
