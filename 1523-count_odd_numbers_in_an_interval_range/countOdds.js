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

//  best short solution 
// possible value 
// 1. even & even
// 2. even & odd
// 3. odd & even 
// 4. odd & odd ** 
const countOdds2 = function(low, high) {
  const diffNumber = Math.round((high - low) / 2);  // cover 1 - 3
  return (low % 2 == 1 && high % 2 == 1)? diffNumber + 1 : diffNumber;
};
module.exports = countOdds2;