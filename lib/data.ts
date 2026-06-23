import { Project, Experience, Award, Skill } from './types';

export const PERSONAL = {
  name: 'Trần Ngọc Huy',
  nameEn: 'Tran Ngoc Huy',
  role: 'Junior Full-Stack Developer',
  tagline: 'Building interfaces that work — from Da Nang',
  email: 'tnh2045@gmail.com',
  phone: '0777 408 164',
  location: 'Hoa Khanh Bac, Lien Chieu, Da Nang, Vietnam',
  linkedin: 'https://www.linkedin.com/in/tran-huy-183ba1194',
  github: 'https://github.com/',
  website: 'https://huytran-4522.vercel.app',
  skill: [
    'ReactJS', 'Next.js', 'Vue.js', 'TypeScript',
    'Tailwind CSS', 'Bootstrap', 'Figma',
    'PHP', 'Laravel', 'Drupal', 'WordPress',
    'Python', 'Django', 'MySQL', 'REST API',
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
    company: 'TEKUP JSC',
    location: 'Da Nang, Vietnam',
    role: 'Web Front-End Developer Intern',
    period: 'May – Jul 2023',
    type: 'internship',
    bullets: [
      'Designed and built static, customer-facing websites using HTML, CSS, and JavaScript.',
      'Led a small team end-to-end from planning through delivery, coordinating tasks and visual direction.',
      'Practiced version control with GitHub and adapted to new tools under real deadlines.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Tailwind CSS', 'Figma'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-skincare',
    title: 'AI Facial Aging & Skincare Recommendation',
    subtitle: 'Graduation Capstone Project',
    period: 'Jun 2025',
    role: 'Co-developer & UI Designer',
    description:
      'An AI-powered system that analyzes facial aging severity from user photos using CNN deep learning, then recommends personalized skincare products.',
    bullets: [
      'Built the full user-facing interface: photo upload → AI analysis → severity report → product recommendations.',
      'Designed UX for presenting complex AI outputs in an accessible format: severity gauges, annotated facial overlays, product cards with ingredient highlights.',
      'Applied CNN-based image processing pipeline for facial detection, alignment, and aging classification (wrinkles, pigmentation, skin dryness).',
    ],
    tags: ['Python', 'CNN / Deep Learning', 'React', 'Image Processing', 'UI/UX'],
    highlight: true,
  },
  {
    id: 'fashion-store',
    title: 'Fashion Store Management System',
    subtitle: 'Customer & Product CRM Dashboard',
    period: 'Nov 2024',
    role: 'Full-stack Developer',
    description:
      'A modern admin dashboard for managing products, orders, and customer data at a fashion boutique — built with ReactJS + Vite frontend and Django REST API backend.',
    bullets: [
      'Designed a clean admin dashboard with role-based UI for admin vs. staff views, responsive layout, and clear visual hierarchy.',
      'Built filterable product catalog, revenue analytics charts, and inline edit forms.',
      'Implemented JWT authentication, MySQL database, and REST API with sub-500ms response times.',
    ],
    tags: ['ReactJS', 'Django REST', 'MySQL', 'Tailwind CSS', 'JWT'],
    highlight: true,
  },
  {
    id: 'bonne-sante',
    title: 'Bonne Santé',
    subtitle: 'Health Monitoring & Telemedicine App',
    period: 'Jan – May 2024',
    role: 'Developer (team of 4)',
    description:
      'A mobile-first health app that measures vital signs (heart rate, SpO2, blood pressure) via facial video using rPPG technology, with integrated telemedicine features.',
    bullets: [
      'Designed patient-facing screens: guided measurement flow, health history dashboard, and PDF health report export.',
      'Built telemedicine feature: appointment scheduling UI and video-call integration for remote doctor consultations.',
      'Applied Scrum/Agile with Jira/Trello across a 4-person team.',
    ],
    tags: ['React Native', 'rPPG / AI', 'Healthcare UX', 'REST API', 'Scrum'],
    highlight: true,
  },
  {
    id: 'e-shopper',
    title: 'E-Shopper',
    subtitle: 'E-commerce & Content Platform',
    period: 'May – Nov 2023',
    role: 'Full-stack Developer',
    description:
      'A full-featured online shopping platform with seller channel, blog/content section, admin dashboard, and complete purchase journey from browse to order confirmation.',
    bullets: [
      'Built full customer-facing UI: product listings, service cards, cart, and order confirmation emails.',
      'Integrated CKEditor-powered blog with ratings and comments.',
      'Developed multi-role admin dashboard for users, products, orders, and categories.',
    ],
    tags: ['PHP', 'Laravel', 'ReactJS', 'MySQL', 'jQuery', 'CKEditor'],
  },
  {
    id: 'food-mart',
    title: 'Food Mart Grocery Store',
    subtitle: 'E-commerce & Checkout UX',
    period: 'Sep – Nov 2023',
    role: 'Full-stack Developer',
    description:
      'A full-stack grocery e-commerce platform with QR-code payment integration (PayOS), seller management tools, and live deployment.',
    bullets: [
      'Implemented end-to-end checkout flow including QR-based payment via PayOS banking integration.',
      'Built seller-side product management: clean forms, status indicators, order tracking.',
      'Deployed website, API, and database to production server using Scrum methodology.',
    ],
    tags: ['Java', 'Spring Boot', 'ReactJS', 'MySQL', 'PayOS'],
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
    items: ['Component-based UI', 'Figma'],
  },
  {
    category: 'Frontend',
    items: ['ReactJS', 'Next.js', 'Vue.js', 'AngularJS', 'TypeScript', 'Vite', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'CMS & Site Builders',
    items: ['Drupal', 'Twig', 'WordPress', 'CKEditor'],
  },
  {
    category: 'Backend',
    items: ['PHP (Laravel, Symfony, Yii)', 'Java (Spring Boot)', 'Python (Django / DRF)', 'NodeJS (ExpressJS)', '.NET (ASP.NET)', 'RESTful APIs', 'Web Services API', 'JWT Auth'],
  },
  {
    category: 'Database & Tools',
    items: ['MySQL', 'MariaDB', 'MongoDB', 'Git / GitHub / GitLab', 'Docker (basic)', 'Trello'],
  },
  {
    category: 'Workflow',
    items: ['Scrum / Agile', 'Trello', 'Jira', 'Code Review', 'CI/CD (basic)'],
  },
  {
    category: 'DevOps',
    items: ['Linux'],
  },
];
