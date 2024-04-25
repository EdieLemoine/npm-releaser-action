import { describe, it, expect } from 'vitest'

const cases = Array.from({ length: 500 }).map((_, number) => {
  return [number + 1, (number + 1) * 2]
})

describe('does some random tests', () => {
  it.each(cases)('%d * 2 = %d', (num1, num2) => {
    expect(num1 * 2).toBe(num2)
  })

  it.each(cases)('%d - 2 != %d', (num1, num2) => {
    expect(num1 - 2).not.toBe(num2)
  })

  it.each(cases)('%d / 2 != %d', (num1, num2) => {
    expect(num1 / 2).not.toBe(num2)
  })

  it.each(cases)('%d % 2 != %d', (num1, num2) => {
    expect(num1 % 2).not.toBe(num2)
  })
})
