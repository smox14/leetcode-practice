const isPalindome = require('./palindromeNumber')

describe('Palindrome Number', () => {
  it('returns "true" when input is 121', () => {
    const input = 121
    const expectResult = true 
    const actualResult = isPalindome(input)

    expect(actualResult).toBe(expectResult)
  })

  it('returns "false" when input is -121', () => {
    const input = -121
    const expectResult = false
    const actualResult = isPalindome(input)

    expect(actualResult).toBe(expectResult)
  })

  it('returns "false" when input is 10', () => {
    const input = 10
    const expectResult = false
    const actualResult = isPalindome(input)

    expect(actualResult).toBe(expectResult)
  })

})