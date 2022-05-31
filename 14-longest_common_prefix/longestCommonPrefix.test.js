const longestCommonPrefix = require('./longestCommonPrefix')

describe('longestCommonPrefix', () => {
  it('returns the common prefix among the input strings', () => {
    const input = ["flower","flow","flight"]
    const expectResult = "fl"
    const actualResult = longestCommonPrefix(input)
    
    expect(actualResult).toBe(expectResult)
  })

  it('returns the common prefix among the input strings', () => {
    const input = ["dog","racecar","car"]
    const expectResult = ""
    const actualResult = longestCommonPrefix(input)
    
    expect(actualResult).toBe(expectResult)
  })

})