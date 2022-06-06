//  step 
//  1. find min & max salary 
//  2. delete min & max salary 
//  3. calculate the average salary

const average = function(salary) {
  const min = Math.min(...salary)
  const max = Math.max(...salary)
  salary.splice(salary.indexOf(max),1)
  salary.splice(salary.indexOf(min),1)

  return salary
  .reduce( (total, value) => total + value)
  / salary.length
  
  
}

module.exports = average