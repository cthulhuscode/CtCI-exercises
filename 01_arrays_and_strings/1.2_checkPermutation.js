/**
 * 1.2 Check Permutation: Given two strings, write a method to decide
 * if one is a permutation of the other.
 */

/**
 *  1. Using hash table
 *  Time: O(n)
 *  Space: O(n)
 */

function checkPermutation1(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Ht = countEachCharFreq(str1);
  const str2Ht = countEachCharFreq(str2);

  if (Object.entries(str1Ht).length !== Object.entries(str2Ht).length)
    return false;

  for (let keyval of Object.entries(str1Ht)) {
    const char = keyval[0];
    if (keyval[1] !== str2Ht[char]) return false;
  }

  return true;
}

function countEachCharFreq(str) {
  const hashTable = {};
  for (let char of str.toLowerCase()) {
    if (hashTable[char]) hashTable[char] = hashTable[char] + 1;
    else hashTable[char] = 1;
  }

  return hashTable;
}

console.log(checkPermutation1("abc", "cba"));

/**
 * 2. Improved version using hash table
 * Time: O(n)
 * Space: O(n)
 */

function checkPermutation2(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Ht = {};
  for (let char of str1) str1Ht[char] = str1Ht[char] + 1 || 1;

  for (let char of str2) {
    str1Ht[char] = str1Ht[char] - 1;
    if (str1Ht[char] < 0) return false;
  }

  return true;
}

console.log(checkPermutation2("abc", "bac"));

/**
 * 3. Sort strings and compare if they're equal. More elegant..
 * Time: O(N log N)
 * Space: O(1)
 */

function checkPermutation3(str1, str2) {
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}

console.log(checkPermutation3("abc", "cab"));
