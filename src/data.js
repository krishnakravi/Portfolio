export const LINKS = {
  email: 'krishnakravi007@gmail.com',
  phone: '+91 96061 40554',
  github: 'https://github.com/krishnakravi',
  linkedin: 'https://www.linkedin.com/in/krishna-k-r-15b2a4214/',
  resume: '/Assets/Krishna_K_R_Resume.pdf',
}

export const STATS = [
  { value: '+10.2%', label: 'filter adoption — A/B-tested filters revamp at Myntra' },
  { value: '60s → 12s', label: 'enterprise DB query time cut at Alten Calsoft' },
  { value: 'ICCET 2026', label: 'published & presented — capstone research, Chennai' },
  { value: '8.30', label: 'CGPA at PES University — DAC Scholar' },
]

export const EXPERIENCE = [
  {
    index: '01',
    org: 'Telstra',
    role: 'Associate Software Engineer',
    period: '2026 — Present',
    logo: '/Assets/telstra-logo.webp',
    current: true,
    points: [
      'Presently working at Telstra, building on a foundation of production mobile & web engineering at consumer scale.',
    ],
  },
  {
    index: '02',
    org: 'Myntra',
    sub: 'Flipkart Group · Search & Filters',
    role: 'SDE Intern',
    period: 'Jan — Jun 2026',
    logo: '/Assets/myntra-logo.webp',
    points: [
      'Revamped the main filters page for millions of MAUs — replaced the legacy page with a unified scroll layout with new icons, widgets, API state handling and a long tail of edge cases. The A/B-tested revamp lifted overall filter adoption by 10.2%.',
      'Shipped production React Native and JavaScript across the search-filters surface; fixed two production bugs in the product listing page.',
      'Picked up Android performance profiling and QA test automation working alongside PMs, designers and backend engineers.',
    ],
  },
  {
    index: '03',
    org: 'Alten Calsoft Labs',
    role: 'Software Development Intern',
    period: 'Jun — Aug 2025',
    logo: '/Assets/ACL_Digital_Logo.jpg',
    points: [
      'Cut enterprise database query time from 60s to 12s (-88%) through SQL indexing and query restructuring; built data-extraction workflows in a 2-person agile team.',
    ],
  },
  {
    index: '04',
    org: 'CIE, PES University',
    role: 'Tech Research Analyst',
    period: 'Jan — May 2024',
    logo: '/Assets/CIE-logo.jpg',
    points: [
      'Fine-tuned Mistral 7B on medical datasets for healthcare NLP; deployed Gemini 2B locally via LM Studio with Open Interpreter.',
    ],
  },
]

export const FEATURED = {
  name: 'Aperture',
  tag: 'SIDE PROJECT · SHIPPED',
  year: '2026',
  stack: ['Kotlin', 'Jetpack Compose', 'CameraX', 'Camera2', 'GL'],
  body:
    'I noticed a market gap — stock camera apps hide the hardware — so I built a pro-grade Android camera for fun: full manual control, a night mode that merges eight aligned RAW frames into one clean DNG, dual-camera recording via a GL compositor, slow-motion, panorama, and histogram / zebra / focus-peaking assists. Capability-probed per device, degrades instead of crashing, signed release build.',
  image: '/Assets/aperture-ui.jpg',
  imageCaption: 'Actual app UI — not a mockup',
}

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
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Kotlin', 'C', 'SQL'] },
  { group: 'Mobile & Frontend', items: ['React Native', 'React', 'Next.js', 'Jetpack Compose', 'Tailwind CSS'] },
  { group: 'Backend & Data', items: ['Node.js', 'Express', 'Flask', 'PostgreSQL', 'MongoDB', 'REST APIs'] },
  { group: 'ML / AI', items: ['TensorFlow', 'Scikit-learn', 'LangGraph', 'NLP', 'GenAI', 'Computer Vision'] },
  { group: 'Cloud & Tooling', items: ['GCP', 'AWS', 'Docker', 'Vercel', 'CI/CD', 'Android Profiling', 'QA Automation'] },
  { group: 'Security', items: ['Network Security', 'Pen Testing', 'FAISS', 'CICFlowmeter'] },
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
