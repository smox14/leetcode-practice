// Step
// 1. loop through string input 
// 2. check the character if appear somewhere else 


function firstUniqChar(s) {
  for( let i = 0; i < s.length; i++){
    if(!s.replace(s[i],'').includes(s[i])) {
      return i
    }
  }
  return -1
}

module.exports = firstUniqChar