export interface NavLink {
  label: string;
  href: string;
}

export interface ProgrammeCoverage {
  title: string;
  classes: string;
  description: string;
  items: string[];
  tag?: string;
  badge?: string;
}

export interface StarAchiever {
  name: string;
  exam: string;
  rank: string;
  institute?: string;
}

export interface ApproachPillar {
  number: string;
  title: string;
  description: string;
}

export interface WhyRsaPoint {
  number: string;
  title: string;
  description: string;
}

export interface LearningOption {
  title: string;
  description: string;
  tag: string;
  features: string[];
}

export interface PhoneContact {
  number: string;
  tel: string;
  formatted: string;
}

export interface CourseItem {
  number: string;
  title: string;
  classes: string;
  description: string;
  href?: string;
}

export interface LearningFeature {
  number: string;
  title: string;
  description: string;
}

export interface AchievementItem {
  tag: string;
  title: string;
  description: string;
}

export interface RibbonMetric {
  number: string;
  title: string;
  detail: string;
}

// 1. BRAND & TOP BAR INFO
export const BRAND_INFO = {
  name: "Ramanujan Scholar Academy",
  shortName: "RSA Akola",
  city: "Akola",
  state: "Maharashtra",
  address: "Rautwadi, Akola, Maharashtra",
  tagline: "Magic of Maths. Magic of Merits.",
  positioning: "Academic Excellence | Foundation Learning | Competitive Preparation",
  websiteUrl: "https://ramanujanakola.com",
  instagramHandle: "@rsa_akola",
  instagramUrl: "https://instagram.com/rsa_akola",
  phonePrimary: "9823079945",
  phonePrimaryDisplay: "98230 79945",
  phoneSecondary: "7056761718",
  phoneSecondaryDisplay: "70567 61718",
};

export const TOP_BAR_INFO = {
  institution: "RAMANUJAN SCHOLAR ACADEMY",
  city: "AKOLA",
  phoneDisplay: BRAND_INFO.phonePrimaryDisplay,
  tel: `tel:${BRAND_INFO.phonePrimary}`,
};

export const CONTACT_INFO = {
  academyName: BRAND_INFO.name,
  addressLine1: "Rautwadi, Akola",
  state: BRAND_INFO.state,
  postalInfo: "Akola, Maharashtra",
  websiteUrl: BRAND_INFO.websiteUrl,
  phones: [
    { number: BRAND_INFO.phonePrimary, formatted: BRAND_INFO.phonePrimaryDisplay, tel: `tel:${BRAND_INFO.phonePrimary}` },
    { number: BRAND_INFO.phoneSecondary, formatted: BRAND_INFO.phoneSecondaryDisplay, tel: `tel:${BRAND_INFO.phoneSecondary}` },
  ] as PhoneContact[],
};

