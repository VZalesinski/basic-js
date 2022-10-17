const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(value) {
    value === false
      ? (this.direction = "reverse")
      : (this.direction = "direct");
  }
  encrypt(string, key) {
    if (!string || !key) throw Error("Incorrect arguments!");
    string = string.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let symbol = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt(0) < 65 || string[i].charCodeAt(0) > 90) {
        result += string[i];
      } else {
        let letter = key[symbol].charCodeAt(0) + string[i].charCodeAt(0) - 65;
        if (letter > 90) letter -= 26;
        result += String.fromCharCode(letter);
        symbol++;
        if (symbol === key.length) symbol = 0;
      }
    }
    return this.direction === "direct"
      ? result
      : result.split("").reverse().join("");
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(string, key) {
    if (!string || !key) throw Error("Incorrect arguments!");
    string = string.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let symbol = 0;

    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt(0) < 65 || string[i].charCodeAt(0) > 90) {
        result += string[i];
      } else {
        let letter = string[i].charCodeAt(0) - key[symbol].charCodeAt(0) + 65;
        if (letter < 65) letter += 26;
        result += String.fromCharCode(letter);
        symbol++;
        if (symbol === key.length) symbol = 0;
      }
    }
    return this.direction === "direct"
      ? result
      : result.split("").reverse().join("");

    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine,
};
