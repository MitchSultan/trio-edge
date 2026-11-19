// Mock content. Swap images, copy and videos when the client supplies the real thing.
const img = (seed: string, w = 1400, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const heroVideos = Array.from({ length: 6 }, (_, i) => `/videos/tile-${i + 1}.mp4`);

export type Project = { slug: string; title: string; category: string; year: string; img: string; featured?: boolean };
export const projects: Project[] = [
  { slug: "nyayo-courtyard", title: "Nyayo Courtyard", category: "Architecture film", year: "2026", img: img("te-featured", 1800, 1200), featured: true },
  { slug: "mama-mboga-network", title: "Mama Mboga Network", category: "Brand and web", year: "2026", img: img("te-2", 1200, 1500) },
  { slug: "rift-valley-coffee", title: "Rift Valley Coffee Co.", category: "E-commerce", year: "2025", img: img("te-3", 1200, 1500) },
  { slug: "lamu-light-festival", title: "Lamu Light Festival", category: "Campaign", year: "2025", img: img("te-4", 1200, 1500) },
  { slug: "kisumu-lakeside", title: "Kisumu Lakeside Homes", category: "Property platform", year: "2025", img: img("te-5", 1200, 1500) },
  { slug: "safari-sound", title: "Safari Sound Archive", category: "Documentary", year: "2024", img: img("te-6", 1200, 1500) },
];

export const about = {
  lead: "We are a Nairobi studio that turns local stories into brands, films and digital products that hold their own anywhere in the world. We start with the people and places behind a business, then build the identity, the website and the content that carry it further.",
  second: "Our team works across Nairobi, Kampala and Sydney, so every project gets a local eye and a global one.",
};

export const caseStudy = {
  title: "Nyayo Courtyard",
  client: "Nyayo Courtyard Trust",
  intro: "A public courtyard in the middle of Nairobi needed one story that residents, visitors and funders could all recognise.",
  blocks: [
    { h: "The challenge", p: "Three overlapping stakeholders, no shared identity, and a site that most people walked through without noticing." },
    { h: "What we did", p: "We filmed the courtyard across a full year, built a visual identity from its materials and light, and launched a website that doubles as a living archive." },
    { h: "What changed", p: "Weekend visits grew, two new partners signed on, and the film was selected for four regional festivals." },
  ],
  stats: [["+64%", "weekend visits"], ["4", "festival selections"], ["12 wks", "brief to launch"]],
};

export const founder = {
  name: "Amani Otieno",
  role: "Founder and creative director",
  img: img("te-founder", 1000, 1300),
  quote: "I started Trio Edge because the best work I saw in Nairobi was being described to the world by people who had never stood in these streets. We tell it from the inside, and we build it to travel.",
};

export const team = [
  { name: "Wanjiru Kamau", role: "Head of design", img: img("te-t1", 900, 1100) },
  { name: "Brian Mutua", role: "Lead engineer", img: img("te-t2", 900, 1100) },
  { name: "Zawadi Achieng", role: "Film director", img: img("te-t3", 900, 1100) },
  { name: "Tom Nguyen", role: "Strategy lead", img: img("te-t4", 900, 1100) },
];

export const services = [
  { title: "Brand strategy", text: "Positioning, naming and identity systems rooted in the story of the business." },
  { title: "Web design and build", text: "Fast, accessible websites and shops on Next.js, WordPress, Shopify and WooCommerce." },
  { title: "Film and photography", text: "Documentary-style films and photo libraries shot on location across East Africa." },
  { title: "Payments and product", text: "M-Pesa, Flutterwave and Paystack integrations, dashboards and custom platforms." },
  { title: "Campaigns", text: "Launch and growth campaigns planned, produced and measured end to end." },
];

export const partners = ["Safaricom", "Equity Bank", "KCB Group", "Twiga Foods", "Nation Media", "Kenya Airways", "Java House", "Strathmore University"];

export const testimonials = [
  { q: "They understood our story faster than we did, and the site now sells it better than any pitch deck.", a: "Njeri Karanja", r: "Director, Rift Valley Coffee Co." },
  { q: "Delivered on time, on budget, and the M-Pesa checkout worked on the first day of launch.", a: "Peter Ochieng", r: "Founder, Mama Mboga Network" },
  { q: "Our festival finally looks like the festival it is. Audiences from three continents found us.", a: "Fatuma Bakari", r: "Producer, Lamu Light Festival" },
];
