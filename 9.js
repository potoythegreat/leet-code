// link: https://leetcode.com/problems/palindrome-number/
// difficulty: easy


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  //check if number is negative
  if(x<0){
      return false
  }

  let reverse = 0;
  let reverseNotComplete = true;
  let reverseRemaining = x;

  //getting reverse of x
  while(reverseNotComplete){
    reverse = reverse*10 + reverseRemaining%10;
    reverseRemaining = Math.floor((reverseRemaining/10));
    if(reverseRemaining == 0){
      reverseNotComplete = false;
    }
  }
  console.log(reverse);
  return x == reverse;
};

console.log(isPalindrome(121));

