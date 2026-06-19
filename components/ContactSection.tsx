import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github, Calendar, ArrowUpRight } from 'lucide-react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, CALENDLY_URL } from '../constants';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('idle');
      }
    } catch {
      setFormState('idle');
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sandy-competent',
      href: LINKEDIN_URL,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'SandyCompetent',
      href: GITHUB_URL,
      color: 'text-gray-300',
      bg: 'bg-gray-300/10',
    },
  ];

  return (
    <section id="contact" className="py-32 relative bg-gradient-to-b from-[#020617] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter mt-3">
            Let's Build Something<br />Exceptional
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Open for full-stack, mobile, and data science roles. Let's discuss how I can add value to your team.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column — Contact Form */}
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            {formState === 'success' ? (
              <div className="glass-card p-12 rounded-2xl flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <Send className="text-green-400 w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                onSubmit={handleSubmit}
                className="glass-card p-8 rounded-2xl space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="form-input w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="form-input w-full"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Project discussion"
                    className="form-input w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className="form-input w-full resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column — Contact Info */}
          <div
            className="space-y-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            {/* Contact Link Cards */}
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="glass-card-hover p-5 rounded-2xl flex items-center gap-4 group block"
              >
                <div className={`w-12 h-12 rounded-xl ${link.bg} flex items-center justify-center flex-shrink-0`}>
                  <link.icon size={20} className={link.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{link.label}</p>
                  <p className="text-white text-sm font-semibold truncate">{link.value}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            ))}

            {/* Book a Call CTA */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card-hover p-5 rounded-2xl group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Calendar size={20} className="text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Schedule</p>
                  <p className="text-white text-sm font-semibold">Book a Discovery Call</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
            </a>

            {/* Availability Badge */}
            <div
              className="glass-card p-5 rounded-2xl opacity-0 animate-fade-up"
              style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3">
                <span className="available-dot" />
                <div>
                  <p className="text-white text-sm font-semibold">Available for hire</p>
                  <p className="text-gray-500 text-xs">Open to UK & Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
