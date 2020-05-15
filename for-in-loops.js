/*****************************************************************************************************************
 *                                           The `for .. in` Loop                                                *
 * While a classic for loop is used for iterating arrays, a for .. in loop is used to iterate objects.           *
 * Syntax: for  ..  in                                                                                           *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log("key is:", prop, "value is:", obj[prop]);
    }
  }
})();