// NAVIGATION
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "PACE Initiative", href: "#pace-initiative" },
  { label: "Our Approach", href: "#approach" },
  { label: "Achievements", href: "#achievements" },
  { label: "Scholarship Exam", href: "#scholarship" },
  { label: "Why RSA", href: "#why-rsa" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

// 1. HERO CONTENT
export const HERO_CONTENT = {
  eyebrow: "RAMANUJAN SCHOLAR ACADEMY · AKOLA",
  title: "Building Strong Foundations.",
  titleAccent: "Creating Academic Excellence.",
  tagline: BRAND_INFO.tagline,
  paragraphs: [
    "From school-level Mathematics and Science to scholarship examinations, Olympiads and IIT-JEE & NEET preparation, Ramanujan Scholar Academy helps students develop the knowledge, discipline and confidence to achieve more.",
    "With a focus on conceptual learning, regular practice, expert guidance and competitive examination preparation, we support students throughout their academic journey.",
  ],
  primaryCta: { label: "Explore Our Courses", href: "#programmes" },
  secondaryCta: { label: "Admissions Enquiry", href: "#admissions" },
  highlights: [
    "Foundation Courses – Classes 3rd to 10th",
    "Scholarship & Competitive Examinations",
    "IIT-JEE & NEET – Classes 11th & 12th",
    "Online & Offline Learning",
    "English & Semi-English Medium",
  ],
  announcement: {
    badge: "Admissions Open for 2026–27 Batches",
    statusBadge: "Admissions Open for 2026–27 Batches",
    subtext: "Classes 3rd to 12th (Foundation · JEE · NEET)",
  },
};

// 2. ABOUT CONTENT
export const ABOUT_CONTENT = {
  eyebrow: "A Tradition of Learning. A Commitment to Excellence.",
  title: "More Than Classes.",
  titleAccent: "A Foundation for Lifelong Learning.",
  paragraphs: [
    "At Ramanujan Scholar Academy, Akola, we believe that every student's academic journey begins with a strong understanding of fundamentals.",
    "Our approach combines conceptual teaching, systematic practice, regular assessments and individual academic guidance to help students perform confidently in school examinations and competitive assessments.",
    "From early foundation programmes to advanced preparation for IIT-JEE and NEET, our academic offerings are designed to support students at different stages of their education.",
  ],
  focusAreas: [
    "Strong conceptual understanding in Mathematics and Science.",
    "Logical thinking and analytical problem-solving.",
    "Consistent practice and examination discipline.",
    "Confidence to participate in competitive examinations.",
    "Academic excellence through structured preparation.",
  ],
  philosophy: BRAND_INFO.tagline,
};

// 3. ACADEMIC PROGRAMMES
export const PROGRAMMES: ProgrammeCoverage[] = [
  {
    title: "School Foundation Programmes",
    classes: "Classes 3rd to 8th",
    badge: "Early Foundation",
    description: "Build a strong academic foundation from the early years emphasizing Mathematics, Science, and logical reasoning.",
    items: [
      "Mathematics Foundation",
      "Science Foundation",
      "Maths & Science Wisdom",
      "Ganit Pravinaya & Ganit Pradnya",
      "Scholarship Examination Preparation",
    ],
  },
  {
    title: "CBSE & State Board Foundation",
    classes: "Classes 6th to 10th",
    badge: "Board Prep",
    description: "Structured learning programme designed to strengthen school-level academic performance and conceptual clarity.",
    items: [
      "CBSE & Maharashtra State Board syllabus support",
      "Mathematics & Science in-depth concepts",
      "Chapter-wise preparation & regular tests",
      "Problem-solving and application-based learning",
      "Examination-oriented revision",
    ],
  },
  {
    title: "Mathematics & Science Wisdom",
    classes: "Classes 3rd to 8th",
    badge: "Analytical Skills",
    description: "Develop mathematical ability and scientific thinking far beyond routine textbook learning.",
    items: [
      "Mathematical reasoning & logic building",
      "Conceptual Science learning",
      "Application-based high-order questions",
      "Competitive examination readiness",
    ],
  },
  {
    title: "Scholarship Examination Preparation",
    classes: "Classes 4th, 5th, 7th & 8th",
    badge: "Merit Competitions",
    description: "Dedicated preparation for state scholarship examinations and academic merit awards.",
    items: [
      "Mathematics & Intelligence reasoning",
      "Language & comprehension",
      "General academic aptitude tests",
      "Practice papers and mock examinations",
      "Time management & test techniques",
    ],
  },
  {
    title: "Olympiad & Competitive Foundation",
    classes: "Classes 3rd to 12th",
    badge: "National Competitions",
    description: "Prepare for national Olympiads through structured practice and subject-focused deep learning.",
    items: [
      "IMO (International Mathematics Olympiad)",
      "NSO (National Science Olympiad) & IEO",
      "MTSE & NMTC (AMTI competitions)",
      "Ganit Pravinaya & Ganit Pradnya",
      "Homi Bhabha Young Scientist Exam",
      "Navodaya Entrance Examination",
    ],
  },
  {
    title: "BDS & IPM Preparation",
    classes: "Classes 3rd to 9th",
    badge: "Aptitude Foundation",
    description: "Specialized competitive preparation programmes designed to sharpen aptitude, logic, and reasoning.",
    items: [
      "Aptitude & analytical thinking",
      "Subject-focused practice modules",
      "Structured syllabus coverage",
    ],
  },
  {
    title: "IIT-JEE & NEET Preparation",
    classes: "Classes 11th & 12th",
    badge: "Integrated Target",
    description: "Think Bigger. Prepare Better. Aim Higher. Integrated academic coaching bringing together board learning and competitive mastery.",
    items: [
      "JEE: Physics, Chemistry & Mathematics",
      "NEET: Physics, Chemistry & Biology (NCERT-focused)",
      "Conceptual problem solving & advanced question drills",
      "Regular testing, rank analysis & doubt solving",
    ],
  },
];

export const COURSES: CourseItem[] = [
  {
    number: "01",
    title: "Foundation",
    classes: "Classes 3–5",
    description: "Build strong fundamentals in Mathematics and Science.",
    href: "#admissions",
  },
  {
    number: "02",
    title: "Middle School",
    classes: "Classes 6–8",
    description: "Develop conceptual clarity and problem-solving skills.",
    href: "#admissions",
  },
  {
    number: "03",
    title: "Board Preparation",
    classes: "Classes 9–10",
    description: "Strengthen subject knowledge and examination readiness.",
    href: "#admissions",
  },
  {
    number: "04",
    title: "JEE & NEET",
    classes: "Classes 11–12",
    description: "Prepare for competitive examinations with focused practice.",
    href: "#admissions",
  },
];

// 4. PACE INITIATIVE
export const PACE_INITIATIVE = {
  eyebrow: "A Major Academic Initiative in Akola",
  headline: "PACE IIT & Medical Mumbai. Now in Akola.",
  description:
    "Ramanujan Scholar Academy presents the relaunch of the PACE IIT & NEET Mumbai Online Integrated Programme in Akola with AIM. This initiative brings an integrated preparation opportunity to students in Akola who aspire to pursue top engineering and medical careers.",
  mission45: {
    title: "Mission Super 45",
    tagline: "A Key to Your Success.",
    description:
      "A focused academic initiative for selected students aspiring to achieve extraordinary excellence in competitive entrance examinations.",
    pillars: [
      "Competitive examination preparation",
      "Structured learning and regular assessments",
      "Conceptual understanding & advanced problems",
      "Extensive problem-solving practice",
      "Academic guidance and 1-on-1 doubt solving",
    ],
    cta: "Enquire About Mission Super 45",
  },
};

// 5. OUR ACADEMIC APPROACH
export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    number: "01",
    title: "Expert Faculty",
    description: "Subject-focused academic guidance to help students understand concepts and strengthen their fundamentals.",
  },
  {
    number: "02",
    title: "Regular Tests & Analysis",
    description: "Structured assessments help students understand their preparation levels, identify weaknesses and improve performance.",
  },
  {
    number: "03",
    title: "Regular Doubt-Solving Sessions",
    description: "Students receive continuous opportunities to clarify concepts and address difficulties throughout their preparation.",
  },
  {
    number: "04",
    title: "Result-Oriented Preparation",
    description: "A systematic approach to syllabus coverage, practice, revision and examination readiness.",
  },
  {
    number: "05",
    title: "Unlimited Practice",
    description: "Continuous opportunities to practise concepts and develop problem-solving ability across all topics.",
  },
];

