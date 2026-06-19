import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Sparkles, User } from 'lucide-react';
import { ChatMessage } from '../types';
import { SUGGESTED_QUESTIONS } from '../constants';
import { sendMessageToSandeepAI } from '../services/geminiService';

interface AIChatProps {
  initialQuestion?: string;
  externalOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

const AIChat: React.FC<AIChatProps> = ({ initialQuestion, externalOpen, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'model',
      text: "Hey! I'm Sandeep's AI assistant. Ask me anything about his projects, skills, or experience.",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [initialQuestionSent, setInitialQuestionSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sync with external open state
  useEffect(() => {
    if (externalOpen !== undefined) {
      setIsOpen(externalOpen);
    }
  }, [externalOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const toggleOpen = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Create a placeholder for the AI response
    const aiMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: aiMsgId,
      role: 'model',
      text: '', // Start empty
      timestamp: Date.now()
    }]);

    try {
      const stream = await sendMessageToSandeepAI(text);

      let fullText = '';

      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(msg =>
          msg.id === aiMsgId ? { ...msg, text: fullText } : msg
        ));
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => prev.map(msg =>
        msg.id === aiMsgId ? { ...msg, text: "I'm having trouble connecting to my brain right now. Try again in a sec!" } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  // Handle initial question on mount
  useEffect(() => {
    if (initialQuestion && !initialQuestionSent && isOpen) {
      setInitialQuestionSent(true);
      // Small delay to let the UI render first
      setTimeout(() => {
        sendMessage(initialQuestion);
      }, 500);
    }
  }, [initialQuestion, initialQuestionSent, isOpen, sendMessage]);

  const handleSend = async () => {
    await sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleSuggestedClick = (question: string) => {
    sendMessage(question);
  };

  // Show suggested questions when there are only 1-2 messages (the initial greeting)
  const showSuggestions = messages.length <= 2 && !isLoading;

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={toggleOpen}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-gradient-to-r from-primary to-secondary'
        }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-white" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-[90vw] sm:w-[400px] max-w-[400px] bg-card border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right z-40 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Animated Gradient Bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-primary via-secondary to-accent animate-pulse-slow" />

        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Sparkles className="text-primary w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">Ask AI Sandeep</h3>
            <p className="text-xs text-gray-400">Powered by Gemini 3 Flash</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-darker/50">
          {messages.map((msg, index) => (
            <React.Fragment key={msg.id}>
              <div
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-secondary/20' : 'bg-primary/20'
                }`}>
                  {msg.role === 'user' ? <User size={14} className="text-secondary" /> : <Bot size={14} className="text-primary" />}
                </div>
                <div className={`p-3 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-secondary text-white rounded-tr-none'
                    : 'bg-slate-800 text-gray-200 rounded-tl-none border border-white/5'
                }`}>
                  {msg.text || (isLoading && msg.id === messages[messages.length-1].id ? <Loader2 className="animate-spin w-4 h-4" /> : '')}
                </div>
              </div>

              {/* Suggested Questions — shown after the first AI message */}
              {index === 0 && msg.role === 'model' && showSuggestions && (
                <div className="flex flex-wrap gap-1.5 pl-11">
                  {SUGGESTED_QUESTIONS.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSuggestedClick(question)}
                      className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer transition-all"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-card border-t border-white/10">
          <div className="flex items-center gap-2 bg-darker rounded-full px-4 py-2 border border-white/10 focus-within:border-primary/50 transition-colors">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about my projects..."
              className="flex-grow bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="p-2 bg-primary/20 hover:bg-primary/40 rounded-full text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;
