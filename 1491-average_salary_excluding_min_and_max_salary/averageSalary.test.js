const average = require('./averageSalaray')

describe('1491 - Average salary', () => {
  it('Should return the average salary excluding minimum and maximum salary', () => {
    const salary = [4000,3000,1000,2000]
    const expectResult = 2500.00000 

    const actualResult = average(salary)

    expect(actualResult).toBe(expectResult)
  });
});