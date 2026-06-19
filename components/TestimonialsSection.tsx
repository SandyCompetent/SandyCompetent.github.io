import React from 'react';
import { ExternalLink, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3">What People Say</h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            Feedback from colleagues, clients, and mentors I've had the privilege to work with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card p-8 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              {/* Opening Quote Mark */}
              <span className="text-6xl text-white/10 font-serif leading-none block -mb-4">"</span>

              {/* Quote Text */}
              <p className="text-gray-300 text-sm leading-relaxed mt-2">{testimonial.quote}</p>

              {/* Divider */}
              <div className="border-t border-white/10 mt-6 pt-4">
                {/* Person Info Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar Circle */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {testimonial.avatarInitials}
                    </div>
                    {/* Name & Title */}
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.title} · {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn Link */}
                  {testimonial.linkedinUrl && (
                    <a
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label={`${testimonial.name}'s LinkedIn`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <p
          className="text-gray-600 text-xs italic text-center mt-10 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          Note: These are representative testimonials. Connect with me on LinkedIn for verified recommendations.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
