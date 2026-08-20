// ============================================================================
// Central content file for M K Rathish (VMK) portfolio.
// Every fact here is sourced from the user's supplied resume
// (MK_Rathish_Startup_Modern_v2.docx) or explicit answers given during
// scoping. Nothing here is invented — if information was not supplied,
// it is intentionally left out rather than fabricated.
// ============================================================================

export const personal = {
  name: 'M K Rathish',
  shortName: 'VMK',
  tagline: 'Founder. Developer. Creative Technologist.',
  supportingText:
    'I build digital products, experiment with emerging technologies, and turn ideas into practical solutions.',
  roles: [
    'Founder',
    'Product Builder',
    'Front-End Developer',
    'Software Developer',
    'AI/ML Enthusiast',
    'Creative Technologist',
  ],
  location: 'India',
  email: 'mkrathish221311@gmail.com',
  phone: '+91 8778175453',
  education: {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Hindusthan College of Engineering and Technology (HICET), Coimbatore',
    period: '2024 – 2028',
    year: 'III Year CSE',
    graduation: '2028',
    cgpa: '9.02',
    cgpaScale: '10',
  },
  about:
    'I am a Computer Science Engineering student interested in building technology that solves real-world problems.',
  interests: [
    'Software development',
    'Product development',
    'Front-end development',
    'Flutter',
    'Backend/API development',
    'AI/ML',
    'Entrepreneurship',
    'Creative media',
    'Video editing',
    'Visual design',
  ],
}

export const socials = {
  github: 'https://github.com/vmkrathish',
  linkedin: 'https://www.linkedin.com/in/mk-rathish/',
  instagram: 'https://www.instagram.com/vmk_rathish/',
  email: `mailto:${personal.email}`,
}

// Stat highlights shown in the About section — only figures explicitly
// supported by the resume / brief.
export const stats = [
  { value: '9.02', label: 'CGPA', suffix: '/10' },
  { value: '2028', label: 'Expected Graduation' },
  { value: '15+', label: 'Volunteers Led' },
  { value: 'GMS', label: 'Founder / Product' },
]

// ----------------------------------------------------------------------------
// Featured project — GMS (Get My Service)
// ----------------------------------------------------------------------------
export const gms = {
  name: 'Get My Service',
  shortName: 'GMS',
  tagline: 'Any service. Any time. One app.',
  positioning: 'A digital platform connecting service seekers and service providers.',
  role: 'Founder / Product Builder / Developer',
  problem:
    'Finding reliable service providers and connecting them with people who need their services can be fragmented and inefficient.',
  solution:
    'GMS is designed to create a digital bridge between service seekers and service providers — a single app to discover, book, and manage local services.',
  roleDetail:
    'Architected the full service marketplace end-to-end: the Flutter mobile app, the FastAPI backend, the relational database schema, and Supabase storage. Owned the product lifecycle from concept and architecture through development and testing.',
  features: [
    'Map-based service discovery with live provider locations',
    'Booking management with reschedule proposals and advance payments',
    'Real-time chat between service seekers and providers',
    'Multi-role profiles for providers and seekers',
    'Booking timeline tracking every step of a request',
    'Push notifications for booking updates',
  ],
  technology: [
    { label: 'Flutter', category: 'Mobile' },
    { label: 'FastAPI', category: 'Backend' },
    { label: 'REST APIs', category: 'Backend' },
    { label: 'MySQL', category: 'Database' },
    { label: 'PostgreSQL', category: 'Database' },
    { label: 'Supabase', category: 'Storage' },
  ],
  journey: [
    { stage: 'Idea', status: 'done', detail: 'Identified the fragmentation problem in local service discovery.' },
    { stage: 'Design', status: 'done', detail: 'Designed the marketplace flow, booking system, and multi-role UX.' },
    { stage: 'Development', status: 'done', detail: 'Built the Flutter app across search, booking, chat and profiles.' },
    { stage: 'Backend', status: 'done', detail: 'Built FastAPI services with MySQL/PostgreSQL and Supabase storage.' },
    { stage: 'Deployment', status: 'in-progress', detail: 'Testing and refining ahead of production rollout.' },
    { stage: 'Product', status: 'in-progress', detail: 'Iterating toward a public launch.' },
  ],
  gallery: [
    { src: 'gms-home', alt: 'GMS home screen showing service categories and recommended providers' },
    { src: 'gms-map', alt: 'GMS map view showing nearby service providers around Coimbatore' },
    { src: 'gms-bookings', alt: 'GMS bookings screen showing confirmed and completed service bookings' },
    { src: 'gms-timeline', alt: 'GMS booking timeline showing the reschedule and advance-payment flow' },
    { src: 'gms-profile', alt: 'GMS provider profile screen showing services offered and pricing' },
  ],
  logo: 'gms-logo',
}

