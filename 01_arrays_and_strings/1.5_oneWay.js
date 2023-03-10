/**
 * One Away: There are three types of edits that can be
 * performed on strings: insert a character, remove a character,
 * or replace a character. Given two strings, write a function
 * to check if they are one edit (or zero edits) away.
 *
 * EXAMPLE
 * pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> false
 *
 * Hints:
 * - #023:
 * - #097:
 * - #130:
 */

/**
 * 1. Using a hashmap
 * Time: O(n)
 * Space: O(n)
 */

// function zeroOneEditsAway1(str1, str2) {
//   let editsCount = 0;

//   if (str2.length > str1.length + 1) {
//     return false;
//   } else if (str2.length < str1.length - 1) return false;

//   let moreLengthHashMap, lessLengthHashMap;
//   if (str1.length > str2.length) {
//     moreLengthHashMap = createHashMap(str1);
//     lessLengthHashMap = createHashMap(str2);
//   } else {
//     moreLengthHashMap = createHashMap(str1);
//     lessLengthHashMap = createHashMap(str2);
//   }

//   // Compare hashmaps
//   for (let [char, val] of moreLengthHashMap) {
//     if (editsCount > 1) return false;

//     console.log(lessLengthHashMap.get(char));

//     if (!lessLengthHashMap.get(char)) editsCount++;
//     else if (lessLengthHashMap.get(char) !== val) editsCount++;
//   }

//   return editsCount <= 1;
// }

// console.log(zeroOneEditsAway1("pale", "ales"));

// function createHashMap(str) {
//   const hashMap = new Map();

//   for (let char of str) {
//     const storedVal = hashMap.get(char);

//     if (storedVal >= 1) hashMap.set(char, storedVal + 1);
//     else hashMap.set(char, 1);
//   }

//   return hashMap;
// }

function zeroOneEditsAway1(str1, str2) {
  let i = 0,
    j = 0;
  let editsCount = 0;

  if (str2.length > str1.length + 1) {
    return false;
  } else if (str2.length < str1.length - 1) return false;
}
