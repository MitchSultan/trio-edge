// Mock content. Swap images, copy and videos when the client supplies the real thing.
const img = (seed: string, w = 1400, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const heroVideos = Array.from({ length: 6 }, (_, i) => `/videos/tile-${i + 1}.mp4`);

export type Project = { slug: string; title: string; category: string; year: string; img: string; featured?: boolean };
export const projects: Project[] = [
  // { slug: "nyayo-courtyard", title: "Nyayo Courtyard", category: "Architecture film", year: "2026", img: img("te-featured", 1800, 1200)},
  // { slug: "mama-mboga-network", title: "Mama Mboga Network", category: "Brand and web", year: "2026", img: img("te-2", 1200, 1500) },
  { slug: "omanyala-foundation", title: "Omanyala Foundation", category: "E-commerce", year: "2025", img: "/images/ma.png" },
  { slug: "merishaw-school", title: "Merishaw School", category: "Campaign", year: "2025", img: "/images/utu.png" },
  { slug: "utucrest-global", title: "UtuCrest Global", category: "Property platform", year: "2025", img: "/images/utug.png" },
  { slug: "shepherds-junior-school", title: "Shepherds Junior School", category: "Education", year: "2024", img: "/images/sh.png", featured: true },
];

export const about = {
  lead: "We are a Nairobi based agency that turns local stories into brands, films and digital products that hold their own anywhere in the world. We start with the people and places behind a business, then build the identity, the website and the content that carry it further.",
  second: "Our team is dedicated to make sure your brand get seen and heard.",
};

export const caseStudy = {
  title: "Shepherds Junior School",
  client: "Shepherds Junior School, Nairobi",
  intro: "A public courtyard in the middle of Nairobi needed one story that residents, visitors and funders could all recognise.",
  blocks: [
    { h: "The Problem:-", p: " Low number of new students- Poor uptake of new education system- Low Brand visibility and consistency" },
    { h: "What we did", p: "We created a new brand identity anchored on culture and the rich heritage- Brought in storytelling to help improve brand image and push for more enrollments" },
    { h: "What changed", p: "Out of the goal of 100 students in a year, we managed to get 78 students in 3 months" },
  ],
  stats: [["+78%", "Student Increase"], ["4", "festival selections"], ["13 wks", "brief to launch"]],
};

export const founder = {
  name: "Rachael",
  role: "Founder and creative director",
  img: "/images/team4.webp",
  quote: "I started Trio Edge because the best work I saw in Nairobi was being described to the world by people who had never stood in these streets. We tell it from the inside, and we build it to travel.",
};

export const team = [
  { name: "Wanjiru Kamau", role: "Head of design", img: '/images/team.webp' },
  { name: "Brian Mutua", role: "Lead engineer", img: '/images/team1.webp' },
  { name: "Zawadi Achieng", role: "Film director", img: '/images/team2.webp'},
  { name: "Tom Nguyen", role: "Strategy lead", img: '/images/team3.webp' },
];

export const services = [
  { title: "Brand strategy", text: "Positioning, naming and identity systems rooted in the story of the business." },
  { title: "Web design and build", text: "Fast, accessible websites and shops on Next.js, WordPress, Shopify and WooCommerce." },
  { title: "Film and photography", text: "Documentary-style films and photo libraries shot on location across East Africa." },
  { title: "Payments and product", text: "M-Pesa, Flutterwave and Paystack integrations, dashboards and custom platforms." },
  { title: "Campaigns", text: "Launch and growth campaigns planned, produced and measured end to end." },
];

export const partners = ["Omanyala", "UtuCrest", "Sherpherd Junior School", "Merishaw School"];

export const testimonials = [
  { q: "They understood our story faster than we did, and the site now sells it better than any pitch deck.", a: "Njeri Karanja", r: "Director, Rift Valley Coffee Co." },
  { q: "Delivered on time, on budget, and the M-Pesa checkout worked on the first day of launch.", a: "Peter Ochieng", r: "Founder, Mama Mboga Network" },
  { q: "Our festival finally looks like the festival it is. Audiences from three continents found us.", a: "Fatuma Bakari", r: "Producer, Lamu Light Festival" },
];
