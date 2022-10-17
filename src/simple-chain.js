const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value === null ? this.chain.push("null") : this.chain.push(value);

    return this;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (
      position <= 0 ||
      this.getLength() < position ||
      typeof position != "number"
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  finishChain() {
    let res = this.chain.map((e) => `( ${e} )`).join("~~");
    this.chain.length = 0;
    return res;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
};

module.exports = {
  chainMaker,
};
