import { Project, Experience, Award, Skill, DrupalProject, Certification, Language, Volunteering } from './types';

export const PERSONAL = {
  name: 'Trần Ngọc Huy',
  nameEn: 'Tran Ngoc Huy',
  role: 'Information Technology Engineer',
  tagline: 'Full-Stack Web/App Developer & Systems Engineer — from Da Nang',
  email: 'tnh2045@gmail.com',
  phone: '+84 777 408 164',
  dob: '04/05/2002',
  location: 'Hoa Khanh, Da Nang, Vietnam',
  linkedin: 'https://www.linkedin.com/in/tran-huy-183ba1194/',
  github: 'https://github.com/tnh4522',
  website: 'https://huytran-4522.vercel.app/',
  skill: [
    'PHP', 'JavaScript/TypeScript', 'ReactJS', 'Next.js',
    'Vue.js', 'AngularJS', 'Yii2', 'Symfony',
    'Laravel', 'Drupal', 'WordPress', 'MySQL',
    'REST API', 'Linux', 'Docker', 'TCP/IP'
  ],
  bio: `Information Technology Engineer — Da Nang University of Science and Technology (The University of Da Nang) with 2+ years of hands-on experience developing and operating Web/App systems (ERP, CRM, E-commerce). Proven capability in performance optimization and agile troubleshooting in live Production environments. Possesses a solid foundation in Computer Networking (LAN/WAN, TCP/IP, VLAN, DNS, DHCP), Windows/Linux administration, troubleshooting, Information Security, and Database Management. Ready to take on complex technical challenges and proactively seek optimal solutions for businesses.`,
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Lundi Matin Groupe (France)',
    location: 'Remote from Da Nang',
    role: 'Full-Stack Developer',
    period: '03/2024 – 10/2026',
    type: 'full-time',
    logo: '/images/lundi-matin-logo.svg',
    bullets: [
      'Developed and maintained enterprise ERP, CRM, and e-commerce systems for clients in France.',
      'Applied core technologies including PHP, JavaScript, AngularJS, Vue.js, Twig, HTML, CSS, and MySQL across Yii2, Symfony, WordPress, and Drupal frameworks.',
      'Built and integrated REST APIs, cron jobs, ESB2, connectors, MCP, and webhooks to connect internal systems with external third-party services.',
      'Contributed to projects and third-party platform integrations including Viva payment, Riashop, Yuto, EBP SaaS, Wimoov, Station-one, Axialease, Cogasa, Uppler, and Izberg.',
      'Identified and resolved production bugs in legacy codebases, ensuring stable and reliable system operations.',
      'Worked with GitHub, GitLab, and CI/CD pipelines under the Scrum process; participated in code reviews and pre-release QA with weekly progress reports.',
    ],
    techStack: ['PHP', 'JavaScript', 'AngularJS', 'Vue.js', 'Twig', 'HTML', 'CSS', 'MySQL', 'Yii2', 'Symfony', 'WordPress', 'Drupal', 'REST API', 'Cron', 'ESB2', 'Connector', 'MCP', 'Webhook', 'GitHub', 'GitLab', 'CI/CD', 'Scrum'],
  },
  {
    company: 'Tekup JSC',
    location: 'Da Nang, Vietnam',
    role: 'Web Front-End',
    period: '05/2023 – 07/2023',
    type: 'internship',
    logo: '/images/logo-tekup.png',
    bullets: [
      'Built responsive customer-facing websites using HTML, CSS, and JavaScript.',
      'Trained in ReactJS, jQuery, Tailwind CSS, and Bootstrap.',
      'Collaborated in a small team to plan, divide tasks, and deliver products on schedule.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'jQuery', 'Tailwind CSS', 'Bootstrap'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'foodmart-ai',
    title: 'FoodMart – AI-Integrated E-Commerce Platform',
    subtitle: 'Intelligent Grocery Shopping with Gemini Vision & Resilience Architecture',
    period: '2023',
    role: 'Full-stack Developer',
    description:
      'Feature-rich SPA e-commerce platform powered by Google Gemini 1.5 Flash Vision for AI recipe generation, featuring an enterprise-grade Circuit Breaker resilience layer for zero-downtime UX.',
    bullets: [
      'Built a React 18 SPA covering the complete shopping flow: product catalog, cart, checkout & payment, wishlist, and ratings/reviews.',
      'Integrated Gemini 1.5 Flash (Vision): upload ingredient/dish photos for AI recognition and recipe suggestions with ingredient checklists.',
      'Designed an API Resilience layer using the Circuit Breaker pattern (Closed/Open/Half-Open) combined with an Offline Mock Store to keep the system running during backend outages.',
      'Implemented Admin/Seller/Customer authorization via Protected Routes; automated order confirmation emails (EmailJS); wrote unit tests with Jest & React Testing Library.',
    ],
    tags: ['React 18', 'Gemini AI', 'React Router v6', 'Axios', 'Ant Design', 'Circuit Breaker', 'Jest', 'EmailJS'],
    highlight: true,
    github: 'https://github.com/tnh4522/e-commerce',
    demo: 'https://food-grocery.netlify.app/',
  },
  {
    id: 'ashion-vendor',
    title: 'Ashion Vendor – E-Commerce Seller Management Platform',
    subtitle: 'E-Commerce Vendor Admin with Visual AI & Financial Analytics',
    period: '2023',
    role: 'Full-stack Developer',
    description:
      'Comprehensive vendor administration platform featuring role-based access control, AI-assisted visual search, dynamic financial reporting, and PDF invoice generation.',
    bullets: [
      'Developed an admin dashboard to manage products, orders, customers, inventory/warehousing, and finances.',
      'Implemented Role-Based Access Control (RBAC) across individual features and protected pages (ProtectedRoute).',
      'Integrated AI features: Visual Search by image and automated product image generation.',
      'Built a financial dashboard with Chart.js; supported instant Excel/PDF report exports and invoice printing.',
    ],
    tags: ['React 18', 'Vite', 'Chart.js', 'jsPDF', 'EmailJS', 'RBAC', 'Visual Search AI'],
    highlight: true,
    github: 'https://github.com/tnh4522/ashion-vendor',
    demo: 'https://tendancia-admin.netlify.app/',
  },
  {
    id: 'mystictarot-ai',
    title: 'MysticTarot AI – Interactive Tarot Reading & AI Consultation',
    subtitle: 'AI Psychological Insights with 78 Cards & Gemini Reader',
    period: '2024',
    role: 'Full-stack Developer',
    description:
      'Interactive Tarot reading and psychological counseling web app powered by Google Gemini AI, offering 78-card interpretations and conversational AI readings.',
    bullets: [
      'Built an interactive Tarot web app featuring all 78 cards (upright/reversed) and multiple spread layouts (1-Card, 3-Card, Celtic Cross…).',
      'Integrated Gemini AI to interpret readings across multiple tones (Empathetic, Direct, Mystical) with follow-up conversational chat with the AI Reader.',
      'Added a comprehensive Tarot encyclopedia and reading history persistence using Local Storage.',
    ],
    tags: ['Next.js', 'React 19', 'TypeScript', 'Gemini API'],
    highlight: true,
    github: 'https://github.com/tnh4522/tarrot-web',
    demo: 'https://tarrot-daily.vercel.app/',
  },
  {
    id: 'network-quest',
    title: 'Network Quest – Gamified Networking Practice Platform',
    subtitle: 'Interactive Networking & CCNA Training Hub with Firewall Minigame',
    period: '2024',
    role: 'Full-stack Developer',
    description:
      'Gamified web app for practicing Computer Networking (CCNA, Firewall/Packet filtering) through interactive quizzes and firewall simulation minigames.',
    bullets: [
      'Built a Computer Networking practice web app (CCNA, Firewall/Packet filtering) featuring timed quizzes, progress bars, and detailed answer explanations.',
      'Developed an interactive minigame simulating firewall security rules (Firewall Simulation).',
      'Managed state and practice history with Zustand (LocalStorage); visualized score analytics with Recharts; wrote unit tests with Vitest.',
    ],
    tags: ['Recharts', 'Next.js 16', 'React 19', 'TypeScript', 'Zustand', 'Vitest'],
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
    prize: '1st Prize 🏆',
    tier: 'gold',
  },
  {
    title: 'Innovative Technology Entrepreneurship Competition',
    issuer: 'The University of Da Nang',
    date: '10/2024',
    prize: '2nd Prize',
    tier: 'silver',
  },
  {
    title: 'BKDN Techshow 2023–2024',
    issuer: 'Da Nang University of Science and Technology',
    date: '01/2024',
    prize: '3rd Prize, Technology Award',
    tier: 'bronze',
  },
  {
    title: 'Smart Campus 2023',
    issuer: 'DISC International Institute – UD',
    date: '12/2023',
    prize: '2nd Prize & Special Award',
    tier: 'silver',
  },
  {
    title: 'Startup Innovation Ideas — Light Up Your Creativity 2023',
    issuer: 'Da Nang Youth Union',
    date: '12/2023',
    prize: '2nd Prize',
    tier: 'silver',
  },
  {
    title: 'Scientific Research Student Conference — FAST Tech Show 2023',
    issuer: 'Da Nang University of Science and Technology',
    date: '11/2023',
    prize: '2nd Prize',
    tier: 'silver',
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Web/App Development',
    items: ['PHP', 'Java', 'JavaScript/TypeScript', 'AngularJS', 'Vue.js', 'C#', 'C/C++', 'ReactJS', 'Next.js', 'jQuery', 'HTML5/CSS3', 'Twig', 'Python'],
  },
  {
    category: 'Frameworks & CMS',
    items: ['Yii2', 'Symfony', 'Laravel', 'Drupal', 'WordPress', 'Django', 'Spring Boot', 'React', 'Next'],
  },
  {
    category: 'System Integration',
    items: ['REST API', 'Webhook', 'Cron', 'ESB2', 'Connector', 'MCP'],
  },
  {
    category: 'Systems & Databases',
    items: ['Linux', 'MySQL', 'MariaDB', 'Docker'],
  },
  {
    category: 'Tools & Workflows',
    items: ['Git', 'GitHub', 'GitLab', 'CI/CD', 'Jira', 'Agile/Scrum', 'Code Review', 'Jest/Vitest'],
  },
  {
    category: 'Computer Networking',
    items: ['LAN/WAN', 'TCP/IP', 'Subnetting', 'VLAN', 'Trunk', 'DNS', 'DHCP'],
  },
  {
    category: 'OS & Troubleshooting',
    items: ['Windows', 'Linux', 'IP/Network Configuration', 'Account & Permission Management', 'ipconfig', 'ping', 'tracert', 'nslookup', 'System Monitoring', 'User Support (Helpdesk)'],
  },
  {
    category: 'Infrastructure Tools',
    items: ['Wireshark', 'Cisco Packet Tracer', 'VMware'],
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
    name: 'TOEIC – Test of English for International Communication',
    issuer: 'IIG Vietnam',
    date: '01/2025 – 01/2027',
    details: ['Score: 510/990'],
  },
  {
    id: 'cert-delf-b1',
    name: 'DELF B1 – French Language Diploma',
    issuer: 'France Éducation international (French Ministry of Education)',
    date: '10/2022',
    details: ['Level B1 according to the Common European Framework of Reference for Languages (CEFR)'],
  },
];

export const VOLUNTEERING: Volunteering[] = [
  {
    id: 'vol-summer-2022',
    organization: 'The University of Da Nang Student Summer Volunteer Campaign 2022',
    role: 'Volunteer',
    date: '07/2022',
    location: 'Da Nang, Vietnam',
    summary: 'Actively participated and contributed to the campaign; awarded a Certificate of Recognition by the Youth Union of The University of Da Nang (07/2022).',
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
