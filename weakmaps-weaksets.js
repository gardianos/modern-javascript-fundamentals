/*****************************************************************************************************************
 *                                          Weak Maps and Weak Sets                                              *
 * Following on the previous lesson, let’s take a look at WeakSets and WeakMaps. A WeakSet contains weakly       *
 * referenced unique objects, whereas a WeakMap has weakly referenced objects as keys                            *
 * Syntax: new WeakMap(), WeakSeat(), add, remove                                                                *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let myWeakSet = new WeakSet();

  let someObj = {};
  myWeakSet.add(someObj);
  console.log(myWeakSet.has(someObj));

  myWeakSet.delete(someObj);
  console.log(myWeakSet.has(someObj));

  let myWeakMap = new WeakMap();
})();