// ----------------------------------------------------------------------------
// Roadwatch project
// ----------------------------------------------------------------------------
export const roadwatch = {
  name: 'Roadwatch',
  tagline: 'Road Infrastructure Transparency Dashboard',
  description:
    'A Flutter-based application focused on road-related reporting and monitoring, built for the IIT Madras CoERS Road Safety Hackathon.',
  problem:
    'Road issues like potholes, waterlogging, and damaged infrastructure often go unreported or untracked, and budget spending on road projects is rarely visible to citizens.',
  solution:
    'Roadwatch lets citizens report road issues with severity, location, and photo evidence, and gives visibility into road quality, complaint status, and public budget transparency.',
  role: 'Applied computer vision and real-time data analysis to transportation safety challenges as part of the RoadWatch team presented at IIT Madras CoERS.',
  technology: ['Flutter', 'SQLite', 'FastAPI'],
  context: 'IIT Madras CoERS Road Safety Hackathon',
  gallery: [
    { src: 'roadwatch-dashboard', alt: 'Roadwatch dashboard showing road quality score and budget transparency' },
    { src: 'roadwatch-report', alt: 'Roadwatch issue-reporting screen with issue type and severity selection' },
  ],
  icon: 'roadwatch-icon',
}

// ----------------------------------------------------------------------------
// Other / smaller projects
// ----------------------------------------------------------------------------
export const otherProjects = [
  {
    id: 'ebill',
    name: 'E-Bill Management Software',
    description:
      'Commercial billing software built for a real client — SRS Agencies — during 12th grade. Automated invoice creation, customer management, and transaction records. My first production delivery to a real client, before undergraduate study began.',
    technology: ['Python'],
    tag: 'Client Delivery',
  },
  {
    id: 'voting',
    name: 'Digital Voting Management System',
    description:
      'A secure voter registration, vote-casting, and automated result-generation system built for institutional elections during earlier academic work.',
    technology: ['Python'],
    tag: 'Academic Project',
  },
  {
    id: 'documentary',
    name: 'AI in Campus Life — Mini Documentary',
    description:
      'Led a 15+ member interdisciplinary team through planning, filming, post-production, and presentation for an Institution Innovation Council (IIC) competition entry.',
    technology: ['Video Production', 'Leadership'],
    tag: 'IIC Competition',
  },
]

// AI / ML work — trainee program output, described accurately without
// invented accuracy figures or dataset names since none were supplied.
export const mlWork = {
  title: 'Machine Learning Trainee — Hardwin Software',
  period: '2026',
  description:
    'Practical ML training covering data preprocessing, supervised and unsupervised learning, model training, validation, and deployment workflows. Built Python-based predictive models using Scikit-learn and pandas for real-world datasets.',
  techniques: [
    'Data preprocessing',
    'Supervised learning',
    'Unsupervised learning',
    'Model validation',
    'Scikit-learn',
    'pandas',
  ],
}

