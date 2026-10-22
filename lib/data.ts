import { Project, Experience, Award, Skill, DrupalProject } from './types';

export const PERSONAL = {
  name: 'Trần Ngọc Huy',
  nameEn: 'Tran Ngoc Huy',
  role: 'Junior Full-Stack Developer',
  tagline: 'Building interfaces that work — from Da Nang',
  email: 'tnh2045@gmail.com',
  phone: '0777 408 164',
  location: 'Hoa Khanh Bac, Lien Chieu, Da Nang, Vietnam',
  linkedin: 'https://www.linkedin.com/in/tran-huy-183ba1194',
  github: 'https://github.com/tnh4522',
  website: 'https://huytran-4522.vercel.app',
  skill: [
    'ReactJS', 'Next.js', 'Vue.js', 'TypeScript',
    'Tailwind CSS', 'Bootstrap', 'Figma',
    'PHP', 'Laravel', 'Drupal', 'WordPress',
    'Python', 'Django', 'MySQL', 'REST API',
    'NodeJS', 'ASP.NET', 'Java'
  ],
  bio: `Web developer with 2+ years of hands-on experience building and shipping customer-facing e-commerce interfaces, currently working full-time on a live retail platform at Lundi Matin Groupe (France). I combine solid frontend skills (HTML5, CSS3, JavaScript, jQuery, ReactJS) with a product-first mindset — thinking from the end user's perspective to remove friction, simplify flows, and write copy that drives action. Comfortable customizing CMS-driven pages beyond what default builders offer, and experienced working iteratively with real content on production websites. I care about clean interfaces, reliable code, and building things that actually get used.`,
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Lundi Matin Groupe',
    location: 'France (Remote)',
    role: 'Full-stack Developer',
    period: '2024 – Present',
    type: 'full-time',
    logo: '/images/lundi-matin-logo.svg',
    bullets: [
      'Work on the customer-facing e-commerce platform used by online and brick-and-mortar retail clients across France; directly responsible for improvements to shopping UI and user flows.',
      'Collaborate with Product Owners in a French-language environment to translate store-operations and UX requirements into polished front-end implementations.',
      'Contribute custom HTML/CSS/JS overrides to extend the platform\'s default builder capabilities — nav bar behaviour, cart flow, service block layouts, and filtering components.',
      'Participate in structured code review and QA before each release, maintaining a stable and visually consistent user experience.',
      'Integrated LiteLLM/AI API features and debugged production PHP/JavaScript issues in a legacy Prototype.js codebase.',
    ],
    techStack: ['Drupal', 'Twig', 'WordPress', 'PHP', 'Laravel', 'Symfony', 'Yii', 'JavaScript', 'jQuery', 'Vue.js', 'AngularJS', 'HTML', 'Tailwind CSS', 'Bootstrap', 'MySQL', 'Figma', 'REST API', 'ERP', 'CRM'],
  },
  {
    company: 'Tekup JSC',
    location: 'Da Nang, Vietnam',
    role: 'Web Front-End Developer Intern',
    period: 'May – Jul 2023',
    type: 'internship',
    logo: '/images/logo-tekup.png',
    bullets: [
      'Built responsive customer-facing websites using HTML, CSS, JavaScript, jQuery, Tailwind CSS, and Bootstrap.',
      'Led a small team end-to-end from planning through delivery, coordinating tasks and visual direction.',
      'Adapted quickly to new frontend tools and frameworks under real production deadlines.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Tailwind CSS', 'Figma'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'foodmart-ai',
    title: 'FOODMART – AI E-Commerce Platform',
    subtitle: 'Intelligent Grocery Shopping with Gemini Vision & Resilience Architecture',
    period: '2024',
    role: 'Frontend Developer',
    description:
      'Feature-rich SPA e-commerce platform powered by Google Gemini 1.5 Flash Vision for AI recipe generation, featuring an enterprise-grade Circuit Breaker resilience layer for zero-downtime UX.',
    bullets: [
      'Engineered responsive SPA architecture with React 18, implementing complete e-commerce flows: product catalog, dynamic cart, checkout, wishlist, and interactive reviews.',
      'Integrated Google Gemini 1.5 Flash API (Multimodal Vision) allowing users to upload photo ingredients/dishes for AI recognition and automated recipe generation with ingredient checklists.',
      'Architected an API Resilience Layer implementing Circuit Breaker patterns (Closed/Open/Half-Open) with an Offline Mock Store to ensure uninterrupted shopping during backend failures.',
      'Implemented multi-tier Role-Based Access Control (Admin / Seller / Customer) via strict Protected Routes; integrated EmailJS for automated order confirmations.',
      'Authored unit tests for exception handling and Circuit Breaker logic using Jest & React Testing Library.',
    ],
    tags: ['React 18', 'Gemini AI', 'Ant Design', 'Circuit Breaker', 'Jest', 'Bootstrap 5', 'Material-UI', 'EmailJS'],
    highlight: true,
    github: 'https://github.com/tnh4522/e-commerce',
    demo: 'https://food-grocery.netlify.app/',
  },
  {
    id: 'ashion-vendor',
    title: 'Ashion Vendor – Management Platform',
    subtitle: 'E-Commerce Vendor Admin with Visual AI & Financial Analytics',
    period: '2024',
    role: 'Frontend Developer',
    description:
      'Comprehensive vendor administration platform featuring role-based access control, AI-assisted visual search, dynamic financial reporting, and PDF invoice generation.',
    bullets: [
      'Developed administrative dashboard managing products, customer orders, inventory stock, user accounts, and financial performance.',
      'Implemented granular role-based access control (RBAC) across administrative modules and route protections with ProtectedRoute.',
      'Integrated AI capabilities: Visual Search for image-based product discovery and automated product image generation.',
      'Constructed interactive financial reporting charts with Chart.js, supporting instant Excel/PDF export and order invoice printing via jsPDF.',
    ],
    tags: ['React 18', 'Vite', 'Ant Design 5', 'Chart.js', 'AI Visual Search', 'RBAC', 'jsPDF', 'EmailJS'],
    highlight: true,
    github: 'https://github.com/tnh4522/ashion-vendor',
    demo: 'https://tendancia-admin.netlify.app/',
  },
  {
    id: 'mystictarot-ai',
    title: 'MysticTarot AI – Interactive Tarot & Consultation',
    subtitle: 'AI Psychological Insights with 78 Cards & Gemini Reader',
    period: '2024 – 2025',
    role: 'Full-stack Developer',
    description:
      'Interactive Tarot reading and psychological counseling web app powered by Google Gemini AI, offering 78-card interpretations and conversational AI readings.',
    bullets: [
      'Built interactive Tarot web app supporting 78 upright/reversed cards with multiple spread layouts (Single Card, 3-Card Timeline, Celtic Cross).',
      'Integrated Google Gemini API (@google/genai) to interpret cards and synthesize personalized advice tailored across multiple reader personas (Empathetic, Direct, Mystical).',
      'Engineered interactive conversational chat reader allowing users to hold follow-up discussions directly with the AI Reader to unpack reading nuances.',
      'Implemented a comprehensive Tarot encyclopedia and reading history management system with persistent local storage.',
    ],
    tags: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Google Gemini API', 'Generative AI'],
    highlight: true,
    github: 'https://github.com/tnh4522/tarrot-web',
    demo: 'https://tarrot-daily.vercel.app/',
  },
  {
    id: 'network-quest',
    title: 'Network Quest – Gamified Learning Platform',
    subtitle: 'Interactive Networking & CCNA Training Hub with Firewall Minigame',
    period: '2025',
    role: 'Frontend / Full-stack Developer',
    description:
      'Gamified web app supporting CS students and engineers in mastering Computer Networking, CCNA, and firewall concepts through dynamic quizzes and packet filtering minigames.',
    bullets: [
      'Crafted dynamic quiz UI equipped with countdown timers, progress bars, question navigators, and comprehensive explanation breakdowns.',
      'Built interactive gamified minigames simulating firewall security rules and packet filtering mechanics.',
      'Designed robust state management and session persistence with Zustand (LocalStorage-backed quiz progress and streak tracking).',
      'Visualized learning progression and score analytics using Recharts; implemented unit tests for scoring logic and state handling with Vitest.',
    ],
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Zustand', 'Recharts', 'Vitest'],
    highlight: false,
    github: 'https://github.com/tnh4522/network-quest',
    demo: 'https://network-quest-omega.vercel.app/',
  },
];

