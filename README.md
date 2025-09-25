# Photography Site Starter (Next.js + Sanity + Xendit)

What you get:
- Next.js App Router scaffold (TypeScript, Tailwind)
- Sanity schemas (photo, album, printPriceMatrix)
- API routes for checkout (Xendit), webhook, and proof submit
- Minimal gallery components and pages

## Quick start
1. Install deps
   ```bash
   pnpm i   # or npm i / yarn
   ```
2. Create a Sanity project
   ```bash
   npm create sanity@latest
   # note your SANITY_PROJECT_ID and dataset
   ```
3. Copy `.env.example` to `.env.local` and fill values.
4. Dev
   ```bash
   pnpm dev
   ```

## Environment variables
See `.env.example`.
