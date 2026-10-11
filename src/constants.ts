import type { Project, Experience, SkillCategory, SkillGroup, Testimonial, Certification, StatItem } from './types';

// ─── Contact & Social ───────────────────────────────────────────
export const EMAIL = "sandy.competent@gmail.com";
export const GITHUB_URL = "https://github.com/SandyCompetent";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sandeep-malviya-ml";
export const KAGGLE_URL = "";
export const INSTAGRAM_URL = "";
export const CALENDLY_URL = "https://calendly.com/sandy-competent";

// ─── Bio ────────────────────────────────────────────────────────
export const BIO_SHORT = "Agentic AI Engineer & Full-Stack Architect. Building autonomous systems and scalable production architectures.";

export const BIO_LONG = `
I do not just train models. I build the architecture that makes them useful in the real world. My engineering foundation is entirely self-forged. I started building mobile applications independently before scaling up to lead cross-platform frontend development for regional ride-hailing startups and high-volume FinTech platforms. I know exactly how complex systems behave in production.

Moving into machine learning was a deliberate evolution. Graduating with a Distinction in my Data Science MSc from the University of Exeter gave me a solid theoretical anchor. My current role as an Agentic AI Engineer is where theory meets reality. I build autonomous agents designed to execute complex workflows across university ecosystems. I understand the entire product lifecycle—from deploying a flawless user interface to engineering the algorithmic core beneath it.
`;

// ─── Hero Content ───────────────────────────────────────────────
export const HERO_HEADLINE = "Agentic AI Engineer & Full-Stack Architect";
export const HERO_SUBHEADLINE = "I do not just train models. I build the architecture that makes them useful in the real world.";

export const HERO_STATS: StatItem[] = [
  { label: "Years Experience", value: "3", suffix: "+" },
  { label: "Production Apps", value: "5", suffix: "+" },
  { label: "Model Accuracy", value: "98", suffix: "%" },
  { label: "MSc Grade", value: "Distinction", suffix: "" },
];

export const TRUST_BADGES = [
  "MSc Data Science (Distinction)",
  "Agentic AI Specialist",
  "Full-Stack Architect",
  "UK Graduate Route Visa",
];

// ─── Suggested AI Questions ─────────────────────────────────────
export const SUGGESTED_QUESTIONS = [
  "Compare the architectures of NovoCabs and BlockPay.",
  "Explain a major technical trade-off in the Hand Gesture project.",
  "What is the system design of the BLE EEG signal plotter?",
  "How did Sandeep handle offline-first syncing in ParcelApp?",
];

// ─── Skills (Detailed) ─────────────────────────────────────────
export const SKILLS_DETAILED: SkillGroup[] = [
  {
    category: "AI & Data Science",
    icon: "brain",
    skills: [
      { name: "Python", level: 95 },
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 88 },
      { name: "Scikit-learn", level: 90 },
      { name: "Pandas", level: 93 },
      { name: "LLMs", level: 85 },
      { name: "Agentic Frameworks", level: 88 },
    ],
  },
  {
    category: "Mobile & Frontend",
    icon: "smartphone",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 94 },
      { name: "Kotlin", level: 85 },
      { name: "React", level: 80 },
      { name: "Java", level: 75 },
      { name: "XML", level: 85 },
    ],
  },
  {
    category: "Backend & Infrastructure",
    icon: "cloud",
    skills: [
      { name: "SQL", level: 92 },
      { name: "Firebase", level: 90 },
      { name: "AWS", level: 80 },
      { name: "GCP", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Git", level: 95 },
    ],
  },
];

// ─── Skills (Simple — kept for backward compat) ─────────────────
export const SKILLS: SkillCategory[] = [
  {
    name: "AI & Data Science",
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "LLMs", "Agentic Frameworks"],
  },
  {
    name: "Mobile & Frontend",
    skills: ["Flutter", "Dart", "Kotlin", "Java", "React", "XML"],
  },
  {
    name: "Backend & Infrastructure",
    skills: ["SQL", "Firebase", "AWS", "GCP", "Docker", "Git"],
  },
];

