/*****************************************************************************************************************
 *                                              Maps                                                             *
 * Maps are objects that store key, value pairs. In the case of maps, both the keys and values can be of any type*                                                                                 *
 * Syntax: new Map(), set, get, has, delete                                                                      *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let myMap = new Map();
  let myMap2 = new Map([
    ["a", "b"],
    [1, 2],
  ]);
  myMap2.set("c", 3);
  console.log(myMap2.get("c")); // 3
})();