export const LEARNING_FEATURES: LearningFeature[] = [
  {
    number: "01",
    title: "Expert Faculty",
    description: "Guidance from experienced teachers, with subject-focused learning.",
  },
  {
    number: "02",
    title: "Regular Tests",
    description: "Practice, assessment and analysis to identify learning gaps.",
  },
  {
    number: "03",
    title: "Doubt Solving",
    description: "Dedicated support to help students strengthen their understanding.",
  },
];

// 6. ACHIEVEMENTS & LEGACY
export const ACHIEVEMENTS_DATA = {
  eyebrow: "Celebrating Excellence in Education",
  headline: "A Legacy of Results. A Future of Possibilities.",
  leadText:
    "The academy highlights the history of PACE IIT & Medical's educational programmes in Akola from 2009 to 2024, alongside Ramanujan Scholar Academy's distinguished school scholarship and merit records.",
  starAchievers: [
    { name: "Kapil Vaidya", exam: "IIT-JEE", rank: "AIR 13", institute: "IIT Powai" },
    { name: "Gunjan Gattani", exam: "NEET", rank: "AIR 21", institute: "Top Medical College" },
    { name: "Ashish Manwar", exam: "IIT-JEE", rank: "AIR 176", institute: "IIT" },
    { name: "Rishabh More", exam: "IIT-JEE", rank: "AIR 180", institute: "IIT" },
    { name: "Sanket Tapdia", exam: "IIT-JEE", rank: "AIR 253", institute: "IIT" },
    { name: "Sarthak Keshawar", exam: "IIT-JEE", rank: "AIR 919", institute: "IIT" },
    { name: "Rohan Ishwarkar", exam: "IIT-JEE", rank: "AIR 1466", institute: "IIT" },
  ] as StarAchiever[],
  institutes: ["IIT Bombay (Powai)", "IIT Madras", "IIT Kharagpur", "IIT Ropar", "KEM Mumbai"],
  paceRecord: {
    stat: "721+",
    title: "Total Selections to IITs in JEE Advanced",
    attribution: "PACE IIT & Medical Programme Total Selections Record",
  },
  scholarshipRecord: {
    title: "Scholarship & School Merit Achievements",
    points: [
      "Maharashtra State Scholarship Examination rank holders",
      "Mathematics & Science Wisdom top percentiles",
      "District-level merit achievements across Akola",
      "Primary and middle-school academic distinctions",
    ],
  },
  closingQuote:
    "Every achievement represents dedication, hard work and the determination to move forward. We congratulate every student and look forward to nurturing the next generation of achievers.",
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    tag: "JEE & NEET",
    title: "Competitive Results",
    description: "Student achievements and examination outcomes in competitive engineering & medical entrances.",
  },
  {
    tag: "School Academics",
    title: "Academic Excellence",
    description: "Recognising top rankers and high performers in school and subject board examinations.",
  },
  {
    tag: "Scholarships",
    title: "Student Recognition",
    description: "A dedicated space celebrating students awarded merit scholarships and regional honors.",
  },
];

