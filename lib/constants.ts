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
      "Add your company domain and we'll confirm you own it. One click, no engineering required.",
    icon: "Globe" as const,
    detail: "One-click verification",
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
    title: "Deploy your Trust Gate",
    description:
      "Go live at verify.yourcompany.com. Customers search any suspicious contact and get an instant answer.",
    icon: "Rocket" as const,
    detail: "Custom domain ready",
  },
];

export const STEP_CHANNELS = [
  {
    value: "+1-800-555-0142",
    type: "Phone",
    icon: "phone" as const,
    label: "Main support line",
  },
  {
    value: "help@acmecorp.com",
    type: "Email",
    icon: "email" as const,
    label: "Support inbox",
  },
  {
    value: "@AcmeCorp",
    type: "X / Twitter",
    icon: "x" as const,
    label: "Official account",
  },
  {
    value: "+1-800-555-0177",
    type: "Phone",
    icon: "phone" as const,
    label: "Sarah Chen — Sales",
  },
  {
    value: "m.rivera@acmecorp.com",
    type: "Email",
    icon: "email" as const,
    label: "Marco Rivera — Compliance",
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
    emoji: "\u26A0",
    description: "This channel is not in our records",
    warning: "Do not engage",
    example: {
      channel: "support@acme-help.net",
      type: "Email",
      company: "Acme Corp",
    },
    action:
      "This channel is not registered. If the company uses Red Torii, all legitimate channels should be listed. Assume this is not official.",
    color: "state-compromised",
  },
  {
    status: "compromised",
    label: "Compromised",
    emoji: "\u26A0",
    description: "This channel has been compromised",
    warning: "Do not respond",
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

export const FAQ_ITEMS = [
  {
    question: "What is Red Torii?",
    answer:
      "Red Torii is the anti-impersonation stack for companies. It gives businesses the tools to protect their customers from fraud and impersonation across every communication channel — so people always know who they're really talking to.",
  },
  {
    question: "How does channel verification work?",
    answer:
      "Companies verify their domain ownership via a DNS TXT record, then register their official channels in a dashboard. Each channel gets a status (verified, compromised, deprecated) that customers can look up instantly on the company's Trust Gate.",
  },
  {
    question: "What channels are supported?",
    answer:
      "We support phone numbers, email domains, SMS short codes, and social media handles across X/Twitter, Telegram, Discord, WhatsApp, Instagram, LinkedIn, and Facebook.",
  },
  {
    question: "How do customers verify a channel?",
    answer:
      "Customers visit the company's Trust Gate (which lives on the company's own domain, like verify.company.com) and search for the suspicious contact. They instantly see whether it's verified, not found, compromised, or deprecated — with clear guidance on what to do.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes. Red Torii supports custom domains via CNAME records. Your Trust Gate can live at verify.yourcompany.com instead of on our domain, building trust because customers see your domain, not ours.",
  },
  {
    question: "What happens if a channel is compromised?",
    answer:
      "You can instantly flag individual channels or activate Incident Lockdown to mark multiple channels as compromised with one click. Customers searching those channels will see a clear warning to not respond.",
  },
  {
    question: "Who is Red Torii built for?",
    answer:
      "Any company that communicates with customers and wants to protect them from impersonation scams. We're starting with crypto and fintech companies where fraud is most prevalent and the willingness to pay is highest.",
  },
  {
    question: "How can I get access?",
    answer:
      "We're onboarding early partners now. Reach out at hello@redtorii.com and we'll walk you through the platform and discuss how Red Torii fits your use case.",
  },
];

export const FOOTER_LINKS = {
  product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Channels", href: "#channels" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Early Access", href: "mailto:hello@redtorii.com" },
  ],
  company: [
    { label: "Contact", href: "mailto:hello@redtorii.com" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
