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

/**
 * 1. Using hashmap
 * Time: O(n)
 * Space: O(n)
 */
function isPermutationOfPalindrome(str) {
  const eachCharFreq = new Map();
  let noSpacesStrLength = 0;

  for (let char of str) {
    const charFreq = eachCharFreq.get(char);

    if (char !== " ") {
      noSpacesStrLength++;
      if (charFreq) eachCharFreq.set(char, charFreq + 1);
      else eachCharFreq.set(char, 1);
    }
  }

  // If even
  if (noSpacesStrLength % 2 === 0) {
    for (let [key, count] of eachCharFreq) {
      if (count % 2 !== 0) return false;
    }
  } else {
    // If odd
    let isOdd = false;
    for (let [key, count] of eachCharFreq) {
      if (count % 2 === 1 && isOdd) return false;
      else if (count % 2 === 1) isOdd = true;
    }
  }

  return true;
}

console.log(isPermutationOfPalindrome("tactcoapapa"));
