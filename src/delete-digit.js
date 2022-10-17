const { NotImplementedError } = require('../extensions/index.js');

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

  let len = n.toString().length;

  let max = Number(n.toString().split('').filter( (el, id) => {
    if ( el[id] !== el[len-1] ) {
      return el;
    }
  } ).join(''));
  let n2;

  for ( let i = 0; i < len; i++ ) {
    n2 = n
    let curNum = n2.toString()
                  .split('')
                  .filter( (el, id) => {
                    if ( el[id] !== el[i] ) {
                      return el;
                    }
                  } )
      curNum = Number(curNum.join(''));
      console.log('max:',max,'curNum:',curNum)
    if (curNum > max) max = curNum;
  }
  console.log('return max:', max)
  return max;
}

module.exports = {
  deleteDigit
};
