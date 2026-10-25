import { Project, Experience, Award, Skill, DrupalProject, Certification, Language, Volunteering } from './types';

export const PERSONAL = {
  name: 'Trần Ngọc Huy',
  nameEn: 'Tran Ngoc Huy',
  role: 'Full-stack Developer',
  tagline: 'Building scalable Web/App systems (ERP, CRM, CHR, E-commerce) — from Da Nang',
  email: 'tnh2045@gmail.com',
  phone: '+84 777 408 164',
  dob: '04/05/2002',
  location: 'Hoa Khanh, Da Nang, Vietnam',
  linkedin: 'https://www.linkedin.com/in/tran-huy-183ba1194/',
  github: 'https://github.com/tnh4522',
  website: 'https://huytran-4522.vercel.app/',
  skill: [
    'PHP', 'JavaScript', 'TypeScript', 'Laravel',
    'ReactJS', 'Next.js', 'Vue.js', 'AngularJS',
    'Spring Boot', 'Symfony', 'Yii2', 'Drupal',
    'WordPress', 'MySQL', 'REST API', 'Docker'
  ],
  bio: `Full-stack Developer, graduate of Da Nang University of Science and Technology, with 2+ years of experience developing and building Web/App systems (ERP, CRM, CHR, E-commerce). Proficient in PHP and JavaScript with the Laravel, React and Spring Boot frameworks, and solid knowledge of MySQL. Experienced in designing REST APIs, webhooks, connectors, esb2 events and MCP, and in working with content management systems (CMS) such as WordPress and Drupal.`,
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Lundi Matin Groupe (France)',
    location: 'Remote from Da Nang',
    role: 'Full-stack Developer',
    period: '03/2024 – 10/2026',
    type: 'full-time',
    logo: '/images/lundi-matin-logo.svg',
    bullets: [
      'Built and developed features for ERP, CRM and e-commerce systems.',
      'Technologies: PHP, JavaScript, AngularJS, Vue.js, MySQL, Twig, HTML/CSS;',
      'Worked with the Laravel, Yii2, Symfony, WordPress and Drupal frameworks.',
      'Designed, built and integrated RESTful APIs, Cron Jobs, Esb2 Events, Connectors, AI Integration, MCP and Webhooks to connect the system with external services.',
      'Integrated with multiple platforms/partners: Shopify, Magento, Viva Payment, Riashop, Yuto, SaaS EBP, Wimoov, Station-one, Axialease, Cogasa, Uppler, Izberg.',
      'Worked with GitHub, GitLab and CI/CD in a Scrum Agile process; took part in code reviews and QA before each release; held weekly reports and discussions.',
    ],
    techStack: ['PHP', 'JavaScript', 'Laravel', 'Yii2', 'Symfony', 'AngularJS', 'Vue.js', 'WordPress', 'Drupal', 'MySQL', 'Twig', 'HTML/CSS', 'REST API', 'Cron', 'ESB2', 'Connector', 'AI Integration', 'MCP', 'Webhook', 'GitHub', 'GitLab', 'CI/CD', 'Scrum'],
  },
  {
    company: 'Tekup JSC',
    location: 'Da Nang, Vietnam',
    role: 'Web Front-end',
    period: '05/2023 – 07/2023',
    type: 'internship',
    logo: '/images/logo-tekup.png',
    bullets: [
      'Built responsive websites for clients using HTML, CSS and JavaScript.',
      'Trained in ReactJS, jQuery, Tailwind CSS and Bootstrap.',
      'Collaborated in a small team to plan, divide tasks and deliver products on time.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'jQuery', 'Tailwind CSS', 'Bootstrap'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'foodmart-ai',
    title: 'FoodMart – AI-integrated E-commerce Platform',
    subtitle: 'Intelligent Grocery Shopping with Gemini Vision & Role-Based Access',
    period: '2023',
    role: 'Full-stack Developer',
    description:
      'React 18 SPA e-commerce platform covering the complete shopping journey with Gemini 1.5 Flash Vision recipe suggestions and multi-role access control.',
    bullets: [
      'Built a React 18 SPA covering the entire shopping flow: catalog, cart, checkout & payment, wishlist, reviews/comments.',
      'Integrated Gemini 1.5 Flash (Vision): users upload a photo of ingredients or a dish and the AI recognizes it and suggests recipes with ingredient lists.',
      'Implemented Admin/Seller/Customer role-based access with Protected Routes; automatic order confirmation emails (EmailJS); wrote unit tests with Jest & React Testing Library.',
    ],
    tags: ['React 18', 'Gemini AI', 'React Router v6', 'Axios', 'Ant Design'],
    highlight: true,
    github: 'https://github.com/tnh4522/e-commerce',
    demo: 'https://food-grocery.netlify.app/',
  },
  {
    id: 'ashion-vendor',
    title: 'Ashion Vendor – E-commerce Seller Management Platform',
    subtitle: 'E-Commerce Vendor Admin with Visual AI & Financial Analytics',
    period: '2023',
    role: 'Full-stack Developer',
    description:
      'Comprehensive vendor administration platform featuring role-based access control, AI-assisted visual search, dynamic financial reporting, and PDF invoice generation.',
    bullets: [
      'Developed an admin interface for managing products, orders, customers, inventory and finances.',
      'Implemented role-based access control (RBAC) per feature and protected pages (ProtectedRoute).',
      'Integrated AI: image-based search (Visual Search) and automatic product image generation.',
      'Built a financial dashboard with Chart.js; Excel/PDF report export and instant invoice printing.',
    ],
    tags: ['React 18', 'Vite', 'Chart.js', 'jsPDF', 'EmailJS'],
    highlight: true,
    github: 'https://github.com/tnh4522/ashion-vendor',
    demo: 'https://tendancia-admin.netlify.app/',
  },
  {
    id: 'mystictarot-ai',
    title: 'MysticTarot AI – Interactive Tarot Reading & AI Consultation App',
    subtitle: 'AI Psychological Insights with 78 Cards & Gemini Reader',
    period: '2024',
    role: 'Full-stack Developer',
    description:
      'Interactive Tarot reading and consultation web app powered by Google Gemini AI, offering 78-card interpretations and conversational AI readings.',
    bullets: [
      'Built an interactive Tarot web app with the full 78-card deck (upright/reversed) and multiple spreads (1-card, 3-card, Celtic Cross…).',
      'Integrated Gemini AI to interpret readings in several tones (Empathetic, Direct, Mystical) with follow-up chat with an AI Reader.',
      'Added a Tarot encyclopedia and saved reading history with Local Storage.',
    ],
    tags: ['Next.js', 'React 19', 'TypeScript', 'Gemini API'],
    highlight: true,
    github: 'https://github.com/tnh4522/tarrot-web',
    demo: 'https://tarrot-daily.vercel.app/',
  },
  {
    id: 'network-quest',
    title: 'Network Quest – Gamified Networking Study Platform',
    subtitle: 'Interactive Networking & CCNA Training Hub with Firewall Minigame',
    period: '2024',
    role: 'Full-stack Developer',
    description:
      'Gamified web app for reviewing computer networking (CCNA, Firewall/Packet filtering) through timed quizzes and firewall simulation minigames.',
    bullets: [
      'Web app for reviewing computer networking (CCNA, Firewall/Packet filtering) through timed quizzes with a progress bar and answer explanations.',
      'Built a firewall rule mini-game (Firewall Simulation).',
      'Managed state and practice history with Zustand (LocalStorage); visualized scores with Recharts; wrote unit tests with Vitest.',
    ],
    tags: ['Recharts', 'Next.js 16', 'React 19', 'TypeScript'],
    highlight: false,
    github: 'https://github.com/tnh4522/network-quest',
    demo: 'https://network-quest-omega.vercel.app/',
  },
];

