/**
 * 1.4 Palindrome Permutation: Given a string, write a function
 * to check if it is a permutation of a palindrome. A palindrome
 * is a word or phrase that is the same forwards and backwards.
 * A permutation is a rearrangement of letters.
 * The palindrome does not need to be limited to just dictionary words.
 * EXAMPLE
 * Input: Tact Coa
 * Output: True (permutations: "taco cat", "atco cta", etc.)
 * Hints:
 * - #106: you don't have to-and should not-generate all permutations.
 * This would be very inefficient.
 * - #121: What characteristics would a string that is a permutation of a palindrome have?
 * - #134: Have you tried a hash table? You should be able to get this down to 0( N) time
 * - #136: Can you reduce the space usage by using a bit vector?
 *
 */

/**
 * 1. Using a hashmap
 * Time: O(n)
 * Space: O(n)
 */
function isPermutationOfPalindrome1(str) {
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

  /** If even
   * Strings with even length must have all even counts
   * of characters
   */

  if (noSpacesStrLength % 2 === 0) {
    for (let [key, count] of eachCharFreq) {
      if (count % 2 !== 0) return false;
    }
  } else {
    /** If odd
     * Strings of an odd length must have exactly one
     * character with a odd count.
     */
    let isOdd = false;
    for (let [key, count] of eachCharFreq) {
      if (count % 2 === 1 && isOdd) return false;
      else if (count % 2 === 1) isOdd = true;
    }
  }

  return true;
}

console.log(isPermutationOfPalindrome1("tactcoapapa"));

/**
 * 2. Cleaner version using a hashmap
 * Time: O(n)
 * Space: O(n)
 */

function isPermutationOfPalindrome2(str) {
  const eachCharFreq = new Map();
  let oddCount = 0;

  /**
   * The string can have no more than one character
   * that is odd
   */
  for (let char of str) {
    const charFreq = eachCharFreq.get(char);

    if (char !== " ") {
      if (charFreq) eachCharFreq.set(char, charFreq + 1);
      else eachCharFreq.set(char, 1);

      if (eachCharFreq.get(char) % 2 === 1) oddCount++;
      else oddCount--;
    }
  }

  return oddCount <= 1;
}

console.log(isPermutationOfPalindrome2("tactcoapapa"));

/**
 * 3. Using a bit vector
 * Time: O(n)
 * Space: O(1)
 */
