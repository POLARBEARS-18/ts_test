import { StringUtils, toUpperCase } from './Utils'

describe('Utils test suite', () => {
  describe('StringUtils tests', () => {
    let sut: StringUtils

    beforeEach(() => {
      sut = new StringUtils()
      console.log('Setup')
    })

    afterEach(() => {
      // モックをクリアする
      console.log('Teardown')
    })

    it.only('Should return correct upperCase', () => {
      const actual = sut.toUpperCase('abc')

      expect(actual).toBe('ABC')
      console.log('Actual test')
    })

    it('Should throw error on invalid argument - function', () => {
      const expectError = () => {
        const actual = sut.toUpperCase('')
      }
      expect(expectError).toThrow()
      expect(expectError).toThrowError('Invalid argument')

      expect(() => {
        sut.toUpperCase('')
      }).toThrowError('Invalid argument')
    })

    it('Should throw error on invalid argument - try catch block', () => {
      try {
        sut.toUpperCase('')
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error).toHaveProperty('message', 'Invalid argument')
      }
    })
  })

  it('should return uppercase', () => {
    const result = toUpperCase('abc')
    expect(result).toBe('ABC')
  })
})
