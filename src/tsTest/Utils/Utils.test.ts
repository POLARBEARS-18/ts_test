import { toUpperCase } from './Utils'

describe('Utils test suite', () => {
  it('should return uppercase', () => {
    const result = toUpperCase('abc')
    expect(result).toBe('ABC')
  })
})
