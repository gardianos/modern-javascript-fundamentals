/*****************************************************************************************************************
 *                                      Working With Arrays                                                      *
 * Arrays also have a variety of different properties and methods. Let’s review the most commonly used.          *
 *                                                                                                               *
 * Syntax: length, push, unshift, pop, shift, splice, reverse, sort, join, indexOf, slice                        *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let array = ["one", "two", "three"];

  console.log(array.length); // 3

  array.push("four"); // add to array element
  array.unshift("zero"); // add start to the new array
  console.log(array);

  array.pop(); // remove last item from array
  array.shift(); // remove item from start item
  console.log(array);

  array.splice(0, 3, "a", "b", "C"); // delete if only 0 delete all ,
  array.reverse(); // returns
  array.sort();
  console.log(array);

  console.log(
    [3, 10000, 20].sort(function (a, b) {
      return a - b;
    })
  );

  console.log(
    ["b", "C", "a"].sort(function (a, b) {
      let lowercaseA = a.toLowerCase(),
        lowercaseB = b.toLowerCase();

      if (lowercaseA < lowercaseB) {
        return -1;
      } else if (lowercaseA === lowercaseB) {
        return 0;
      } else {
        return 1;
      }
    })
  );

  console.log(array.join("|")); // Cab result , C|a|b
  console.log(array.indexOf("b")); // Result 2
  console.log(array.slice(1, 2)); // between 2 arrays Result a
})();
