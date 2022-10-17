const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.separator = options.separator ? options.separator : "+";
  options.additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;

  let additionStr = "";
  if (options.addition) {
    additionStr = String(options.addition);
  }

  if (options.additionRepeatTimes != undefined) {
    additionStr = String(options.addition);
    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
      additionStr =
        additionStr + options.additionSeparator + String(options.addition);
    }
  }

  let result = String(str) + String(additionStr);

  for (let i = 0; i < options.repeatTimes - 1; i++) {
    result =
      result + String(options.separator) + String(str) + String(additionStr);
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
