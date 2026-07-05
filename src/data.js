export const LINKS = {
  email: 'krishnakravi007@gmail.com',
  phone: '+91 96061 40554',
  github: 'https://github.com/krishnakravi',
  linkedin: 'https://www.linkedin.com/in/krishna-k-r-15b2a4214/',
  resume: '/Assets/Krishna_K_R_Resume.pdf',
}

export const EXPERIENCE = [
  {
    frame: '01',
    org: 'Telstra',
    role: 'Associate Software Engineer',
    period: '2026 — Present',
    location: 'Bangalore, India',
    logo: '/Assets/telstra-logo.png',
    logoBg: '#ffffff',
    status: 'NOW RECORDING',
    points: [
      'Presently working at Telstra as an Associate Software Engineer.',
      'Building on a foundation of production mobile & web engineering at consumer scale.',
    ],
  },
  {
    frame: '02',
    org: 'Myntra',
    sub: 'Flipkart Group · Search & Filters',
    role: 'SDE Intern',
    period: 'Jan 2026 — Jun 2026',
    location: 'Bangalore, India',
    logo: '/Assets/myntra-logo.png',
    logoBg: '#ffffff',
    metric: { value: '+10.2%', label: 'filter adoption' },
    points: [
      'Revamped the main filters page for millions of MAUs — turned the legacy page into a unified scroll layout with new icons, widgets, API state handling and a long tail of edge cases.',
      'Shipped production-ready React Native across the search-filters surface; fixed two production bugs in the product listing page.',
      'Picked up Android profiling and QA test automation along the way.',
    ],
  },
  {
    frame: '03',
    org: 'Alten Calsoft Labs',
    role: 'Software Development Intern',
    period: 'Jun 2025 — Aug 2025',
    location: 'Bangalore, India',
    logo: '/Assets/ACL_Digital_Logo.jpg',
    logoBg: '#ffffff',
    metric: { value: '-88%', label: 'query time · 60s → 12s' },
    points: [
      'Optimized enterprise database query performance by 88% via SQL indexing and query restructuring.',
      'Built data extraction workflows processing hundreds of queries in a 2-person agile team.',
    ],
  },
  {
    frame: '04',
    org: 'CIE, PES University',
    role: 'Tech Research Analyst',
    period: 'Jan 2024 — May 2024',
    location: 'Bangalore, India',
    logo: '/Assets/CIE logo.jpg',
    logoBg: '#ffffff',
    points: [
      'Fine-tuned Mistral 7B on medical datasets for healthcare NLP.',
      'Deployed Gemini 2B locally via LM Studio with Open Interpreter.',
    ],
  },
]

export const PROJECTS = [
  {
    index: '02',
    name: 'Smart Diet & Fitness Planner',
    tag: 'PUBLISHED · ICCET 2026',
    year: '2024 — 2026',
    stack: ['React Native', 'Node.js', 'GCP', 'MongoDB', 'GenAI'],
    body: 'AI-driven, calendar-aware mobile app for personalized health coaching on HIPAA-compliant GCP infra. Published & presented at ICCET 2026, Chennai.',
    link: 'https://github.com/krishnakravi',
  },
  {
    index: '03',
    name: 'HoneyShield — Honeypot IDS',
    tag: '96% ACCURACY',
    year: '2024',
    stack: ['Python', 'TensorFlow', 'CATBoost', 'FAISS'],
    body: 'ML intrusion detection trained on 10,000+ network samples — 96% accuracy at 20–30 ms response, with a FAISS threat pipeline and automated alerting.',
    link: 'https://github.com/krishnakravi/IOT',
  },
  {
    index: '04',
    name: 'AI Mental Health Chatbot',
    tag: '100+ TEST SESSIONS',
    year: '2024',
    stack: ['Python', 'NLP', 'LangGraph', 'Streamlit'],
    body: 'Conversational AI trained on DSM-3 clinical data with multi-turn context via LangGraph and high ROUGE scores across 100+ sessions.',
    link: 'https://github.com/krishnakravi/Weal_chatbot/tree/main',
  },
  {
    index: '05',
    name: 'Exercise Recommendation Engine',
    tag: '90% ACCURACY',
    year: '2024',
    stack: ['Python', 'GenAI', 'ML', 'Flask'],
    body: 'Personalized fitness recommender built on ML user profiling, served through a Flask web app with an analytics dashboard.',
    link: 'https://github.com/krishnakravi/GenAI_Project',
  },
]

export const SKILLS = [
  {
    group: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Kotlin', 'C', 'SQL'],
  },
  {
    group: 'Mobile & Frontend',
    items: ['React Native (production)', 'React', 'Next.js', 'Jetpack Compose', 'Tailwind CSS'],
  },
  {
    group: 'Backend & Data',
    items: ['Node.js', 'Express', 'Flask', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    group: 'ML / AI',
    items: ['TensorFlow', 'Scikit-learn', 'LangGraph', 'NLP', 'GenAI', 'Computer Vision'],
  },
  {
    group: 'Cloud & Tooling',
    items: ['GCP', 'AWS', 'Docker', 'Vercel', 'CI/CD', 'Android Profiling', 'QA Automation'],
  },
  {
    group: 'Security',
    items: ['Network Security', 'Pen Testing', 'FAISS', 'CICFlowmeter', 'Vulnerability Assessment'],
  },
]

export const TICKER = [
  'React Native',
  'JavaScript',
  'TypeScript',
  'Kotlin',
  'Python',
  'Jetpack Compose',
  'Node.js',
  'GCP',
  'TensorFlow',
  'LangGraph',
  'Docker',
  'PostgreSQL',
]

export const ACHIEVEMENTS = [
  'State Hub Round — SAP Hackfest 2024 · 12,500 participants',
  'Top 10 — Terrathon 4.0 · 270 participants',
  'Vice-Head, Debate Society — led 15+ members',
  'Former state-level swimmer & chess player',
  'Technical mentor — Data Science & ML',
]
