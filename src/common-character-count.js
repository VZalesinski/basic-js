const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const newArr1 = s1.split("");
  const newArr2 = s2.split("");

  for (let i = 0; i < newArr1.length; i++) {
    for (let j = 0; j < newArr2.length; j++) {
      if (newArr1[i] == newArr2[j]) {
        newArr2.splice(j, 1);
        counter++;
        break;
      }
    }
  }

  return counter;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount,
};
