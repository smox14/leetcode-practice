const isPalindome = function(x) {
  let input = String(x)
  for( let i=0; i<=Math.floor(input.length/2); i++) {
    if( input[i] != input[input.length-1 - i]){
      return false
    }   
  }
  return true
  
  // another solution
  // let s1 = x.toString()
  // return s1 == s1.split("").reverse().join("")

}

module.exports = isPalindome