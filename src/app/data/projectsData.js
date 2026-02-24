export const projects = [
  {
    slug: "brand-and-beeyond",
    title: "Brand and Beeyond",
    description:
      "Branding agency website focused on identity, digital presence, and growth.",
    image: "/assets/images/projects/brandandbeeyond.png",
    tone: "from-zinc-900 via-zinc-800 to-black",
    technologies: [
      "React",
      "GSAP",
      "Bootstrap 5",
      "HTML",
      "CSS",
      "JavaScript",
      "Framer Motion",
    ],
    overview:
      "A marketing-first company website with animated storytelling, responsive layouts, and fast-loading pages built to improve lead quality.",
    contributions: [
      "Implemented modular React components for reusable page sections.",
      "Built animation sequences using GSAP and Framer Motion.",
      "Optimized page structure and assets for better Core Web Vitals.",
    ],
  },
  {
    slug: "touchwood-bliss-membership-app",
    title: "Touchwood Bliss Membership App",
    description:
      "Built in React Native to manage and book memberships for Touchwood Bliss resort.",
    image: "/assets/images/projects/membershipapp.png",
    tone: "from-zinc-950 via-zinc-900 to-black",
    technologies: ["React Native", "React Native Paper"],
    overview:
      "A mobile membership app that allows members to explore plans, manage accounts, and complete bookings with a smooth native experience.",
    contributions: [
      "Developed feature screens with React Native Paper components.",
      "Integrated booking and membership flows for daily operations.",
      "Improved UX with responsive layouts and clear information hierarchy.",
    ],
  },
  {
    slug: "fairytale-weddings-website",
    title: "Fairytale Weddings Website",
    description:
      "Wedding website created for Touchwood Bliss to showcase events and services.",
    image: "/assets/images/projects/fairytale.png",
    tone: "from-zinc-900 via-black to-zinc-900",
    technologies: ["React", "Tailwind CSS", "JavaScript", "GSAP"],
    overview:
      "A showcase website designed to present wedding packages, venue highlights, and gallery experiences with a premium visual approach.",
    contributions: [
      "Created service and package presentation sections.",
      "Added scroll interactions for a richer browsing experience.",
      "Structured content for easier updates and future expansion.",
    ],
  },
];

export const projectBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);
