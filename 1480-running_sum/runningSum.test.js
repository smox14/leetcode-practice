const runningSum = require('./runningSum');

describe('runningSum', () =>{
  it('Should return a running sum of an array', () => {
    const input = [1,2,3,4];
    const expectResult = [1,3,6,10];

    const actualResult = runningSum(input);

    expect(actualResult).toEqual(expectResult);
  });
}); 