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
    slug: "camilla-daniels-hansen",
    name: "Camilla Daniels Hansen",
    title: "Managing Partner",
    img: "/images/team/camilla2done.jpg",
    aspect: 1.0,
    zoom: 1.45,
    shiftY: -5,
    linkedin: "https://www.linkedin.com/in/camilladaniels/",
    email: "camilla@berghansen.com",
    bio: "Camilla Hansen is an executive search and leadership advisory professional with 15+ years of international experience connecting exceptional leaders with ambitious organizations. As Founder of Berg Hansen, she specializes in recruiting C-suite executives, commercial leaders, and specialists across North America. Her background includes executive search and talent advisory roles with the European Parliament, Mercuri Urval, and the World Bank Group, where she developed a reputation for identifying leaders who accelerate growth, strengthen culture, and create lasting business impact.",
    quote: "Great companies are built by great people — our job is to find and secure them.",
  },
  {
    slug: "anna-berg-hansen",
    name: "Anna Berg Hansen",
    title: "Collaborating Partner",
    img: "/images/team/anna2.png",
    aspect: 0.79,
    brightness: 1.1,
    linkedin: "https://www.linkedin.com/in/annaberghansen/",
    email: "anna@berghansen.com",
    bio: "Anna specializes in executive search for commercial leadership roles supporting U.S. market expansion across IT, MedTech, and energy sectors. Drawing on experience with companies including Google, Apple, GE, UNICEF, and the Court of Justice of the European Union, she brings a strategic and commercially grounded approach to leadership hiring. Anna focuses on identifying leaders with the judgment, credibility, and execution capability needed to drive growth and deliver results in complex markets.",
    quote: "The best placements happen when both sides feel truly understood.",
  },
  {
    slug: "rikke-malmberg",
    name: "Rikke Malmberg",
    title: "Executive Search Consultant",
    img: "/images/team/rikke2.png",
    aspect: 0.87,
    zoom: 1.1,
    linkedin: "https://www.linkedin.com/in/rikkechristensen/",
    email: "rikke@berghansen.com",
    bio: "Rikke is an expert in Management and Recruitment Consulting with over 25 years of international experience spanning the US, Australia, Japan, Spain, and her native Denmark. Having driven talent strategies as an entrepreneur, an in-house recruiter, and within agency settings, she brings a true 360-degree perspective to the hiring life cycle, placing talent across tech, C-level positions, sales, and management. One of her special talents is her exceptional resourcefulness and cultural fluency, which she uses to seamlessly bridge the gap between people, operations, and growth across a global landscape.",
    quote: "I map the market so our clients never have to settle.",
  },
  {
    slug: "julia-daniels",
    name: "Julia Daniels",
    title: "Project Manager",
    img: "/images/team/julia2.jpg",
    aspect: 0.91,
    zoom: 1.1,
    linkedin: "https://www.linkedin.com/in/julia-daniels-17375b198",
    email: "julia@berghansen.com",
    bio: "Julia keeps every engagement moving — coordinating timelines, candidates and client communication so each search runs smoothly from kickoff to placement. She is the operational backbone that keeps our process organised and on schedule.",
    quote: "A great search is a well-run search.",
  },
  {
    slug: "marcus-honkanen",
    name: "Marcus Honkanen",
    title: "Senior Executive Search Partner, Europe",
    img: "/images/team/marcus.jpg",
    aspect: 1.46,
    objectPosition: "35% 22%",
    linkedin: "https://www.linkedin.com/in/marcushonkanen/",
    email: "marcus@berghansen.com",
    bio: "Marcus is an expert in Executive Search, with more than 20 years of international experience. Before becoming an entrepreneur in 2015, he was Managing Director and Partner in Executive Search on an international level at Kienbaum. One of his special talents is bringing people together from very different backgrounds. He uses his intercultural skills to facilitate this effectively, as well as his expertise and network spanning a wide range of industries within the Nordics and DACH.",
    quote: "Bringing people together – that’s my passion.",
    logo: "/images/team/nordic-minds-logo.png",
  },
  {
    slug: "yolanda-nokuri-hegngi",
    name: "Yolanda Nokuri Hegngi",
    title: "Partner, Executive Coach",
    img: "/images/team/yolanda2.png",
    aspect: 1.0,
    zoom: 1.2,
    objectPosition: "50% 45%",
    linkedin: "https://www.linkedin.com/in/yolanda-nokuri-hegngi-18173018/",
    email: "yolanda@berghansen.com",
    bio: "With over 30 years working with global executives and organizations to generate unique solutions to complex challenges and ambiguous problems, Yolanda provides strategic leadership advisory services designed to enhance and accelerate executive performance, organizational culture, and decision-making. Her key pillars include executive coaching, strategic advisory, leadership onboarding and transition acceleration, and change management and team alignment.",
    quote: "We start with the business goal — the right people follow from there.",
    logo: "/images/team/stimulus2logo.png",
    logoHeight: 74,
  },
];
