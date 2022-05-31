
const firstUniqChar = require('./firstUniqChar')

describe('firstUniqChar', () => {
  it('should return first non-repeating character', () => {
    const input = "leetcode"
    const expectResult = 0

    const actualResult = firstUniqChar(input)
    expect(actualResult).toBe(expectResult)

  })

  it('should return first non-repeating character', () => {
    
    const input = "loveleetcode"
  
    const expectResult = 2

    const actualResult = firstUniqChar(input)
    expect(actualResult).toBe(expectResult)

  })

  it('should return -1', () => {
  
    
    const input = "aabb"
  
    const expectResult = -1

    const actualResult = firstUniqChar(input)
    expect(actualResult).toBe(expectResult)

  })


})