const transpose = require('./transpose')

describe('transpose', () => {
  it('Should return transpose of matrix', () => {
    const inputMatrix = [[1,2,3],[4,5,6],[7,8,9]]
    const expectResult = [[1,4,7],[2,5,8],[3,6,9]]

    const actualResult = transpose(inputMatrix)
    expect(actualResult).toEqual(expectResult)
  });

  it('Should return transpose of matrix', () => {
    const inputMatrix =  [[1,2,3],[4,5,6]]
    const expectResult = [[1,4],[2,5],[3,6]]

    const actualResult = transpose(inputMatrix)
    expect(actualResult).toEqual(expectResult)
  });


});
