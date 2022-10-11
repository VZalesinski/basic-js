const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // let collection = [];
  // let arr = String(n).split("").map(Number);
  // let sortArr = arr.slice().sort();
  // let digit = sortArr.find((el) => el === 0);
  // let deleteDigit = arr.indexOf(digit);
  // arr.splice(deleteDigit, 0);
  // return Number(arr.join(""));
  // for (let i = 0; i < arr.length; i++) {
  //   let curr = arr[i];
  //   curr >= min ?
  // if (curr === 0) {
  //   arr.splice(arr.indexOf(curr), 0);
  // } else {
  //   collection.push(curr);
  // }
  // }
  // return Number(collection.join(""));
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit,
};
