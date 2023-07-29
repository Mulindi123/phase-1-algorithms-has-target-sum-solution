function hasTargetSum(array, target) { 
 for(let i=0;i<array.length;i++){
  //n steps
  const complement = target-array[i]
  for(let j=i+1; j<array.length; j++){
    //n*n steps
  if(array[j]===complement)
  return true;
  }
 }
  //if I reach the end of the array with no matching complement, 
  //return false
  return false;


  // Write your algorithm here
  /**I need to make a function called "hastargetSum" that checks if any two numbers
   * in an array add up to som terget. For example if i have [2,4,6,8,10] and a target of 12,
   * it should return true since 2+10 = 12 and 4+8 = 12.
   */
}

/* 
  Write the Big O time complexity of your function here
  //Runtime 0(n^2)
  space 0(n)
*/

/* 
  Add your pseudocode here
  hasTargetSum([2,4,6,8,10], 12)
  iterate though each number in the array 
  for each current number,identify a complement that adds to the target(compl= target-number)
  iterate though the respt of the array and 
  check if any number is our complement
  if so, return true,
  if I reach the end of the array with no matching complement, 
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
