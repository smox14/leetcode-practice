const countOdds = require('./countOdds')

describe('1523 - count odd', () => {
  it('Should return the count of odd numbet between low and high (inclusive)', () => {
    const low = 3 , high = 7;
    const expectResult = 3;

    const actualResult = countOdds(low, high);

    expect(actualResult).toBe(expectResult);
  });
});