import { expect, test, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import Home from '../app/page'

afterEach(cleanup)

// next/image requires Next.js context — mock it for unit tests
vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt as string} />
  },
}))

test('Home page renders the heading', () => {
  render(<Home />)
  expect(
    screen.getByRole('heading', { level: 1, name: /to get started/i })
  ).toBeDefined()
})

test('Home page renders the Documentation link', () => {
  render(<Home />)
  expect(screen.getByRole('link', { name: /documentation/i })).toBeDefined()
})