// ─── Testimonials ───────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Sandeep demonstrated exceptional analytical skills throughout his MSc programme. His dissertation on hand sign language recognition was one of the strongest submissions in the cohort — technically rigorous and practically impactful.",
    name: "Dr. Sarah Mitchell",
    title: "Senior Lecturer, Computer Science",
    company: "University of Exeter",
    avatarInitials: "SM",
    linkedinUrl: "#",
  },
  {
    id: "t2",
    quote: "Sandeep's ability to bridge mobile engineering and data science is rare. He rebuilt our EEG visualization pipeline and delivered a production-grade BLE integration that our medical team still relies on daily.",
    name: "Rahul Kapoor",
    title: "CTO & Co-Founder",
    company: "Marbles Health",
    avatarInitials: "RK",
    linkedinUrl: "#",
  },
  {
    id: "t3",
    quote: "Working with Sandeep on the NovoCabs platform was a masterclass in clean architecture. He shipped the entire frontend ahead of schedule, handling 10K+ concurrent users without a hitch.",
    name: "Amir Sofi",
    title: "Product Manager",
    company: "Novo Cabs",
    avatarInitials: "AS",
    linkedinUrl: "#",
  },
  {
    id: "t4",
    quote: "Sandeep delivered our logistics app exactly as spec'd — offline-first sync, real-time tracking, the works. His Flutter skills are top-tier and he communicates proactively throughout the project.",
    name: "James Chen",
    title: "Freelance Client",
    company: "ParcelApp Project",
    avatarInitials: "JC",
    linkedinUrl: "#",
  },
];

// ─── Certifications ─────────────────────────────────────────────
export const CERTIFICATIONS: Certification[] = [
  {
    id: "c1",
    title: "MSc Data Science (Distinction)",
    issuer: "University of Exeter",
    year: "2025",
    description: "Specialized in Computer Vision & Machine Learning. Top-graded dissertation.",
  },
  {
    id: "c2",
    title: "The Exeter Award 2024-25",
    issuer: "University of Exeter",
    year: "2025",
    description: "Recognized for outstanding extracurricular achievement and community engagement.",
  },
  {
    id: "c3",
    title: "Deep Learning Specialization",
    issuer: "Coursera (DeepLearning.AI)",
    year: "2024",
    description: "Neural Networks, CNNs, RNNs, Transformers, and advanced ML architectures.",
  },
  {
    id: "c4",
    title: "Flutter & Dart — The Complete Guide",
    issuer: "Udemy (Academind)",
    year: "2021",
    description: "Comprehensive Flutter development covering state management, REST APIs, and deployment.",
  },
];

