const containsDuplicate = require('./containsDuplicate')

describe('217 - Contains Duplicate', () => {
  it('Should return true if any value appears at least twice in the array', () => {
    const input = [1,2,3,1]
    const actualResult = containsDuplicate(input)

    expect(actualResult).toBe(true);
  });
});