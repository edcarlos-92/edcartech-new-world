## Edcartech.com

A modernized portfolio and content site built with the latest Next.js and React, keeping the original look while fixing legacy issues and improving performance, DX, and consistency.

### Tech Stack
- Next.js 15, React 19, TypeScript 5
- Tailwind CSS 3 (dark mode via class)
- Headless UI, Heroicons v2
- NextUI (select components), Framer Motion peer
- Apollo Client v3 (GraphQL)
- Sanity (content), Next.js API routes

### Highlights
- Centralized theme config in `lib/themeConfig.ts` (backgrounds, typography, buttons, shared form styles)
- Updated all legacy imports/APIs (Heroicons v2, NextUI changes, Tailwind utilities)
- Redesigned Portfolio page with typing effects and gradient-border buttons
- Contact form posts to `/api/contact` and uses Nodemailer (SMTP)

### Setup
```bash
pnpm install
pnpm run dev
# http://localhost:3000
```

### Environment
Create `.env.local` for email sending:
```
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_username
SMTP_PASS=your_password
CONTACT_TO=recipient@yourdomain.com
CONTACT_FROM=no-reply@yourdomain.com
```

### Theming
- Global page background: `themeConfig.backgrounds.main`
- Shared form styles: `themeConfig.form`
- Dark mode via `next-themes` and Tailwind `dark:` variants

### Deployment
Target: Vercel. Set environment variables in the project settings before building.

### License
MIT — © Edcartech


