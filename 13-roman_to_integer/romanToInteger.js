const romanToInt = (romanIntput) => {
  const symbol = {
    'I' : 1    ,
    'V' : 5    ,
    'X' : 10   ,
    'L' : 50   ,
    'C' : 100  ,
    'D' : 500  ,
    'M' : 1000 
  }
  let total = 0
  
  for(let i = 0; i < romanIntput.length; i++) {
    if( symbol[romanIntput[i]] < symbol[romanIntput[i + 1]]) {
      total += symbol[romanIntput[i + 1]] -  symbol[romanIntput[i]]
      i++
    }else {
      total += symbol[romanIntput[i]]
    }

  }
  return total 
}

module.exports = romanToInt