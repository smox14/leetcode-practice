//  best and easy solution
function runningSum(nums) {
  let outputArray = [];
  let temp = 0;
  for(let i = 0; i < nums.length; i++) {
    temp += nums[i];
    outputArray[i] = temp;
  };
  return outputArray;
};

// use map function
function runningSum1(nums) {
  let temp = 0;
  return nums.map ((number) => temp += number);
}


// use reduce function
function runningSum2(nums) {
  
  return nums.reduce(( arrayOfSum, value, index ) =>  
    [...arrayOfSum, value + (arrayOfSum[index - 1] || 0) ]
  , []);
}


module.exports = runningSum1