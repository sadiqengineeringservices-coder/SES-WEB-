# Vercel Deployment Readiness — Task List

1. [x] Fix `vite.config.ts` — remove invalid `tsconfigPaths: true`, add proper `@/*` alias.
2. [x] Add `vercel.json` — SPA rewrites + correct build/output config.
3. [x] Update `index.html` — remove Bolt.new-branded OG image, set proper site metadata + favicon.
4. [x] Update Google Maps location in `Contact.tsx` and `Footer.tsx` to the new share link.
5. [x] Fix `vite.config.ts` `__dirname` warning — use `import.meta.url` compatible approach.
6. [x] Verify production build succeeds cleanly (no warnings).

## Deployment Status
- Build command: `npm run build` (`tsc -b && vite build`)
- Output directory: `dist`
- Vercel will auto-detect this Vite project.
