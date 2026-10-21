// Team members shown in the interactive "Meet the Team" accordion (TeamSection).
// Names, titles, photos, LinkedIn URLs and bios are real. NOTE: emails follow a placeholder
// pattern (first@berghansen.com) and most quotes are still placeholder — replace the
// quotes/emails (and Julia's bio) with final copy before launch.

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  img: string;
  /** Photo aspect ratio (width / height). Caps the expanded panel width so the photo stays
   *  locked to its full height — shows the whole framing instead of upscaling/zooming the face. */
  aspect?: number;
  /** Extra zoom/crop on the photo (1 = none). >1 crops in tighter; <1 zooms out (shows the
   *  photo smaller). When <1, set `fill` to the photo's background colour so the revealed
   *  margin blends in seamlessly. */
  zoom?: number;
  /** Background colour shown behind the photo when it's zoomed out or shifted. Match the photo's bg. */
  fill?: string;
  /** Vertical nudge as a % of panel height. Positive = move the photo DOWN (exposes `fill` at top). */
  shiftY?: number;
  brightness?: number;
  /** Colour saturation on the accordion photo (1 = unchanged, <1 mutes vibrancy, >1 boosts it). */
  saturate?: number;
  objectPosition?: string;
  linkedin?: string;
  email?: string;
  /** Bio paragraph(s). Separate multiple paragraphs with a blank line ("\n\n"). */
  bio: string;
  /** Optional pull-quote shown beside the photo in the detail panel. */
  quote?: string;
  /** Optional company/affiliation logo shown under the contact buttons. */
  logo?: string;
  /** Optional URL the logo links to (e.g. the affiliated company's website). */
  logoLink?: string;
  /** Logo display height in px (default 38). */
  logoHeight?: number;
};

export const team: TeamMember[] = [
  {
    slug: "camilla-berg-hansen",
    name: "Camilla Berg Hansen",
    title: "CEO & Founder",
    img: "/images/team/camilla-headshot.webp",
    aspect: 1.0,
    linkedin: "https://www.linkedin.com/in/camillaberghansen/",
    email: "camilla@berghansen.com",
    bio: "Camilla is an executive search and leadership advisory professional with 15+ years of international experience connecting exceptional leaders with ambitious organizations. As Founder of Berg Hansen, she specializes in recruiting C-suite executives, commercial leaders, and specialists across North America. Her background includes executive search and talent advisory roles with the European Parliament, Mercuri Urval, and the World Bank Group, where she developed a reputation for identifying leaders who accelerate growth, strengthen culture, and create lasting business impact.",
    quote: "Great companies are built by great people, our job is to find and secure them.",
  },
  {
    slug: "rikke-malmberg",
    name: "Rikke Malmberg",
    title: "Executive Search Consultant",
    img: "/images/team/rikke-headshot.webp",
    aspect: 1.02,
    linkedin: "https://www.linkedin.com/in/rikkechristensen/",
    email: "rikke@berghansen.com",
    bio: "Rikke is an expert in Management and Recruitment Consulting with over 25 years of international experience spanning the US, Australia, Japan, Spain, and her native Denmark. Having driven talent strategies as an entrepreneur, an in-house recruiter, and within agency settings, she brings a true 360-degree perspective to the hiring life cycle, placing talent across tech, C-level positions, sales, and management. One of her special talents is her exceptional resourcefulness and cultural fluency, which she uses to seamlessly bridge the gap between people, operations, and growth across a global landscape.",
    quote: "I map the market so our clients never have to settle.",
  },
  {
    slug: "julia-daniels",
    name: "Julia Daniels",
    title: "Project Manager",
    img: "/images/team/julia-headshot-2.webp",
    aspect: 0.67,
    linkedin: "https://www.linkedin.com/in/julia-daniels-17375b198",
    email: "julia@berghansen.com",
    bio: "Julia keeps every engagement moving — coordinating timelines, candidates and client communication so each search runs smoothly from kickoff to placement. She is the operational backbone that keeps our process organized and on schedule.",
    quote: "Every detail handled, so every search moves forward.",
  },
  {
    slug: "marcus-honkanen",
    name: "Marcus Honkanen",
    title: "Senior Executive Search Partner, Europe",
    img: "/images/team/marcus-headshot.webp",
    aspect: 1.0,
    linkedin: "https://www.linkedin.com/in/marcushonkanen/",
    email: "marcus@berghansen.com",
    bio: "Marcus is an expert in Executive Search, with more than 20 years of international experience. Before becoming an entrepreneur in 2015, he was Managing Director and Partner in Executive Search on an international level at Kienbaum. One of his special talents is bringing people together from very different backgrounds. He uses his intercultural skills to facilitate this effectively, as well as his expertise and network spanning a wide range of industries within the Nordics and DACH.",
    quote: "Bringing people together, that’s my passion.",
    logo: "/images/team/nordic-minds-logo.png",
  },
  {
    slug: "jens-holstebro",
    name: "Jens Holstebro",
    title: "Strategic Advisor – MedTech, Digital Health & Software",
    img: "/images/team/jens-headshot.webp",
    aspect: 0.9,
    linkedin: "https://www.linkedin.com/in/jensholstebro/",
    bio: "Jens Holstebro brings more than 30 years of commercial leadership experience across Europe and North America, specializing in U.S. market expansion, go-to-market strategies, and business growth. He has held senior executive positions with European and American companies across MedTech, healthcare, technology, and SaaS. As President and CEO of a North American business owned by a leading Danish MedTech group, he led a successful turnaround, increasing revenue tenfold and overseeing a successful exit. His expertise spans commercial strategy, direct and channel sales, and building high-performing organizations in complex markets. With extensive experience helping European businesses succeed in the U.S., Jens understands the commercial and cultural challenges of transatlantic expansion. As a Strategic Advisor to Berg Hansen, he supports Danish companies in strengthening commercial leadership and driving sustainable U.S. growth.",
    quote: "Succeeding in the U.S. takes more than a great product, it takes the right commercial leadership.",
  },
  {
    slug: "yolanda-nokuri-hegngi",
    name: "Yolanda Nokuri Hegngi",
    title: "Partner, Executive Coach",
    img: "/images/team/yolanda-headshot.webp",
    aspect: 0.87,
    linkedin: "https://www.linkedin.com/in/yolanda-nokuri-hegngi-18173018/",
    email: "yolanda@berghansen.com",
    bio: "With over 30 years working with global executives and organizations to generate unique solutions to complex challenges and ambiguous problems, Yolanda provides strategic leadership advisory services designed to enhance and accelerate executive performance, organizational culture, and decision-making. Her key pillars include executive coaching, strategic advisory, leadership onboarding and transition acceleration, and change management and team alignment.",
    quote: "We start with the business goal, the right people follow from there.",
    logo: "/images/team/stimulus2logo.png",
    logoHeight: 74,
  },
];
