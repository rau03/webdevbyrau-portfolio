// All site copy/data lives here as typed exports so content can be edited
// without touching component code. Section data is filled in as each section
// is built (see build order, section 7 of the spec).

export const nav = {
  logo: "CR",
  links: [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ],
} as const;

export const projectsSection = {
  eyebrow: "SELECTED WORK",
  headline: "THINGS I'VE SHIPPED",
} as const;

export const hero = {
  name: "CHRIS RAU",
  eyebrow: "SOFTWARE ENGINEER · NASHVILLE, TN",
  headline: ["I BUILD", "SOFTWARE", "THAT SHIPS."],
  subhead:
    "Product-minded engineer with a proven track record of building and shipping production web and iOS applications — owning the full lifecycle from architecture through App Store launch.",
  ctas: {
    primary: { label: "VIEW MY WORK", href: "#work" },
    secondary: { label: "RESUME", href: "/resume.pdf" },
  },
  techTags: ["NEXT.JS", "TYPESCRIPT", "SUPABASE", "CAPACITOR iOS"],
} as const;

// Manually maintained — update this value directly whenever the download
// count changes, then push to Git. Vercel auto-deploys, so the live site
// reflects the new number within a minute or two. No API/automation needed.
export const mountainPathwayStats = {
  downloads: 124,
  lastUpdated: "2026-06-23",
} as const;

type ProjectLinks = {
  live?: string;
  github?: string;
  appStore?: string;
};

export type FeaturedProject = {
  label: string;
  headline: string;
  appIcon: string;
  image: string;
  status: string;
  bullets: string[];
  buildLog: string[];
  techTags: string[];
  links: ProjectLinks;
};

export type BeforeAfterPair = {
  label: string;
  before: string;
  after: string;
};

export type CompactPlusProject = {
  label: string;
  headline: string;
  summary: string;
  beforeAfterPairs: BeforeAfterPair[];
  testimonial: { quote: string; attribution: string };
  techTags: string[];
  links: ProjectLinks;
};

export type CompactProject = {
  label: string;
  headline: string;
  summary: string;
  bullets?: string[];
  image: string;
  techTags: string[];
  links: ProjectLinks;
};

export type Projects = {
  mountainPathway: FeaturedProject | null;
  pmj: CompactPlusProject | null;
  pickleball: CompactProject | null;
};