export const AWARDS: Award[] = [
  {
    title: 'Innovative Technology Entrepreneurship Competition',
    issuer: 'The University of Da Nang',
    date: 'Oct 2024',
    prize: '2nd Prize',
    tier: 'silver',
  },
  {
    title: 'BKDN Techshow — Technology Exhibition 2023-2024',
    issuer: 'Da Nang University of Science and Technology',
    date: 'Jan 2024',
    prize: '3rd Prize, Technology Award',
    tier: 'bronze',
  },
  {
    title: 'Smart Campus 2023',
    issuer: 'Danang International Institute of Technology',
    date: 'Dec 2023',
    prize: '2nd Prize & Special Recognition Award',
    tier: 'silver',
  },
  {
    title: 'Startup Innovation Ideas — Light Up Your Creativity 2023',
    issuer: 'Da Nang Youth Union',
    date: 'Dec 2023',
    prize: '2nd Prize',
    tier: 'silver',
  },
  {
    title: 'Scientific Research Student Conference — FAST Tech Show 2023',
    issuer: 'Da Nang University of Science and Technology',
    date: 'Nov 2023',
    prize: '2nd Prize',
    tier: 'silver',
  },
  {
    title: 'DUT Hackathon — FASTER Team',
    issuer: 'KMS Technology',
    date: 'Feb 2023',
    prize: '1st Prize 🏆',
    tier: 'gold',
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'UI / UX & Design',
    items: ['Component-based UI', 'Figma', 'UX Design', 'User Flows'],
  },
  {
    category: 'Frontend',
    items: ['ReactJS', 'Next.js', 'Vue.js', 'AngularJS', 'TypeScript', 'Vite', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Tailwind CSS', 'Bootstrap', 'Twig'],
  },
  {
    category: 'CMS & Site Builders',
    items: ['Drupal', 'WordPress'],
  },
  {
    category: 'Backend',
    items: ['PHP (Laravel, Symfony, Yii)', 'Java (Spring Boot)', 'Python (Django / DRF)', 'NodeJS (ExpressJS)', '.NET (ASP.NET)', 'RESTful APIs', 'Web Services API', 'JWT Auth'],
  },
  {
    category: 'Database & Tools',
    items: ['MySQL', 'MariaDB', 'MongoDB', 'Git / GitHub / GitLab', 'Docker', 'Trello', 'Jira'],
  },
  {
    category: 'Workflow',
    items: ['Agile', 'Scrum', 'Code Review', 'CI/CD'],
  },
  {
    category: 'DevOps',
    items: ['Linux'],
  },
];

export const DRUPAL_PROJECTS: DrupalProject[] = [
  {
    id: '2m-distribution',
    title: '2M Distribution (La Boutique Électrique)',
    description: 'E-commerce platform for professional electrical equipment — featuring product catalogs with advanced filtering, promotional banners, PayPal integration, and customer reviews.',
    image: '/images/drupal/2m-distribution.png',
    category: 'E-commerce',
    tags: ['Drupal', 'E-commerce', 'Twig', 'PHP'],
  },
  {
    id: 'cuoq-forest',
    title: 'Cuoq Forest Diffusion',
    description: 'Corporate website and online store for forestry equipment — showcasing heavy machinery brands with product categories, multilingual support, and media galleries.',
    image: '/images/drupal/cuoq-forest.png',
    category: 'Industrial',
    tags: ['Drupal', 'Corporate', 'Twig', 'PHP'],
  },
  {
    id: 'cyberpieces',
    title: 'Cyberpièces Électroménager',
    description: 'Spare parts marketplace for household appliances — built with category-driven navigation, live chat support, service blocks, and customer review integration (9.6/10 rating).',
    image: '/images/drupal/cyberpieces.png',
    category: 'E-commerce',
    tags: ['Drupal', 'E-commerce', 'Twig', 'PHP'],
  },
  {
    id: 'equishop',
    title: 'Sellerie Equishop',
    description: 'Online equestrian boutique for horse and rider gear — featuring hero sliders, category-driven product showcase, promotions section, and customer review widgets.',
    image: '/images/drupal/equishop.png',
    category: 'E-commerce',
    tags: ['Drupal', 'E-commerce', 'Twig', 'PHP'],
  },
  {
    id: 'goood-petfood',
    title: 'Goood Petfood',
    description: 'Premium pet food e-commerce — clean product presentation with lifestyle imagery, delivery promotions, and product range categorization (croquettes, pâtées, treats).',
    image: '/images/drupal/goood-petfood.png',
    category: 'E-commerce',
    tags: ['Drupal', 'E-commerce', 'Twig', 'PHP'],
  },
  {
    id: 'happydogboutique',
    title: 'Happy Dog & Happy Cat Boutique',
    description: 'Official online store for Happy Dog & Happy Cat brands — featuring product carousels, hero banners, contact integration, and a polished brand identity.',
    image: '/images/drupal/happydogboutique.png',
    category: 'E-commerce',
    tags: ['Drupal', 'E-commerce', 'Twig', 'PHP'],
  },
  {
    id: 'idfmateriaux',
    title: 'ID France Matériaux',
    description: 'Building materials supplier platform for professionals and individuals — with product categories by trade, secure payment badges, and promotional blocks.',
    image: '/images/drupal/idfmateriaux.png',
    category: 'E-commerce',
    tags: ['Drupal', 'E-commerce', 'Twig', 'PHP'],
  },
  {
    id: 'webmedical',
    title: 'Webmedical',
    description: 'Specialized e-commerce for ambulance staff uniforms and medical equipment — featuring branded clothing, product filters, and a service-oriented layout.',
    image: '/images/drupal/webmedical.png',
    category: 'E-commerce',
    tags: ['Drupal', 'E-commerce', 'Twig', 'PHP'],
  },
];
