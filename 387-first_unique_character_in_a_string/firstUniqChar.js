// Step
// 1. loop through string input 
// 2. check the character if appear somewhere else 



function firstUniqChar(s) {
  for( let i = 0; i < s.length; i++){
    if(s.indexOf(s[i]) == s.lastIndexOf(s[i])){
      return i
    }
  }
  return -1
}

// using Hash map 

function firstUniqCharHashMap(s) {
 let charMap = new Map()

 for( let i = 0; i < s.length; i++) {
   (charMap.has(s[i]))? charMap.set(s[i], 2) : charMap.set(s[i],1)
 }
 
 let letters = Array.from(charMap.keys())
 
 for(let i =0; i < letters.length; i++) {
  if(charMap.get(letters[i]) === 1) return i
}
  return -1
}


module.exports = firstUniqCharHashMap