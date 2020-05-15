/*****************************************************************************************************************
 *                                           Iterators                                                           *
 * Let’s learn about the iteration protocol and see how to iterate some of the data structures that we looked    *
 * at earlier.                                                                                                   *
 * Syntax: next                                                                                                  *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let mySet = new Set(["a", "b", "c"]);
  let setItems = mySet.entries();

  console.log(setItems.next());
  console.log(setItems.next());
  console.log(setItems.next());
  console.log(setItems.next());
})();
