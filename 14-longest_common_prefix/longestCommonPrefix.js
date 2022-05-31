// steps
// 1. find the min lenght of the strs 
// 2. loop to every word to check the common character
//  if they have the common charater => store in the prefix variable, check the next character 
//  else break the loop
// 3. return the longest prefix

function longestCommonPrefix(strs) {
  if(!strs.length) return ""
  let prefix = ''
  // const minLength = strs.reduce((a,b) => a.length < b.length? a : b).length   
  // or 
  const minLength = Math.min(...strs.map( word => word.length))
  for(let i = 0 ; i < minLength ; i++){
    let char = strs[0][i]
    if(strs.every( word => word[i] == char)) {
      prefix += char
    }else {
      break
    }
    
  }
  return prefix
}

module.exports = longestCommonPrefix