export const AWARDS: Award[] = [
  {
    title: 'DUT Hackathon',
    issuer: 'KMS Technology',
    date: '02/2023',
    prize: 'First Prize 🏆',
    tier: 'gold',
  },
  {
    title: 'Creative Technology Startup Competition',
    issuer: 'The University of Danang',
    date: '10/2024',
    prize: 'Second Prize',
    tier: 'silver',
  },
  {
    title: 'BKDN Techshow 2023–2024',
    issuer: 'Da Nang University of Science and Technology',
    date: '01/2024',
    prize: 'Third Prize, Technology Award',
    tier: 'bronze',
  },
  {
    title: 'Smart Campus 2023',
    issuer: 'DISC International School – The University of Danang',
    date: '12/2023',
    prize: 'Second Prize & Special Prize',
    tier: 'silver',
  },
  {
    title: 'Startup Innovation Ideas — Light Up Your Creativity 2023',
    issuer: 'Da Nang Youth Union',
    date: '12/2023',
    prize: 'Second Prize',
    tier: 'silver',
  },
  {
    title: 'Scientific Research Student Conference — FAST Tech Show 2023',
    issuer: 'Da Nang University of Science and Technology',
    date: '11/2023',
    prize: 'Second Prize',
    tier: 'silver',
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['C/C++', 'C#', 'Java', 'PHP', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Front-end',
    items: ['ReactJS', 'Next.js', 'Vue.js', 'AngularJS', 'jQuery', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap', 'Twig', 'Ant Design'],
  },
  {
    category: 'Back-end',
    items: ['Laravel', 'Symfony', 'Yii2', 'Spring Boot', 'WordPress', 'Drupal', 'Django', 'Node.js', '.NET / ASP.NET Core'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MariaDB', 'MongoDB'],
  },
  {
    category: 'System Integration',
    items: ['REST API', 'Webhook', 'Cron', 'ESB2', 'Connector', 'MCP'],
  },
  {
    category: 'Tools',
    items: ['GitHub', 'GitLab', 'Docker', 'DDEV'],
  },
  {
    category: 'Methodology',
    items: ['Agile/Scrum', 'CI/CD', 'Code Review'],
  },
  {
    category: 'AI Agents',
    items: ['Claude Code', 'Codex', 'Antigravity'],
  },
];

export const LANGUAGES: Language[] = [
  {
    name: 'English',
    level: 'Advanced',
    certificate: 'TOEIC 510/990',
  },
  {
    name: 'French',
    level: 'Basic',
    certificate: 'DELF B1',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-toeic',
    name: 'TOEIC – English Proficiency Certificate',
    issuer: 'IIG Vietnam',
    date: '01/2025 - 01/2027',
    details: ['TOEIC (Test of English for International Communication)', 'Score: 510/990'],
  },
  {
    id: 'cert-delf-b1',
    name: 'DELF B1 – French Language Certificate',
    issuer: 'France Éducation international (French Ministry of Education)',
    date: '10/2022',
    details: ['B1 level of the Common European Framework of Reference (CEFR)'],
  },
];

export const VOLUNTEERING: Volunteering[] = [
  {
    id: 'vol-summer-2022',
    organization: "University of Danang Students' Summer Volunteer Campaign 2022",
    role: 'Volunteer',
    date: '07/2022',
    location: 'Da Nang, Vietnam',
    summary: 'Actively participated and contributed to the campaign; awarded a certificate by the University of Danang Youth Union (07/2022).',
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
