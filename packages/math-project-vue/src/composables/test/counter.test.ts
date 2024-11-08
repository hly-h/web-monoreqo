import { expect, it } from 'vitest'
import { useCounter } from '../counter'

it('useCounter', () => {
  const { count, inc, dec } = useCounter()
  expect(count.value).toBe(0)
  inc()
  expect(count.value).toBe(1)
  dec()
  expect(count.value).toBe(0)
})
