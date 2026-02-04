export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Channels", href: "#channels" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "FAQ", href: "#faq" },
];

export const PROBLEM_CARDS = [
  {
    title: "Fraud is accelerating",
    stat: "$16.6B",
    statLabel: "lost to digital scams in 2024",
    description:
      "Up **370% in five years**. Imposter scams are the **#1 category**, and AI-powered deepfakes surged **700%** in fintech alone.",
    icon: "ShieldAlert" as const,
  },
  {
    title: "Everyone is a target",
    stat: "73%",
    statLabel: "of Americans have been scammed",
    description:
      "**68% get scam calls weekly**. Victims lose **$19,000 on average**. Yet there's still no standard way for customers to verify who they're talking to.",
    icon: "HelpCircle" as const,
  },
  {
    title: "A global crisis",
    stat: "$1T",
    statLabel: "stolen worldwide in 2024",
    description:
      "More than the **global drug trade**. **79% of Americans** call it a major national problem. **68%** say AI will make it worse. No one has built the verification layer.",
    icon: "TrendingDown" as const,
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Verify your domain",
    description:
      "Prove you own your domain with a single DNS TXT record. We confirm your identity so customers never have to guess.",
    icon: "Globe" as const,
    detail: "DNS TXT verification",
  },
  {
    number: "02",
    title: "Register every channel",
    description:
      "Import your official phone numbers, emails, social handles, and short codes into a single source of truth.",
    icon: "Layers" as const,
    detail: "Dashboard + bulk import",
  },
  {
    number: "03",
    title: "Deploy your trust page",
    description:
      "Go live at verify.yourcompany.com. Customers search any suspicious contact and get an instant answer.",
    icon: "Rocket" as const,
    detail: "Custom domain ready",
  },
];

export const CHANNELS = [
  { name: "Phone", icon: "phone" },
  { name: "Email", icon: "email" },
  { name: "SMS", icon: "sms" },
  { name: "X / Twitter", icon: "x" },
  { name: "Telegram", icon: "telegram" },
  { name: "Discord", icon: "discord" },
  { name: "WhatsApp", icon: "whatsapp" },
  { name: "Instagram", icon: "instagram" },
  { name: "LinkedIn", icon: "linkedin" },
  { name: "Facebook", icon: "facebook" },
];

export const VERIFICATION_STATES = [
  {
    status: "verified",
    label: "Verified",
    emoji: "\u2713",
    description: "This is an official channel",
    example: {
      channel: "+1-800-555-0142",
      type: "Phone",
      company: "Acme Corp",
    },
    action: "Safe to respond. This channel belongs to the company.",
    color: "state-verified",
  },
  {
    status: "not-found",
    label: "Not Found",
    emoji: "\u2717",
    description: "Not registered with us",
    example: {
      channel: "support@acme-help.net",
      type: "Email",
      company: "Acme Corp",
    },
    action: "Not in our records. Verify independently before responding.",
    color: "state-not-found",
  },
  {
    status: "compromised",
    label: "Compromised",
    emoji: "\u26A0",
    description: "Do not respond",
    example: {
      channel: "@AcmeSupport",
      type: "Telegram",
      company: "Acme Corp",
    },
    action: "This channel was compromised on Jan 28. Do not engage.",
    color: "state-compromised",
  },
  {
    status: "deprecated",
    label: "Deprecated",
    emoji: "\u26A0",
    description: "No longer in use",
    example: {
      channel: "+1-800-555-0199",
      type: "Phone",
      company: "Acme Corp",
    },
    action: "This number was retired Dec 2024. Use +1-800-555-0142 instead.",
    color: "state-deprecated",
  },
];

export const TOOLKIT_FEATURES = [
  {
    title: "Trust Page",
    description:
      "A hosted verification page on your domain (verify.company.com) where customers search any contact and get an instant answer.",
    icon: "Globe" as const,
    preview: "verify.yourcompany.com",
  },
  {
    title: "QR Codes",
    description:
      "Auto-generated QR codes you can print on statements, business cards, and signage. Customers scan to verify.",
    icon: "QrCode" as const,
    preview: "Scan to verify",
  },
  {
    title: "Embeddable Widget",
    description:
      "A drop-in search widget for your existing contact page. Customers verify without leaving your site.",
    icon: "Code2" as const,
    preview: "<script src=\"redtorii.js\">",
  },
  {
    title: "Email & SMS Templates",
    description:
      "Ready-to-send templates announcing your verification page. Customize and blast to your entire customer base.",
    icon: "FileText" as const,
    preview: "3 templates included",
  },
  {
    title: "Scam Alerts",
    description:
      "Post warnings about active impersonation campaigns. Customers see alerts front and center on your trust page.",
    icon: "Bell" as const,
    preview: "Real-time alerts",
  },
  {
    title: "Incident Mode",
    description:
      "One click to flag multiple channels as compromised during a security incident. Bulk status change in seconds.",
    icon: "ShieldOff" as const,
    preview: "One-click lockdown",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is Red Torii?",
    answer:
      "Red Torii is the anti-impersonation stack for companies. It gives businesses the tools to protect their customers from fraud and impersonation across every communication channel — so people always know who they're really talking to.",
  },
  {
    question: "How does channel verification work?",
    answer:
      "Companies verify their domain ownership via a DNS TXT record, then register their official channels in a dashboard. Each channel gets a status (verified, compromised, deprecated) that customers can look up instantly on the company's trust page.",
  },
  {
    question: "What channels are supported?",
    answer:
      "We support phone numbers, email domains, SMS short codes, and social media handles across X/Twitter, Telegram, Discord, WhatsApp, Instagram, LinkedIn, and Facebook.",
  },
  {
    question: "How do customers verify a channel?",
    answer:
      "Customers visit the company's trust page (which lives on the company's own domain, like verify.company.com) and search for the suspicious contact. They instantly see whether it's verified, not found, compromised, or deprecated — with clear guidance on what to do.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes. Red Torii supports custom domains via CNAME records. Your trust page can live at verify.yourcompany.com instead of on our domain, building trust because customers see your domain, not ours.",
  },
  {
    question: "What happens if a channel is compromised?",
    answer:
      "You can instantly flag individual channels or activate Incident Mode to mark multiple channels as compromised with one click. Customers searching those channels will see a clear warning to not respond.",
  },
  {
    question: "Who is Red Torii built for?",
    answer:
      "Any company that communicates with customers and wants to protect them from impersonation scams. We're starting with crypto and fintech companies where fraud is most prevalent and the willingness to pay is highest.",
  },
  {
    question: "Is Red Torii free?",
    answer:
      "We'll share pricing details soon. Reach out to learn more about early access and pilot programs.",
  },
];

export const FOOTER_LINKS = {
  product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Channels", href: "#channels" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Pricing", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
