const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let depth = 1,
    max = 0;
class DepthCalculator {

  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
    for ( let i = 0; i < arr.length; i++ ) {
      if ( Array.isArray(arr[i]) ) {
        depth++;
        this.calculateDepth(arr[i]);
        if (depth < max) depth = max;
        depth = 1;
      }
    }

    return depth;
  }

}

module.exports = {
  DepthCalculator
};
