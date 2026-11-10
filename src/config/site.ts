export const siteConfig = {
  name: "OPUS Studio",
  wordmark: "OPUS®",
  descriptor: "CREATIVE DEVELOPMENT STUDIO",
  description: "Σχεδιάζουμε και αναπτύσσουμε σύγχρονες ψηφιακές εμπειρίες που αναδεικνύουν την ταυτότητα κάθε επιχείρησης.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  demoUrls: {
    starter: "https://starter-demo-website.vercel.app/",
    business: "https://busness-demo-website.vercel.app/",
  },
  socialLinks: {
    instagram: "",
    linkedin: "",
  },
} as const;
