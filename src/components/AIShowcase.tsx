import React from 'react';
import { Sparkles, MessageSquare, Bot, User } from 'lucide-react';
import { SUGGESTED_QUESTIONS } from '../constants';

interface AIShowcaseProps {
  onOpenChat: (question?: string) => void;
}

const MOCK_MESSAGES = [
  {
    role: 'user' as const,
    text: 'Compare the architectures of NovoCabs and BlockPay.',
  },
  {
    role: 'model' as const,
    text: "While both use Flutter, their backends differ entirely. NovoCabs uses a centralized microservices architecture with Firebase and MQTT for low-latency dispatching to 10K+ concurrent users. BlockPay acts as a decentralized Web3 client connecting to Ethereum/Solana RPC nodes, focusing on local secure enclave storage for private keys.",
  }
];

const AIShowcase: React.FC<AIShowcaseProps> = ({ onOpenChat }) => {
  return (
    <section id="ai-showcase" className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side: Text + chips */}
          <div>
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0ms' }}>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                AI-Powered
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-3">
                Talk Directly With{' '}
                <span className="gradient-text">My AI Twin</span>
              </h2>
              <p className="text-slate-600 text-lg mt-4 max-w-xl leading-relaxed">
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
                  className="bg-slate-900/10 border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-600 hover:bg-slate-900/10 hover:border-slate-200 hover:text-slate-900 transition-all duration-300 cursor-pointer"
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
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all duration-300 inline-flex items-center gap-2 shadow-sm cursor-pointer"
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
            <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-1 relative">
              <div className="relative rounded-xl overflow-hidden">
                {/* Chat header */}
                <div className="bg-slate-50 border-b border-slate-200 px-5 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-sm font-display font-bold text-slate-900">
                      Sandeep's AI Twin
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Online · Powered by Gemini
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="px-5 py-5 space-y-4 bg-slate-900/[0.01]">
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
                            ? 'bg-primary/20 text-slate-900 rounded-br-md'
                            : 'bg-slate-900/10 text-slate-600 rounded-bl-md'
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.role === 'user' && (
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900/10 flex items-center justify-center mt-1">
                          <User className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing indicator */}
                  <div className="flex gap-3 justify-start">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mt-1">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="bg-slate-900/10 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
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
                <div className="border-t border-slate-200 px-5 py-3 bg-slate-900/[0.02] flex items-center gap-3">
                  <div className="flex-1 bg-slate-900/10 rounded-xl px-4 py-2.5 text-sm text-slate-500">
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
