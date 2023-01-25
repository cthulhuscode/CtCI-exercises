/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures (only arrays and strings)?
 */

/**
 * 1. Without using additional DS
 * Time: O(n^2)
 * Space: O(1)
 */

function isUnique1(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++)
      if (str[i] === str[j]) return false;
  }

  return true;
}

console.log(isUnique1("abdce"));

/**
 * 2. Using a Hash Table
 * Time: O(n)
 * Space: O(n)
 */

function isUnique2(str) {
  const ht = {};

  for (let letter of str.toLowerCase()) {
    if (!ht[letter]) ht[letter] = true;
    else return false;
  }

  return true;
}

console.log(isUnique2("abdce"));

/**
 * 3. Using a Set
 * Time: O(n)
 * Space: O(n)
 */

function isUnique3(str) {
  return str.length === new Set(str.toLowerCase()).size;
}

console.log(isUnique3("abdce"));

/**
 * 4. Could a bit vector be useful?
 * Time: O(n)
 * Space: O(n)
 */

function isUnique4(str) {
  const bitArray = Array(26).fill(false);

  for (let char of str.toLowerCase()) {
    let index = char.charCodeAt() - "a".charCodeAt();

    if (bitArray[index]) return false;
    else bitArray[index] = true;
  }

  return true;
}

console.log(isUnique4("abdce"));

/**
 * 5. Can you solve in O(N log N) time?
 * Time: O(N log N)
 * Space: O(N)
 */

function isUnique5(str) {
  sortedStr = str.toLowerCase().split("").sort().join("");

  for (let i = 1; i < sortedStr.length; i++) {
    if (sortedStr[i - 1] === sortedStr[i]) return false;
  }

  return true;
}

console.log(isUnique5("zvxrsab"));

/**
 * 6. Using Bit Manipulation
 * Time: O(N)
 * Space: O(1)
 */

function isUnique6(str) {
  let checker = 0;

  for (let char of str.toLowerCase()) {
    let val = char.charCodeAt() - "a".charCodeAt();
    // Create mask, move bit to the left and compare
    if ((checker & (1 << val)) > 0) return false;
    // Move bit to the val index and add it
    else checker |= 1 << val;
  }

  return true;
}

console.log(isUnique6("alkcfga"));
