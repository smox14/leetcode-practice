//  step 
// 1. loop through the input array 
// 2. check the index of number 
//  2.1 if the index of that number != the last index of that number, return true 
//  2.2 else, check the next number 

const containsDuplicate = input => {
  for( let number of input){
    if(input.indexOf(number) != input.lastIndexOf(number)) return true
  }
  return false
};

// another solution >> faster solution

// const containsDuplicate = input => {
//   return new Set(input).size < input.length
// };


module.exports = containsDuplicate;