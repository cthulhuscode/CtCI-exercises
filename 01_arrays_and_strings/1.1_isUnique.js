/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures (only arrays and strings)?
 */

/**
 * 1. Without using additional DS
 * Time: O(n^2)
 * Space: O(n)
 */

/**
 * 1. Using a Hash Table
 * Time: O(n)
 * Space: O(n)
 */

function isUnique(str) {
  const ht = {};

  for (let letter of str.toLowerCase()) {
    if (!ht[letter]) ht[letter] = true;
    else return false;
  }

  return true;
}

console.log(isUnique("abdce"));

/**
 * 2. Using a Set
 * Time: O(n)
 * Space: O(n)
 */

function isUnique(str) {
  return str.length === new Set(str.toLowerCase()).size;
}

console.log(isUnique("abdce"));

/**
 * 3. Could a bit vector be useful?
 * Time: O(n)
 * Space: (1)
 */

/**
 * 4. Can you solve in O(N log N) time?
 * Time: O(N log N)
 * Space: O(n)
 */
