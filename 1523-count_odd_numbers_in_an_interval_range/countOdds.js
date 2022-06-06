const countOdds = function(low, high) {
  let totalOdd = 0
  for(let i = low; i <= high; i++){
    if(i % 2 == 1){
      totalOdd += 1
      i++
    }
  }
  return totalOdd;
};

module.exports = countOdds;