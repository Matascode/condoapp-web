# Testing

100% test coverage is the key to great vibe coding. Tests let you move fast, trust your instincts, and ship with confidence — without them, vibe coding is just yolo coding. With tests, it's a superpower.

## Framework

**Vitest v4** + **@testing-library/react v16**

## How to run

```bash
npm test          # run once (CI mode)
npm run test:watch  # watch mode for development
```

Tests live in `__tests__/` (colocated with the app router or alongside source files).

## Test layers

| Layer | What | Where | When |
|-------|------|-------|------|
| Unit | Pure functions, utilities, helpers | `__tests__/` | Any isolated logic |
| Component | React component rendering, interactions | `__tests__/` | UI components |
| Integration | API routes, DB queries | `__tests__/` | Server-side logic with real Supabase test DB |
| E2E | Full user flows | Playwright (Phase 2) | Critical paths end-to-end |

## Conventions

- Test files: `__tests__/<name>.test.tsx` or `<name>.test.ts`
- Mock `next/image` and `next/navigation` in component tests (they require Next.js context)
- Always call `afterEach(cleanup)` from `@testing-library/react` in component test files
- API integration tests hit the **real test Supabase project** (`SUPABASE_URL_TEST` / `SUPABASE_SERVICE_ROLE_KEY_TEST`)
- Never import secrets or API keys directly — use `process.env`
