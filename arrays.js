/*****************************************************************************************************************
 *                                          Arrays                                                               *
 * Arrays are one of the most commonly used structures for storing data, and you will use them all the time.     *
 * In this lesson we’ll focus on the basics: what arrays are and how they can be created, accessed, and modified.*
 * Syntax: Array, []                                                                                             *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let myArray = new Array(1);
  let myArray2 = ["a value", "second value"];
  myArray2[myArray2.length - 1]; // second value
  myArray2[99] = "something";
})();
