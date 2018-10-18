'use strict';

//Palindrome checker exercise

//leave only letters
function leaveLetters(string) {
  const onlyLetters = string.toLowerCase().replace(/[\W_]/g, '');
  return onlyLetters;
}
//reverse the given string
function reverse(string) {
  const stringReversed = leaveLetters(string).split('').reverse().join('');
  return stringReversed;
};

//compare the reversed string with the original one
function isPalindrome(string) {
  return leaveLetters(string) === reverse(string);
};

//as one function
function checkPalindrome(string) {
  const onlyLetters = string.toLowerCase().replace(/[\W_]/g, '');
  return onlyLetters === onlyLetters.split('').reverse().join('');
}

console.log(isPalindrome('Eva, Can I Stab Bats In A Cave'));
console.log(checkPalindrome('A Santa Lived As a Devil At NASA'));
