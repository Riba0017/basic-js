const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',

  getLength() {
    if(this.chain !== 0) {
      return this.chain.split('~~').length
    }

  },
  addLink(value) {
    if(value === '') {
      value = ''
    }
    if(this.chain.length !== 0) {
      this.chain += `~~( ${value} )`
    } else {
      this.chain = `( ${value} )`
    }
    return this;

  },
  removeLink(position) {
    if(position-1 > this.chain.split('~~').length
    || position-1 < 0
    || isNaN(position)) {
      this.chain = '';
      throw new Error('error')
    }
    if(this.chain !== 0) {
      let arr = this.chain.split('~~');
      arr.splice(position-1, 1);
      this.chain = arr.join('~~')
    }
    return this
  },
  reverseChain() {
    if(this.chain !== 0) {
      this.chain = this.chain.split('~~').reverse().join('~~')
    }
    return this;
  },
  finishChain() {
    let result = this.chain;
    this.chain = '';
    return result;
  }
};

module.exports = chainMaker;
