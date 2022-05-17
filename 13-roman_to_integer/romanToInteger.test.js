const romanToInt = require('./romanToInteger')

describe('Roman to Integer', () => {
  it('return 3 when input is "III"', () => {
    const input = "III"
    const expectResult = 3 
    const actualResult = romanToInt(input)

    expect(actualResult).toBe(expectResult)
  })

  it('return 58 when input is "LVIII"', () => {
    const input = "LVIII"
    const expectResult = 58
    const actualResult = romanToInt(input)

    expect(actualResult).toBe(expectResult)
  })

  it('return 1994 when input is "MCMXCIV"', () => {
    const input = "MCMXCIV"
    const expectResult = 1994
    const actualResult = romanToInt(input)

    expect(actualResult).toBe(expectResult)
  })
})