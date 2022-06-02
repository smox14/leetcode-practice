const transpose = function(matrix) {
  let transposeMatrix = [];

  for(let i=0; i < matrix.length; i++) {
    for(let j=0; j< matrix[i].length; j++){
      if(!transposeMatrix[j]) transposeMatrix[j] = [] 
      transposeMatrix[j].push(matrix[i][j])
    };
  };
  return transposeMatrix
};

module.exports = transpose;