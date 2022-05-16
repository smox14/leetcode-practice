const lengthOfLongestSubstring = function(s) {
  let longest = ""
  let substring = ""

  for(let i = 0; i< s.length; i++) {
    // if(! substring.includes(s[i])) {
    //   substring += s[i] 
    // } else {
      
    //   substring = substring.slice(1)
    //   // substring += s[i] 
    // }
    substring += s[i] 
    
    console.log(substring)
    if( substring.length >= longest.length) longest = substring
  }
  
  return longest.length
}

module.exports = lengthOfLongestSubstring