export interface Project {
  id: string;
  title: string;
  description: string; // Short summary/Subtitle
  valueProposition: string; // "2-sentence value proposition"
  achievement: string; // "Brief bullet point of primary achievement"
  techStack: string[];
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
  
  // Deep Dive Content
  problem?: string;
  challenges?: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  gallery?: string[]; // Additional images
  details: string; // The full narrative or architecture description

  // Engineering Specs
  complexity?: 'Medium' | 'High' | 'Very High' | 'Research Grade';
  linesOfCode?: string; // e.g., "12k+ LOC"
  architecture?: string[]; // e.g., ["BLoC Pattern", "Microservices"]

  // Enhanced fields for redesign
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0-100 expertise percentage
}

export interface SkillGroup {
  category: string;
  icon: string; // lucide icon name hint
  skills: SkillItem[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarInitials: string;
  linkedinUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}