export const RIBBON_METRICS: RibbonMetric[] = [
  { number: "01", title: "School Foundation", detail: "Classes 3–8" },
  { number: "02", title: "Board Preparation", detail: "Classes 9–10" },
  { number: "03", title: "Competitive Exams", detail: "JEE & NEET" },
  { number: "04", title: "Learning Options", detail: "Online & Offline" },
];

// 7. SCHOLARSHIP EXAMINATION 2026
export const SCHOLARSHIP_SECTION = {
  eyebrow: "Discover Your Potential",
  headline: "Your Academic Journey Could Begin With One Examination.",
  lead: "Ramanujan Scholar Academy conducts scholarship-cum-entrance examination initiatives to identify and encourage academically motivated students with merit-based scholarship opportunities.",
  highlights: [
    "Scholarship examination for Std. 4th and 7th",
    "Foundation preparation for students in relevant school grades",
    "Comprehensive academic assessment and merit recognition",
    "Examination-based scholarship opportunities (subject to academy rules)",
    "Personalized registration and examination guidance",
  ],
  targetAudience:
    "Students interested in strengthening their Mathematics, Science, reasoning and academic abilities can enquire about applicable examination categories and eligibility.",
  ctaText: "Register for Scholarship Examination",
};

// 8. LEARNING OPTIONS
export const LEARNING_OPTIONS: LearningOption[] = [
  {
    title: "Offline Classroom Batches",
    tag: "In-Person Classroom",
    description: "Classroom-based interactive learning with teacher instruction, peer collaboration, and structured daily discipline.",
    features: ["Direct teacher interaction", "Classroom test series", "Immediate doubt solving", "Structured study environment"],
  },
  {
    title: "Online Live & Integrated Batches",
    tag: "Digital Learning",
    description: "Access high-standard academic preparation through live online sessions, digital notes, and integrated guidance.",
    features: ["Learn from home convenience", "Recorded backup sessions", "Online assessments & analytics", "Digital doubt clearing"],
  },
  {
    title: "Medium of Instruction",
    tag: "Flexible Mediums",
    description: "Tailored batches designed to help students learn comfortably in their preferred language medium.",
    features: ["English Medium batches", "Semi-English Medium batches", "Bilingual concept clarity", "Customized study material"],
  },
];

