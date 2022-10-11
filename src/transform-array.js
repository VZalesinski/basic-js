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
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] != typeof "number" ||
      arr[i] !== "--double-next" ||
      arr[i] !== "--discard-next" ||
      arr[i] !== "--discard-prev" ||
      arr[i] !== "--double-prev"
    )
      continue;
    switch (arr[i]) {
      case "--double-next":
        transformedArr.push(arr[i + 1]);
        transformedArr.push(arr[i + 1]);
        break;
      // case "--discard-next":
      //   arr[i+1].
    }
  }
}

module.exports = {
  transform,
};
