import React from 'react';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, BIO_SHORT } from '../constants';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Open Source', id: 'open-source' },
    { label: 'Journey', id: 'journey' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: GITHUB_URL, label: 'GitHub' },
    { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
              SM<span className="text-primary">.dev</span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{BIO_SHORT}</p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-600 hover:text-slate-900 text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Social */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900/10 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-900/10 hover:border-slate-200 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © 2025 Sandeep Malviya. Built with React & Gemini AI.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-600 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
