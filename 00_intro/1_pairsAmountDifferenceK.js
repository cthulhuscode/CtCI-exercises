/**
 * Given an array of distinct integer values, count the number of pairs
 * of integers that have difference k.
 * For example, given the array { 1, 7, 5, 9, 2, 12, 3}
 * and the difference k = 2,there are four pairs
 * with difference2: (1, 3), (3, 5), (5, 7), (7, 9).
 */

function numberOfPairsWithDifference(array, diff) {
  let counter = 0;
  const hashTable = {};

  // Brute force
  // for (let i = 0; i < array.length; i++)
  //   for (let j = 0; j < array.length; j++)
  //     array[i] - array[j] === diff && counter++;

  // Best approach
  for (let num of array) {
    if (!hashTable[num]) hashTable[num] = num;

    if (hashTable[num + diff]) counter++;

    if (hashTable[num - diff]) counter++;
  }

  return counter;
}

console.log(numberOfPairsWithDifference([1, 7, 5, 9, 2, 12, 3], 2));
