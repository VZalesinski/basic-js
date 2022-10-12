const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == "") return "";
  let result = [];
  const newArr = str.split("");
  let counter = 1;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      counter = counter + 1;
    } else {
      counter > 1 ? result.push(counter + newArr[i]) : result.push(newArr[i]);
      counter = 1;
    }
  }

  return String(result.join(""));
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine,
};
