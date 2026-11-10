# OPUS Studio

Greek-language creative development studio website built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide React.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Before publishing, set the real business values in `.env.local`:

```dotenv
NEXT_PUBLIC_CONTACT_EMAIL=you@your-real-domain.gr
NEXT_PUBLIC_SITE_URL=https://your-real-domain.example
```

The contact form uses a `mailto:` draft. It does not submit or store messages. If no email is configured, the form fields and submit action remain unavailable. The Méro café and FORMA Atelier demos are linked from their matching starter and business packages; the café demo is also linked from its portfolio card.

## Checks and production build

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Vercel deployment

Import this project into Vercel as a Next.js application and keep the default Next.js build settings. Add `NEXT_PUBLIC_CONTACT_EMAIL` and `NEXT_PUBLIC_SITE_URL` to the Vercel project environment, then deploy. Replace and verify the privacy policy details before publication. No production domain or deployment has been configured in this workspace.