// ----------------------------------------------------------------------------
// Skills — grouped, with a visual "weight" for hierarchy (primary skills are
// rendered larger / earlier than supporting ones).
// ----------------------------------------------------------------------------
export const skillGroups = [
  {
    title: 'Development',
    skills: [
      { name: 'Flutter', weight: 'primary' },
      { name: 'Dart', weight: 'primary' },
      { name: 'Python', weight: 'primary' },
      { name: 'JavaScript', weight: 'secondary' },
      { name: 'React', weight: 'secondary' },
      { name: 'FastAPI', weight: 'primary' },
      { name: 'REST APIs', weight: 'secondary' },
      { name: 'Java', weight: 'tertiary' },
      { name: 'C', weight: 'tertiary' },
    ],
  },
  {
    title: 'Databases & Backend',
    skills: [
      { name: 'MySQL', weight: 'primary' },
      { name: 'PostgreSQL', weight: 'primary' },
      { name: 'Supabase', weight: 'secondary' },
      { name: 'SQLite', weight: 'secondary' },
      { name: 'Django', weight: 'secondary' },
      { name: 'Node.js', weight: 'tertiary' },
      { name: 'Express.js', weight: 'tertiary' },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Scikit-learn', weight: 'primary' },
      { name: 'pandas', weight: 'primary' },
      { name: 'Data Analysis', weight: 'secondary' },
      { name: 'Hugging Face', weight: 'tertiary' },
      { name: 'Prompt Engineering', weight: 'tertiary' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', weight: 'primary' },
      { name: 'GitHub', weight: 'primary' },
      { name: 'VS Code', weight: 'secondary' },
      { name: 'Postman', weight: 'tertiary' },
    ],
  },
  {
    title: 'Creative',
    skills: [
      { name: 'Video Editing', weight: 'primary' },
      { name: 'Visual Content', weight: 'secondary' },
      { name: 'Storytelling', weight: 'secondary' },
      { name: 'Public Speaking', weight: 'tertiary' },
    ],
  },
]

// ----------------------------------------------------------------------------
// Journey / Timeline — years/periods only where exact dates weren't supplied.
// ----------------------------------------------------------------------------
export const timeline = [
  {
    period: '12th Grade (July 2024)',
    title: 'First client delivery',
    description:
      'Built and delivered commercial billing software (E-Bill Management Software) for SRS Agencies — before undergraduate study even began.',
  },
  {
    period: 'Sept 2024',
    title: 'Began B.E. CSE at HICET',
    description: 'Started Computer Science Engineering at Hindusthan College of Engineering and Technology, Coimbatore.',
  },
  {
    period: '1st Year (Sept 2024 – Aug 2025)',
    title: 'Class Representative',
    description: 'Served as Class Representative during first year.',
  },
  {
    period: 'July 2025',
    title: 'Founded Get My Service (GMS)',
    description: 'Started building GMS — a Flutter + FastAPI service marketplace connecting seekers and providers.',
  },
  {
    period: 'Aug 2025',
    title: 'Smart India Hackathon (SIH) 2025',
    description: 'Participated in Smart India Hackathon 2025.',
  },
  {
    period: 'Sep 2025',
    title: 'IDEATHON 2025, HICET',
    description: 'Participated in IDEATHON 2025 hosted by the AI/ML & CSE department and Entrepreneurship Development Cell.',
  },
  {
    period: 'Aug 2025 – Apr 2026',
    title: 'Backend Mastery with Django & Postgres',
    description: '9-month backend program under Dr. Ganesh Academy, tutored by Syed Jafer K.',
  },
  {
    period: 'Jan 2026',
    title: 'IIC Competition — Team Lead',
    description: 'Led a 15+ member interdisciplinary team to produce "AI in Campus Life," a mini documentary, for the Institution Innovation Council competition.',
  },
  {
    period: 'Jan 2026',
    title: 'SREC UTSAVA ’26',
    description: 'Competed in PROMPTOPIA, PitchCraft, and Treasure Hunt at this national-level techno-cultural fest.',
  },
  {
    period: 'Feb 2026',
    title: 'Coordinator, TechAzura ’26',
    description: 'Coordinated TechAzura, a department-level technical symposium.',
  },
  {
    period: 'May 2026',
    title: 'Machine Learning Trainee — Hardwin Software',
    description:
      'Completed practical ML training covering the full model lifecycle: preprocessing, training, validation, and deployment.',
  },
  {
    period: 'May 2026',
    title: 'Roadwatch — IIT Madras CoERS',
    description: 'Built and presented Roadwatch, a road-safety monitoring app, at the IIT Madras CoERS Road Safety Hackathon.',
  },
 
  {
    period: '2026–27',
    title: 'EDC Student President',
    description: 'Elected Student President of the Entrepreneurship Development Cell (EDC) for 2026–27.',
  },

  {
    period: 'Aug 2026',
    title: 'CMR ThinkFest 3.0',
    description: 'Competed at the national-level project competition hosted by CMR College of Engineering & Technology.',
  },
  {
    period: '2027',
    title: 'Main Coordinator, TechAzura ’27',
    description: 'Stepped up to lead TechAzura as Main Coordinator.',
  },
]

// ----------------------------------------------------------------------------
// Leadership & Achievements
// ----------------------------------------------------------------------------
export const leadership = [
  {
    title: 'Main Coordinator, TechAzura ’27',
    period: '2026',
    description: 'Leading the organization of TechAzura, the department’s flagship technical symposium.',
  },
  {
    title: 'EDC Student President',
    period: '2026–27',
    description: 'Leading the Entrepreneurship Development Cell as elected Student President.',
    featured: true,
  },
  {
    title: 'Coordinator, TechAzura ’26',
    period: '2025',
    description: 'Coordinated the previous edition of TechAzura.',
  },
  {
    title: 'Team Lead — AI in Campus Life Documentary',
    period: '2026',
    description: 'Led 15+ volunteers through an IIC-competition documentary project, from planning to final presentation.',
  },
  {
    title: 'Class Representative',
    period: '1st Year',
    description: 'Represented the class as Class Representative in first year.',
  },
]

export const hackathons = [
  { name: 'Smart India Hackathon (SIH) 2025', role: 'Participant' },
  { name: 'IIT Madras CoERS Road Safety Hackathon', role: 'Project: RoadWatch' },
  { name: 'CMR ThinkFest 3.0', role: 'National-Level Project Competition, Aug 1, 2026' },
  { name: 'CK Innovation Awards', role: 'Presented Get My Service (GMS) innovation concept' },
  { name: 'IDEATHON 2025, HICET', role: 'AI/ML & CSE Dept + Entrepreneurship Development Cell, Sep 15, 2025' },
  { name: 'Institution Innovation Council (IIC) Competition', role: 'Team Lead: AI in Campus Life Documentary' },
  { name: "SREC UTSAVA '26", role: 'National Techno-Cultural Fest — PROMPTOPIA, PitchCraft, Treasure Hunt' },
  { name: 'NISM-SEBI National Financial Literacy Quiz 2026', role: 'College Round Participant' },
]

export const certifications = [
  { name: 'Backend Mastery with Django & Postgres (9-Month Program)', issuer: 'Dr. Ganesh Academy', period: 'Aug 2025 – Apr 2026' },
  { name: 'Cloud Computing', issuer: 'NPTEL · IIT Kharagpur (SWAYAM)', period: 'Jan–Apr 2026' },
  { name: 'Python for Data Science & Machine Learning', issuer: 'UniAthena × Cambridge International Qualifications, UK', period: 'June 2026' },
  { name: 'Introduction to IoT', issuer: 'Simplilearn SkillUp', period: 'Mar 2025' },
  { name: 'Google Gemini Academy — Transforming Higher Education with Google Gemini', issuer: 'Google × STTAR', period: 'Dec 2025' },
  { name: 'Digital Electronics Fundamentals', issuer: 'MindLuster', period: 'Sep 2025' },
  { name: 'Telephone Etiquette', issuer: 'TCS iON', period: 'Mar 2026' },
  { name: 'Email Etiquette', issuer: 'TCS iON', period: 'Aug 2025' },
  { name: 'Write Effective Resume and Cover Letter', issuer: 'TCS iON', period: 'Mar 2026' },
  { name: "Member — Institution of Engineers (India) Students' Chapter", issuer: 'IEIESC/641032/HICET/CS/75453 · Valid upto 2028', period: '2024–2028' },
]

// ----------------------------------------------------------------------------
// Beyond Code — creative work
// ----------------------------------------------------------------------------
export const creative = {
  headline: 'Beyond Code',
  supportingLine: 'Technology isn’t the only thing I create.',
  items: [
    {
      title: 'Video Editing',
      description: 'Planning, filming, and post-production for creative and documentary projects.',
    },
    {
      title: 'Poster & Visual Design',
      description: 'Visual content and poster design for events, symposia, and campaigns.',
    },
    {
      title: 'Storytelling',
      description: 'Crafting narratives for presentations, pitches, and campus media.',
    },
    {
      title: 'AI in Campus Life — Documentary',
      description: 'Led a 15+ member team to produce a mini documentary for the IIC competition.',
    },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Creative', href: '#creative' },
  { label: 'Contact', href: '#contact' },
]

// Stable reference (not recreated per render) for scroll-spy observers.
export const navIds = navLinks.map((l) => l.href.replace('#', ''))

export const resume = {
  path: '/resume/MK_Rathish_Resume.pdf',
}
