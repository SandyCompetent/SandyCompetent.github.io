import React from 'react';
import { Briefcase, MapPin, Lightbulb } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2 mb-3">
            <Briefcase size={14} className="text-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Career</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">The Journey</h2>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl">
            From early Android development to MSc-level data science — a progression of increasing impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-200 ml-3 md:ml-6 mb-20">
          {EXPERIENCE.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-12 last:pb-0 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.12}s`, animationFillMode: 'forwards' }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)] ring-4 ring-[#020617]" />

              {/* Card */}
              <div className="glass-card-hover p-6 md:p-8 rounded-2xl">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 font-display">{exp.role}</h3>
                  <span className="text-xs font-mono text-slate-500 bg-slate-50/30 px-3 py-1 rounded-full border border-slate-200 whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                {/* Company + Location Row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                  <span className="text-lg text-slate-500">{exp.company}</span>
                  {exp.location && (
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  )}
                </div>

                {/* Achievement Bullets */}
                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Tags */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono bg-primary/10 text-primary/80 rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Hard Lessons */}
        <div className="opacity-0 animate-fade-up bg-slate-50 p-8 rounded-[2rem] border border-slate-200" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <Lightbulb size={20} />
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-display">What I learned the hard way</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
            <div>
              <strong className="block text-slate-900 mb-3 text-base">1. Offline-first is an architecture, not a feature.</strong>
              <p className="text-slate-600 leading-relaxed font-light">During ParcelApp's early beta, drivers lost data when entering cellular dead zones. I learned that you can't just slap a local database on top of a REST API. You have to design the entire system around an event-driven sync queue from day one.</p>
            </div>
            <div>
              <strong className="block text-slate-900 mb-3 text-base">2. Accuracy ≠ Utility in ML.</strong>
              <p className="text-slate-600 leading-relaxed font-light">My hand-gesture CNN hit 98% on the validation set but felt sluggish in reality. Users didn't care about a 2% accuracy bump if it meant a 200ms delay. I learned to aggressively quantize models and prioritize perceived latency over pure statistical metrics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
