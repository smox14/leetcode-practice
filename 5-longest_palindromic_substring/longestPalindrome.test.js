const longestPalindrome = require('./longestPalindrome')

describe('longestPalindrome', () => {
  it('returns "bab" when input is "babad"', () => {
    const input = "babad"
    const expectResult = "bab"
    const actualResult = longestPalindrome(input)

    expect(actualResult).toBe(expectResult)
  })

  it('returns "bb" when input is "cbbd"', () => {
    const input = "cbbd"
    const expectResult = "bb"
    const actualResult = longestPalindrome(input)

    expect(actualResult).toBe(expectResult)
  })
})