// 9. WHY RSA
export const WHY_RSA_POINTS: WhyRsaPoint[] = [
  {
    number: "01",
    title: "Multiple Academic Pathways",
    description: "Comprehensive continuum from school foundation (classes 3–10) to scholarship exams, Olympiads, and competitive JEE & NEET coaching.",
  },
  {
    number: "02",
    title: "Mathematics & Science Focus",
    description: "Deep conceptual emphasis and analytical problem solving inspired by Ramanujan's mathematical heritage.",
  },
  {
    number: "03",
    title: "Competitive Preparation",
    description: "Specialized training for State Scholarships, Olympiads (IMO, NSO), and engineering/medical entrance exams.",
  },
  {
    number: "04",
    title: "Regular Assessment",
    description: "Periodic chapter-wise and cumulative mock tests with deep performance gap analysis.",
  },
  {
    number: "05",
    title: "Academic Guidance",
    description: "Dedicated faculty mentorship, personal academic counselling, and scheduled doubt-solving sessions.",
  },
  {
    number: "06",
    title: "Flexible Learning",
    description: "Seamless availability of both offline classroom coaching in Akola and live online interactive batches.",
  },
  {
    number: "07",
    title: "English & Semi-English",
    description: "Dedicated batches catering to students from English and Semi-English school backgrounds.",
  },
  {
    number: "08",
    title: "PACE Integrated Initiative",
    description: "Access to PACE IIT & NEET Mumbai online integrated curriculum and Mission Super 45 right here in Akola.",
  },
];

// 10 & 11. ADMISSIONS & CONTACT
export const ADMISSIONS_CONTENT = {
  eyebrow: "Begin Your Child's Academic Journey",
  headline: "The Right Guidance Can Make a Difference.",
  lead: "Looking for foundation courses, scholarship preparation, Olympiad training or IIT-JEE and NEET coaching? Our team can help you understand the programmes, admission process, and available batches.",
  phones: [
    { number: BRAND_INFO.phonePrimary, formatted: BRAND_INFO.phonePrimaryDisplay, tel: `tel:${BRAND_INFO.phonePrimary}` },
    { number: BRAND_INFO.phoneSecondary, formatted: BRAND_INFO.phoneSecondaryDisplay, tel: `tel:${BRAND_INFO.phoneSecondary}` },
  ],
  standardOptions: [
    "Class 3rd",
    "Class 4th",
    "Class 5th",
    "Class 6th",
    "Class 7th",
    "Class 8th",
    "Class 9th",
    "Class 10th",
    "Class 11th (JEE/NEET)",
    "Class 12th (JEE/NEET)",
  ],
  boardOptions: ["CBSE Board", "Maharashtra State Board", "ICSE Board", "Other"],
  mediumOptions: ["English Medium", "Semi-English Medium"],
  programmesOfInterest: [
    "School Foundation (Class 3–8)",
    "CBSE & State Board (Class 6–10)",
    "Mathematics & Science Wisdom",
    "Scholarship Exam Preparation",
    "Olympiad & Competitive Foundation",
    "PACE IIT-JEE & NEET (Class 11–12)",
    "Mission Super 45",
  ],
  learningPreferences: ["Offline Classroom (Akola)", "Online Interactive Batch", "Both / Either"],
};
