/**
 * 1.4 Palindrome Permutation: Given a string, write a function
 * to check if it is a permutation of a palindrome. A palindrome
 * is a word or phrase that is the same forwards and backwards.
 * A permutation is a rearrangement of letters.
 * The palindrome does not need to be limited to just dictionary words.
 * EXAMPLE
 * Input: Tact Coa
 * Output: True (permutations: "taco cat", "atco eta", etc.)
 * Hints: #106, #121, #134, #136
 *
 */

function isPermutationOfPalindrome(str) {
  let reversedStr = "";
  let origWithNoSpaces = "";

  for (let char of str) {
    if (char !== " ") {
      reversedStr = char + reversedStr;
      origWithNoSpaces += char;
    }
  }

  console.log(reversedStr);
  console.log(origWithNoSpaces);

  return origWithNoSpaces === reversedStr;
}

console.log(isPermutationOfPalindrome("tactcoapapa"));
