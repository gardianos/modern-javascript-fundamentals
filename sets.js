/*****************************************************************************************************************
 *                                              Sets                                                             *
 * Sets are JavaScript objects that store unique values of any type. Set is one of the collection classes        *
 * recently added to JavaScript.                                                                                 *
 * Syntax: new Set(), size, add, delete, clear, has                                                              *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let mySet = new Set();

  let anArray = [1, 1, 1, 2, 2, 3];
  let mySet2 = new Set(anArray);

  console.log(mySet2);
  console.log(mySet2.size); // 3
  mySet2.add(4).add(5);
  mySet2.delete(6);
  console.log(mySet2);
  console.log(mySet2.has(3)); // true
})();