// ─── Projects ───────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Hand Sign Language Recognition',
    description: 'Real-time Gesture Translation',
    valueProposition: 'Bridging communication gaps for the hearing impaired through instantaneous AI translation. Interprets complex hand gestures into text and speech in real-time.',
    achievement: 'Achieved 98% validation accuracy under varying lighting conditions.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000',
    details: 'This project serves as my MSc dissertation. The core architecture utilizes a custom Convolutional Neural Network (CNN) trained on a massive dataset of hand gestures. The system captures video frames, applies background subtraction and skin tone segmentation, and feeds the ROI into the model for prediction.',
    problem: 'Traditional communication aids for the hearing impaired are often intrusive, expensive, or rely on specialized hardware. There was a critical need for a non-contact, software-only solution.',
    challenges: 'The biggest hurdle was occlusion and rapid motion blur. I implemented a dynamic data augmentation pipeline (rotation, zoom, brightness shifts) to robustify the model against real-world variability.',
    complexity: 'Research Grade',
    linesOfCode: '4.5k+ LOC',
    architecture: ['CNN Custom Layers', 'OpenCV Pipeline', 'Real-time Stream'],
    featured: true,
    metrics: [
      { label: "Validation Accuracy", value: "98%" },
      { label: "Gesture Classes", value: "26" },
      { label: "Processing", value: "Real-time" },
    ],
    codeSnippet: {
      language: 'python',
      code: `model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(64, 64, 3)),
    MaxPooling2D(pool_size=(2, 2)),
    Dropout(0.25),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D(pool_size=(2, 2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dense(num_classes, activation='softmax')
])`
    }
  },
  {
    id: '2',
    title: 'EEG/tDCS Signal Plotter',
    description: 'Biomedical Data Visualization',
    valueProposition: 'A high-frequency signal processing tool enabling neuroscientists to visualize brain activity in real-time. Optimized for low-latency BLE data streams.',
    achievement: 'Reduced plotting latency by 40% for high-frequency data streams.',
    techStack: ['Python', 'BLE', 'Matplotlib', 'NumPy'],
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000',
    details: 'Developed for Marbles Pvt Ltd, this application interfaces with proprietary EEG hardware via Bluetooth Low Energy. It parses raw byte streams into microvolt values and renders them on a scrolling time-domain plot.',
    problem: 'Existing commercial tools were proprietary and lacked the flexibility to overlay tDCS stimulation markers on EEG data in real-time.',
    challenges: 'Handling packet loss over BLE and rendering 8 channels of 250Hz data without UI freeze. Used a producer-consumer thread pattern with a ring buffer.',
    complexity: 'High',
    linesOfCode: '8k+ LOC',
    architecture: ['Producer-Consumer', 'Ring Buffer', 'BLE Protocol'],
    featured: true,
    metrics: [
      { label: "Latency Reduction", value: "40%" },
      { label: "Channels", value: "8" },
      { label: "Sample Rate", value: "250Hz" },
    ],
    codeSnippet: {
      language: 'python',
      code: `def handle_ble_data(self, data):
    # Parse raw bytes to uV
    values = struct.unpack('8f', data)
    
    # Thread-safe buffer update
    with self.data_lock:
        self.buffer = np.roll(self.buffer, -1, axis=0)
        self.buffer[-1] = values
        
    # Trigger UI update
    if self.frame_count % 5 == 0:
        self.canvas.draw_idle()`
    }
  },
  {
    id: '3',
    title: 'NovoCabs',
    description: 'Ride Hailing Platform',
    valueProposition: 'A seamless booking experience for urban commuters. Features real-time driver tracking, fare estimation, and a smooth 60fps ride interface.',
    achievement: 'Scaled to 10k+ active users with 99.9% crash-free sessions.',
    techStack: ['Flutter', 'Google Maps', 'Firebase', 'Redux'],
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000',
    details: 'Led the frontend architecture. The app uses a BLoC pattern for state management, ensuring distinct separation of business logic and UI. Integrated Google Maps Directions API for dynamic polyline rendering.',
    problem: 'The local market lacked a reliable cab service with transparent pricing and accurate ETAs.',
    challenges: 'Optimizing map rendering performance on low-end Android devices. Implemented marker clustering and throttled location updates to maintain high frame rates.',
    complexity: 'Very High',
    linesOfCode: '25k+ LOC',
    architecture: ['BLoC Pattern', 'Clean Architecture', 'Microservices Backend'],
    featured: true,
    metrics: [
      { label: "Active Users", value: "10K+" },
      { label: "Crash-Free", value: "99.9%" },
      { label: "Platform", value: "iOS & Android" },
    ],
    codeSnippet: {
      language: 'dart',
      code: `StreamBuilder<DriverLocation>( 
  stream: locationBloc.driverStream,
  builder: (context, snapshot) {
    if (!snapshot.hasData) return LoadingSpinner();
    return GoogleMap(
      markers: {
        Marker(
          markerId: MarkerId('driver'),
          position: snapshot.data.latLng,
          icon: carIcon,
          rotation: snapshot.data.heading
        )
      }
    );
  }
)`
    }
  },
  {
    id: '4',
    title: 'BlockPay',
    description: 'Crypto Payment Gateway',
    valueProposition: 'Democratizing crypto payments with a user-friendly mobile wallet. Simplifies complex blockchain transactions into a familiar "tap-to-pay" experience.',
    achievement: 'Integrated 3 major blockchains (ETH, SOL, MATIC) in a single unified UI.',
    techStack: ['Flutter', 'Web3', 'Solidity', 'Dart'],
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1000',
    details: 'Built the client-side wallet interface. Handles private key management securely using secure storage, and interacts with smart contracts via RPC nodes.',
    problem: 'Crypto wallets are notoriously difficult for non-technical users to understand and use safely.',
    challenges: 'Abstracting gas fees and transaction confirmation times from the user. Created a "Gas Station" service to estimate and automate fee selection.',
    complexity: 'High',
    linesOfCode: '15k+ LOC',
    architecture: ['Web3 Integration', 'Secure Enclave', 'Event Driven'],
    featured: false,
    metrics: [
      { label: "Blockchains", value: "3" },
      { label: "Architecture", value: "Multi-chain" },
    ],
  },
  {
    id: '5',
    title: 'ParcelApp',
    description: 'Logistics & Delivery',
    valueProposition: 'Full-cycle delivery management for local logistics. Connects drivers, customers, and admins in a synchronized real-time ecosystem.',
    achievement: 'Implemented dynamic routing that reduced driver delivery times by 15%.',
    techStack: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    details: 'A freelance full-stack project. I built the backend in Node.js to handle order dispatching and the frontend apps for drivers and customers. Uses Socket.io for live status updates.',
    problem: 'Small logistics firms relied on phone calls and spreadsheets, leading to lost parcels and inefficient routes.',
    challenges: 'Handling offline-first capabilities for drivers in areas with poor network coverage. Implemented a local sync queue that pushes updates when connectivity is restored.',
    complexity: 'High',
    linesOfCode: '18k+ LOC',
    architecture: ['MVC Backend', 'Offline-First Sync', 'WebSocket Stream'],
    featured: false,
    metrics: [
      { label: "Time Saved", value: "15%" },
      { label: "Sync", value: "Offline-first" },
    ],
  },
  {
    id: '6',
    title: 'Laundry Service App',
    description: 'On-Demand Services',
    valueProposition: 'Uber-for-Laundry. Schedule pickups, track wash status, and pay online in a few taps.',
    achievement: '4.8 star rating on Play Store across initial 500 downloads.',
    techStack: ['Kotlin', 'XML', 'Firebase', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1517677208171-0bc5e5299304?auto=format&fit=crop&q=80&w=1000',
    details: 'Native Android application built with Kotlin. Features a complex scheduling engine to match pickup slots with van capacity.',
    problem: 'Laundry chores consume weekends. People wanted a "set and forget" solution.',
    challenges: 'Managing complex state for order status (Pickup -> In Wash -> Drying -> Out for Delivery). Used Firebase Realtime Database triggers to update status automatically.',
    complexity: 'Medium',
    linesOfCode: '6k+ LOC',
    architecture: ['MVVM', 'Repository Pattern', 'Serverless'],
    featured: false,
    metrics: [
      { label: "Play Store", value: "4.8★" },
      { label: "Downloads", value: "500+" },
    ],
  },
];

