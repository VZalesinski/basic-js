const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!arr || !Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return arr;
  let transformedArr = [];
  let discardNext = false;
  for (let i = 0; i < arr.length; i++) {
    if (discardNext) {
      discardNext = false;
      continue;
    }

    switch (arr[i]) {
      case "--double-next":
        if (arr[arr.length - 1] === "--double-next") continue;
        transformedArr.push(arr[i + 1]);
        break;

      case "--double-prev":
        if (arr[0] === "--double-prev" || arr[i - 2] === "--discard-next")
          continue;
        transformedArr.push(arr[i - 1]);
        break;
      case "--discard-next":
        discardNext = true;
        break;
      case "--discard-prev":
        if (arr[0] === "--discard-prev" || arr[i - 2] === "--discard-next") {
          continue;
        } else {
          transformedArr.pop();
          break;
        }
      default:
        if (true) transformedArr.push(arr[i]);
    }
  }
  return transformedArr;
}

module.exports = {
  transform,
};
