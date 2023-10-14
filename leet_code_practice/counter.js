/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var conuter=-1;
    return ()=>{return ++conuter + n}
  };
  
  /** 
   * const counter = createCounter(10)
   * counter() // 10
   * counter() // 11
   * counter() // 12
   */