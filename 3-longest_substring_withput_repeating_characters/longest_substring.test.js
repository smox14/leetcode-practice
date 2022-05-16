const lengthOfLongestSubstring = require('./longest_substring.js')

describe.skip('Longest Substring Without Repeating Characters', () => {
  it('returns 3 when input is "abcabcbb"', () => {
    const input = "abcabcbb"
    const expectResult = 3
    const actualResult = lengthOfLongestSubstring(input)

    expect(actualResult).toBe(expectResult)
  }) 

  it('returns 1 when input is "bbbbb"', () => {
    const input = "bbbbb"
    const expectResult = 1
    const actualResult = lengthOfLongestSubstring(input)

    expect(actualResult).toBe(expectResult)
  }) 

  it('returns 3 when input is "pwwkew"', () => {
    const input = "pwwkew"
    const expectResult = 3
    const actualResult = lengthOfLongestSubstring(input)

    expect(actualResult).toBe(expectResult)
  }) 

  it('returns 2 when input is "aab"', () => {
    const input = "aab"
    const expectResult = 2
    const actualResult = lengthOfLongestSubstring(input)

    expect(actualResult).toBe(expectResult)
  }) 
   
})