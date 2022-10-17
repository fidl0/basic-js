const { NotImplementedError } = require('../extensions/index.js');

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

  let resArr = arr;
  if ( arr == '' ) return [];

  // let keyArr = [
  //   '--discard-prev',
  //   '--double-prev',
  //   '--double-next',
  //   '--discard-next',
  // ]
  // for ( let i = 0, count = 0; i < keyArr.length - 1; i++){
  //   while ( resArr.includes(keyArr[i]) ) {
  //     count++;
  //   }
  // }
  // if (count === 0) {return arr;}
}

module.exports = {
  transform
};
