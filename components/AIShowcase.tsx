import React from 'react';
import { Sparkles, MessageSquare, Bot, User } from 'lucide-react';
import { SUGGESTED_QUESTIONS } from '../constants';

interface AIShowcaseProps {
  onOpenChat: (question?: string) => void;
}

const MOCK_MESSAGES = [
  {
    role: 'user' as const,
    text: 'What projects has Sandeep built?',
  },
  {
    role: 'model' as const,
    text: "I've shipped 5+ production apps — from NovoCabs (10K+ users ride-hailing) to a real-time Hand Sign Language Recognition system that hit 98% accuracy for my MSc dissertation. I also built an EEG/tDCS signal plotter for medical devices at Marbles Health.",
  },
  {
    role: 'user' as const,
    text: 'Is he available for hire?',
  },
];

const AIShowcase: React.FC<AIShowcaseProps> = ({ onOpenChat }) => {
  return (
    <section id="ai-showcase" className="py-24 relative overflow-hidden">
      {/* Gradient background overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Decorative sparkle elements */}
      <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-primary/40 animate-pulse-slow" />
      <div className="absolute top-40 right-[20%] w-1.5 h-1.5 rounded-full bg-secondary/50 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-[10%] w-1 h-1 rounded-full bg-accent/40 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side: Text + chips */}
          <div>
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0ms' }}>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                AI-Powered
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3">
                Talk Directly With{' '}
                <span className="gradient-text">My AI Twin</span>
              </h2>
              <p className="text-gray-400 text-lg mt-4 max-w-xl leading-relaxed">
                Get instant answers about my projects, skills, experience, and availability. Powered by Google Gemini.
              </p>
            </div>

            {/* Suggested question chips */}
            <div
              className="opacity-0 animate-fade-up flex flex-wrap gap-3 mt-8"
              style={{ animationDelay: '150ms' }}
            >
              {SUGGESTED_QUESTIONS.map((question) => (
                <button
                  key={question}
                  onClick={() => onOpenChat(question)}
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {question}
                </button>
              ))}
            </div>

            {/* CTA button */}
            <div
              className="opacity-0 animate-fade-up mt-10"
              style={{ animationDelay: '300ms' }}
            >
              <button
                onClick={() => onOpenChat()}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.3)] cursor-pointer"
              >
                <Sparkles className="w-5 h-5" />
                Start Conversation
              </button>
            </div>
          </div>

          {/* Right side: Mock chat preview */}
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            <div className="glass-card-strong rounded-2xl p-1 relative">
              {/* Outer glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent blur-sm pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden">
                {/* Chat header */}
                <div className="bg-white/[0.03] border-b border-white/5 px-5 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-display font-bold text-white">
                      Sandeep's AI Twin
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Online · Powered by Gemini
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="px-5 py-5 space-y-4 bg-white/[0.01]">
                  {MOCK_MESSAGES.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-3 ${
                        msg.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {msg.role === 'model' && (
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mt-1">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-primary/20 text-gray-200 rounded-br-md'
                            : 'bg-white/5 text-gray-300 rounded-bl-md'
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.role === 'user' && (
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mt-1">
                          <User className="w-3.5 h-3.5 text-gray-400" />
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing indicator */}
                  <div className="flex gap-3 justify-start">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mt-1">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="bg-white/5 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-pulse" />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-pulse"
                        style={{ animationDelay: '150ms' }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-pulse"
                        style={{ animationDelay: '300ms' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Chat input (decorative) */}
                <div className="border-t border-white/5 px-5 py-3 bg-white/[0.02] flex items-center gap-3">
                  <div className="flex-1 bg-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-500">
                    Ask me anything...
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