// Populated as project cards are built (steps 5-7).
export const projects: Projects = {
  mountainPathway: {
    label: "JOURNALING · iOS & WEB",
    headline: "THE MOUNTAIN PATHWAY",
    appIcon: "/images/mountain-pathway/app-icon.png",
    image: "/images/mountain-pathway/mountainpathway.png",
    status: "Live on the App Store — April 5, 2026",
    bullets: [
      "Conceived, designed, and shipped a production web and iOS journaling app, owning the full lifecycle from problem definition and UX design through Capacitor-based iOS deployment and App Store launch",
      "Designed a guided 9-step journaling experience optimized for stillness and focus, translating abstract user needs into a clear, intentional interaction flow across web and mobile",
      "Migrated backend from local storage to Supabase (PostgreSQL, Auth, RLS), enabling secure persistence and real-time sync for scalable multi-user use",
      "Resolved 12+ production issues — including auth security vulnerabilities, deep link configuration, keyboard handling, and iOS-specific layout constraints",
      "Navigated three App Store rejections across four builds — including a build-time stub pattern to exclude donation strings (Guideline 3.1.1) and a secure server-side account deletion API using Supabase Admin (Guideline 5.1.1(v)) — resulting in launch on Easter Sunday, April 5, 2026",
      "Executed a performance sprint: extracted six custom hooks, added a 41-test Vitest suite across 13 files, optimized Supabase queries — maintaining a passing suite through every feature addition",
    ],
    buildLog: [
      "Implemented a build-time stub pattern that strips donation-related strings from the iOS bundle to satisfy App Store Guideline 3.1.1, while keeping the web build fully featured from a single codebase",
      "Configured Universal Links and deep linking (Associated Domains + apple-app-site-association) so shared journal links open directly in the native app",
      "Ran a TestFlight beta program to gather real-device feedback and surface iOS-specific issues ahead of the public launch",
    ],
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Capacitor iOS",
      "Framer Motion",
      "Zustand",
    ],
    links: {
      live: "https://www.themountainpathway.com/",
      github: "https://github.com/rau03/the-mountain-pathway",
      appStore: "https://apps.apple.com/app/the-mountain-pathway/id6759012874",
    },
  },
  pmj: {
    label: "E-COMMERCE",
    headline: "PMJ PRINTING",
    summary:
      "Shopify redesign reaching a 99% desktop performance score with 0ms total blocking time.",
    beforeAfterPairs: [
      {
        label: "Landing",
        before: "/images/pmj/landing-before.jpeg",
        after: "/images/pmj/landing-after.jpeg",
      },
      {
        label: "Hat",
        before: "/images/pmj/hat-before.jpeg",
        after: "/images/pmj/hat-after.jpeg",
      },
      {
        label: "Apparel",
        before: "/images/pmj/apparel-before.jpeg",
        after: "/images/pmj/apparel-after.jpeg",
      },
      {
        label: "About",
        before: "/images/pmj/about-before.jpeg",
        after: "/images/pmj/about-after.jpeg",
      },
      {
        label: "Footer",
        before: "/images/pmj/footer-before.jpeg",
        after: "/images/pmj/footer-after.jpeg",
      },
    ],
    testimonial: {
      quote:
        "Chris took our vision and turned it into a reality, creating a website that perfectly reflects our family business.",
      attribution: "PMJ Printing LLC",
    },
    techTags: ["Shopify", "Performance"],
    links: {
      live: "https://www.pmjprintingllc.com/",
    },
  },
  pickleball: {
    label: "WEB PLATFORM",
    headline: "PICKLEBALL COURT HUB",
    summary:
      "Nationwide court discovery across all 50 states, with real-time backend and ~90% duplicate reduction.",
    bullets: [
      "Users can create profiles and submit new court listings",
      "Admin dashboard for moderating submissions and keeping listings accurate",
      "Mobile-first design, built to scale across all 50 states",
    ],
    image: "/images/pickleball/results-map.jpeg",
    techTags: ["Convex", "Node.js"],
    links: {
      live: "https://court-finder-ten.vercel.app/",
      github: "https://github.com/rau03/court-finder",
    },
  },
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillsSection = {
  eyebrow: "CAPABILITIES",
  headline: "SKILLS",
  certification: "GOOGLE IT AUTOMATION WITH PYTHON — CERTIFIED, JUNE 2026",
} as const;

export const skills: SkillCategory[] = [
  {
    category: "FRONTEND & APPLICATION DEVELOPMENT",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    category: "BACKEND & DATA",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "Supabase (PostgreSQL)",
      "Convex",
      "Authentication",
      "Row-Level Security",
      "Python",
    ],
  },
  {
    category: "CLOUD & DEPLOYMENT",
    items: ["Vercel", "AWS Amplify", "CI/CD Pipelines", "Git", "GitHub"],
  },
  {
    category: "PRODUCT & DELIVERY FLUENCY",
    items: [
      "Agile/Scrum",
      "Feature Scoping",
      "UX/Product Thinking",
      "Stakeholder Communication",
      "Iterative Delivery",
      "Performance Optimization",
    ],
  },
];

export const aboutSection = {
  eyebrow: "ABOUT",
} as const;

export type About = {
  body: string;
  links: { linkedin: string; github: string };
};

export const about: About = {
  body:
    "Before I wrote a line of production code, I spent 17 years running programs in public schools — translating goals into plans, and plans into things that actually happened. That instinct carried straight into engineering: define the problem, ship something real, keep improving it after launch. The Mountain Pathway, live on the App Store, is the clearest proof. I also run a structured AI-assisted workflow (Cursor, Claude) to move fast without losing that discipline.",
  links: {
    linkedin: "https://www.linkedin.com/in/raucp/",
    github: "https://github.com/rau03",
  },
};

export const contact = {
  eyebrow: "GET IN TOUCH",
  headline: { lead: "LET'S BUILD", accent: "SOMETHING." },
  ctas: {
    email: { label: "EMAIL ME" },
    resume: { label: "RESUME", href: "/resume.pdf" },
  },
} as const;
