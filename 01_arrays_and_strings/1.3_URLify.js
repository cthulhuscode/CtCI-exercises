/**
 * 1.3 URLify: Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end
 * to hold the additional characters, and that you are given the "true"
 * length of the string.
 *
 * (Note: If implementing in Java, please use a character array
 * so that you can perform this operation in place.)
 *
 * EXAMPLE
 * Input: "Mr John Smith ", 13
 * Output: "Mr%20John%20Smith"
 * Hints:
 * #53: It's often easiest to modify strings by going from the end of the string to the beginning.
 * #118: You might find you need to know the number of spaces. Can you just count them?
 *
 */

/**
 * 1. Brute force
 * Time: O(N^2)
 * Space: O(N/Spaces)
 */
function URLify1(str) {
  const words = splitBySpace1(str);
  let url = "";

  for (let i = 0; i < words.length; i++) {
    if (i !== words.length - 1) url += words[i] + "%20";
    else url += words[i];
  }

  return url;
}

function splitBySpace1(str) {
  const words = [];
  let word = "";

  for (let i = 1; i < str.length; i++) {
    // Get first and middle words from string
    if (str[i] === " " && str[i - 1] !== " ") {
      for (let j = i - 1; j >= 0; j--) {
        if (str[j] !== " ") {
          word = str[j] + word;

          if (j === 0) {
            words.push(word);
            word = "";
          }
        } else {
          words.push(word);
          word = "";
          break;
        }
      }
      // Get the last word of string
    } else if (i === str.length - 1 && str[i] !== " ") {
      for (let j = i; j >= 0; j--) {
        if (str[j] !== " ") {
          word = str[j] + word;
        } else {
          words.push(word);
          break;
        }
      }
    }
  }

  return words;
}

console.log(URLify1("Unique new york"));

/**
 * 2. Improved Brute force
 * Time: O(N)
 * Space: O(N/Spaces)
 */
function URLify2(str) {
  const words = splitBySpace2(str);
  let url = "";

  for (let i = 0; i < words.length; i++) {
    if (i !== words.length - 1) url += words[i] + "%20";
    else url += words[i];
  }

  return url;
}

function splitBySpace2(str) {
  const words = [];
  let word = "";

  for (let i = 0; i <= str.length; i++) {
    // Get first and middle words from string
    if (str[i] === " ") {
      if (word) {
        words.push(word);
        word = "";
      }
    } else if (i === str.length) {
      if (word) words.push(word);
    } else word += str[i];
  }

  return words;
}

console.log(URLify2("Unique new york"));
