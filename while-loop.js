/*****************************************************************************************************************
 *                                           While Loops                                                         *
 * JavaScript also supports two additional types of loops: while and do .. while loops. These loops differ from  *
 * for loops in that they test a condition evaluating to true or false at each iteration step, rather than       *
 * iterating a range of numbers or elements in an object. We’ll cover the syntax of both while loop types and    *
 * look at some considerations of their usage.                                                                   *
 * Syntax: while, do                                                                                             *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let limit = 0;

  while (limit < 5) {
    if (limit === 3) {
      break;
    }
    console.log((limit += 1));
  }

  let condition = true;

  do {
    console.log("executed once");
    condition = false;
  } while (condition);
})();
