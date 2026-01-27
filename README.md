# Martin's Portfolio 🚀

A modern, dark-themed portfolio built with Next.js, Tailwind CSS, and Framer Motion showcasing Web3 and frontend development work.

## Features

✨ **Modern Design**
- Dark theme with purple/cyan accents
- Smooth animations with Framer Motion
- Fully responsive (mobile-first)
- Scroll-triggered animations

🛠️ **Tech Stack**
- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Sora, JetBrains Mono

📱 **Sections**
- Hero with CTA buttons
- About & Skills
- Featured Projects (Paymesh, Nixo)
- 7+ Project Showcase
- Contact Information

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

### Building

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

Push to GitHub → Vercel auto-deploys on `main` branch

**Required Environment Variables:**
- `VERCEL_TOKEN` - Vercel API token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Project ID

### GitHub Actions CI/CD

Automated pipeline that:
- ✅ Tests builds on Node 18.x & 20.x
- ✅ Runs ESLint checks
- ✅ Auto-deploys to Vercel on `main` push

**Setup in GitHub:**
1. Settings → Secrets → New repository secret
2. Add: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
3. Push to trigger workflow

## Customization

### Update Content
Edit `src/components/`:
- `Hero.tsx` - Main heading & CTA
- `About.tsx` - Bio & skills
- `Projects.tsx` - Project list
- `Contact.tsx` - Email & socials

### Add Your CV
Place PDF in `public/cv/resume.pdf`

### Change Fonts
Edit `src/app/layout.tsx` - currently using Sora + JetBrains Mono

### Change Colors
Edit Tailwind classes in components - using purple/cyan accent theme

## Performance

- ⚡ Optimized Core Web Vitals
- 🎯 Lighthouse 90+
- 📦 Code splitting & lazy loading
- 🖼️ Image optimization

## Scripts

```bash
npm run dev       # Dev server
npm run build     # Production build
npm run start     # Production server
npm run lint      # ESLint check
```

## Contact

- Twitter: [@martin_tech21](https://x.com/martin_tech21)
- GitHub: [martinvibes](https://github.com/martinvibes)
- LinkedIn: [martinvibes](https://www.linkedin.com/in/martinvibes/)

---

Built with Next.js & Tailwind CSS

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
