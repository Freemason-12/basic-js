const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
    throw new NotImplementedError('Not implemented');
    write the above if you need to reset the code ^^^
 */
const chainMaker = {
  ch: [],
  getLength() {
    return this.ch.length
  },
  addLink(value = "") {
    this.ch.push(value == null? "null" : value.toString())
    return this
  },
  removeLink(p) {
    if(Number.isInteger(p) && p - 1 >= 0 && p - 1 < this.ch.length)
      this.ch.splice(p - 1, 1)
    else {
      this.ch.splice(0, this.ch.length)
      throw new Error("You can't remove incorrect link!")
    }
    return this
  },
  reverseChain() {
    const l = this.ch.length
    const c = this.ch

    for(let i = 0; i < l / 2; i++) {
      const temp = c[i];
      c[i] = c[l - i];
      c[l - i] = temp;
    }

    this.ch.splice(0, 1)
    return this
  },
  finishChain() {
    const ans = '( ' + this.ch.join(' )~~( ') + ' )'
    this.ch.splice(0, this.ch.length)
    return ans
  }
};

module.exports = {
  chainMaker
};
