/*****************************************************************************************************************
 *                                   Iterating and Transforming Arrays                                           *
 * Arrays have so many useful methods that I had to break  the array lesson into two parts!                      *
 * This time focusing on methods for iterating and transforming them                                             *
 * Syntax: forEach, some, every, reduce, map                                                                     *
 *****************************************************************************************************************/

(function () {
  "use strict";

  // visit each array item
  let array = ["x", "y", "z"];

  array.forEach(function (currentItem) {
    console.log(currentItem);
  });

  // iterate until callback returns true
  array.some(function (currentItem) {
    console.log("iterating...");
    return currentItem === "y";
  });

  // iterate until callback returns false
  array.every(function (currentItem) {
    console.log("also iterating...");
    return currentItem !== "x";
  });

  // reduce array to a single value
  let arr = [1, 2, 3, 4, 5];
  let sum = arr.reduce(function (previous, current) {
    return previous + current;
  }, 0);
  console.log(sum);

  //map- map an array into another array
  let refs = {
    a: "alpha",
    b: "beta",
    g: "gamma",
  };
  let arr2 = ["a", "b", "g"];
  let result = arr2.map(function (currentItem) {
    return refs[currentItem];
  });
  console.log(result);
})();
