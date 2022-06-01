

function runningSum(nums) {
  let outputArray = [];
  let temp = 0;
  for(let i = 0; i < nums.length; i++) {
    temp += nums[i];
    outputArray[i] = temp;
  };
  return outputArray;
};

// use map 

function runningSum1(nums) {
  let temp = 0;
  return nums.map((number) => temp += number);
}

// use reduce 
function runningSum2(nums) {
  let temp = 0;
  return nums.map((number) => temp += number);
}


module.exports = runningSum2