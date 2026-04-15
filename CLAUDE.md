@AGENTS.md

## Testing

Run: `npm test` (CI) or `npm run test:watch` (dev)
Test directory: `__tests__/`
Framework: Vitest + @testing-library/react
Docs: see TESTING.md

Expectations:
- 100% test coverage is the goal — tests make vibe coding safe
- When writing new functions, write a corresponding test
- When fixing a bug, write a regression test
- When adding error handling, write a test that triggers the error
- When adding a conditional (if/else, switch), write tests for BOTH paths
- Never commit code that makes existing tests fail
- Mock `next/image` and `next/navigation` in component tests
- Always call `afterEach(cleanup)` in component test files
