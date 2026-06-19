import React, { useEffect, useRef, useState } from 'react';
import { Brain, Smartphone, Cloud, Wrench } from 'lucide-react';
import { SKILLS_DETAILED } from '../constants';
import { SkillGroup } from '../types';

const CATEGORY_ICONS: Record<string, React.FC<{ className?: string }>> = {
  'AI & Data Science': Brain,
  'Mobile Development': Smartphone,
  'Backend & Cloud': Cloud,
  'Tools & DevOps': Wrench,
};

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 opacity-0 animate-fade-up">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            A snapshot of my core competencies across AI, mobile, backend, and tooling — each honed through real-world production work.
          </p>
        </div>

        {/* Skill group cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {SKILLS_DETAILED.map((group: SkillGroup, groupIndex: number) => {
            const Icon = CATEGORY_ICONS[group.category] || Brain;
            return (
              <div
                key={group.category}
                className="opacity-0 animate-fade-up glass-card-hover rounded-2xl p-6"
                style={{ animationDelay: `${(groupIndex + 1) * 150}ms` }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-xs text-gray-500 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
                            transitionDelay: isVisible
                              ? `${groupIndex * 150 + 400}ms`
                              : '0ms',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
