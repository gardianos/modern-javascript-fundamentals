/*****************************************************************************************************************
 *                                            The For Loop                                                       *
 * The most basic way of iterating a data structure is the for loop. Let’s take a look at how it works.          *
 * Syntax: for                                                                                                   *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let anArray = ["one", "two", "three"];

  for (let x = 0, y = anArray.length; x < y; x += 1) {
    console.log(anArray[x]);
  }

  let x = 0;
  for (;;) {
    if (x >= anArray.length) {
      break;
    }

    console.log(anArray[x]);
    x += 1;
  }
})();
