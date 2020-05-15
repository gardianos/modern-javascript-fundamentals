/*****************************************************************************************************************
 *                                           The `for .. of` Loop                                                *
 * The for .. of loop is a new construct that allows us to iterate over the values in a collection instead of    *
 * the keys. Let’s take a look at how we can use it to iterate arrays, maps, or other iterable objects.          *
 * Syntax: for  ..  of                                                                                           *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let arr = [1, 2, 3];

  for (let val of arr) {
    console.log("the value is:", val);
  }

  let mySet = new Set();
  mySet.add("x").add("y").add("z");

  for (let val of mySet) {
    console.log(val); // x y z
  }

  let myMap = new Map();
  myMap.set("key1", "a").set("key2", "b").set("key3", "c");

  for (let val of myMap) {
    if (val[1] === "b") {
      break;
    }
    console.log(val[1]); // a b c
  }
})();
