import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">The Journey</h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            From early Android development to MSc-level data science — a progression of increasing impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-3 md:ml-6">
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
                  <h3 className="text-xl font-bold text-white font-display">{exp.role}</h3>
                  <span className="text-xs font-mono text-gray-500 bg-black/30 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                {/* Company + Location Row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                  <span className="text-lg text-gray-400">{exp.company}</span>
                  {exp.location && (
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  )}
                </div>

                {/* Achievement Bullets */}
                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed">
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
      </div>
    </section>
  );
};

export default JourneySection;