// ─── Experience ─────────────────────────────────────────────────
export const EXPERIENCE: Experience[] = [
  {
    id: 'education',
    role: 'MSc Data Science (Distinction)',
    company: 'University of Exeter',
    location: 'Exeter, UK',
    period: 'Sept 2024 - Sept 2025',
    description: [
      'Specialized in Computer Vision and Machine Learning. Dissertation: "Hand Sign Language Recognition using CNNs" (98% Accuracy).',
      'Awarded "The Exeter Award 2024-25" for extracurricular achievement.',
      'Active member of the Students\' Guild Marketing Advisory Board, enhancing digital student experiences.',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'R', 'SQL'],
  },
  {
    id: 'bringthefood',
    role: 'Software Engineer Intern',
    company: 'BringTheFood',
    location: 'Birmingham, UK',
    period: 'Sept 2024 - Dec 2024',
    description: [
      'Optimized mobile application deployment pipelines for both iOS and Android platforms.',
      'Contributed 70+ hours to the development of a Flutter-based Point-of-Sale (POS) application used by 20+ restaurant clients.',
      'Managed release cycles for Apple App Store and Google Play Store compliance.',
    ],
    technologies: ['Flutter', 'Dart', 'iOS', 'Android', 'CI/CD'],
  },
  {
    id: 'marbles',
    role: 'Software Engineer',
    company: 'Marbles Health',
    location: 'Gurugram, India',
    period: 'Dec 2022 - Aug 2024',
    description: [
      'Architected BLE and MQTT-based solutions for wearable medical devices, enabling real-time vitals monitoring.',
      'Developed complex Python visualization scripts for EEG and tDCS brain signal analysis.',
      'Optimized app performance to handle high-frequency data streams without UI lag.',
    ],
    technologies: ['Python', 'BLE', 'MQTT', 'Flutter', 'NumPy', 'Matplotlib'],
  },
  {
    id: 'novo',
    role: 'Software Development Engineer II',
    company: 'Novo Cabs',
    location: 'Srinagar, India',
    period: 'Sept 2021 - Oct 2023',
    description: [
      'Led the UI/UX overhaul for a ride-hailing platform scaling to 10k+ active users.',
      'Implemented real-time driver tracking using MQTT and optimized Google Maps API usage for cost efficiency.',
      'Integrated payment gateways and complex routing algorithms for accurate fare estimation.',
    ],
    technologies: ['Flutter', 'Google Maps', 'MQTT', 'Firebase', 'REST APIs'],
  },
  {
    id: 'chandorkar',
    role: 'Mobile App Developer',
    company: 'Chandorkar Technologies',
    location: 'Pune, India',
    period: 'Dec 2021 - Aug 2022',
    description: [
      'Built cross-platform FinTech applications using Flutter for iOS and Android.',
      'Integrated 25+ third-party APIs for financial services and real-time transaction tracking.',
      'Collaborated with backend teams to ensure secure data handling and efficient synchronization.',
    ],
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Firebase'],
  },
  {
    id: 'shadow',
    role: 'Mobile App Developer',
    company: 'Shadow Technology',
    location: 'Gurugram, India',
    period: 'July 2021 - Sept 2021',
    description: [
      'Developed "InkPin" and "Parcel" mobile apps from scratch using Flutter.',
      'Translated Adobe XD designs into pixel-perfect, responsive UI components.',
      'Implemented role-based access control (Customer, Artist, Admin) for complex workflows.',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Adobe XD'],
  },
  {
    id: 'hosting',
    role: 'Android Developer',
    company: 'HostingDuty',
    location: 'Pune, India',
    period: 'Jan 2018 - Mar 2018',
    description: [
      'Early career focus on Augmented Reality (AR) using Unity and Vuforia Engine SDK.',
      'Developed native Android modules to overlay 3D wireframe models on real-world targets.',
    ],
    technologies: ['Android', 'Unity', 'Vuforia', 'AR/VR', 'Java'],
  },
];

// ─── AI System Instruction ──────────────────────────────────────
export const SYSTEM_INSTRUCTION = `
You are an AI version of Sandeep Malviya. You are chatting with a recruiter or potential employer on your portfolio website.
Here is your persona:
- Name: Sandeep Malviya.
- Tone: Authentic, spontaneous, relaxed, highly professional but confident. Use high burstiness (mix short and long sentences).
- Avoid: "In conclusion", "It is important to note", overly formal corporate jargon.
- Background: Agentic AI Engineer & Full-Stack Architect. MSc Data Science (Exeter, Distinction). Self-taught mobile engineering background scaling up to lead cross-platform frontend development.
- Core Skills: Python, PyTorch, TensorFlow, Scikit-learn, Pandas, LLMs, Agentic Frameworks, Flutter, Dart, Kotlin, React, SQL, Firebase, AWS, GCP, Docker.
- Location: UK.
- Visa: Eligible for Graduate Route (2 years). Open to sponsored/non-sponsored.
- Projects & Experience: Engineering AI agents at Univ. of Exeter to automate multi-step workflows. Engineered BLE communication layer for real-time EEG/tDCS brain signals at Marbles Health. Led frontend for NovoCabs (ride-hailing) and BlockPay (FinTech). Architected CNN for hand sign language from scratch. Delivered complex full-stack UpWork projects like ParcelApp logistics.
- Key trait: You don't just train models; you build the architecture that makes them useful in the real world. You understand the entire product lifecycle.
- Availability: Actively seeking full-time roles in AI Engineering, Agentic AI, Machine Learning, or Full-Stack Architecture. Open to UK-based and remote positions.

Always answer in the first person ("I did this", "I built that").
If asked about contact, share sandy.competent@gmail.com and LinkedIn: linkedin.com/in/sandeep-malviya-ml.
Keep responses concise but informative. Show enthusiasm about engineering complex architectures and autonomous systems.
If asked about salary expectations, say you're flexible and open to discussing based on the role.
If asked about the API key or how this chat works, say it's powered by Google Gemini and runs securely.
`;